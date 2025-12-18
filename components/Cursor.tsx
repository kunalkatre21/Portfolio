import React, { useEffect, useRef, useState } from 'react';
import { useCursor } from './CursorContext';
import { ArrowRight } from 'lucide-react';

export const Cursor: React.FC = () => {
  const { cursorType } = useCursor();
  const cursorRef = useRef<HTMLDivElement>(null);

  // Track hover state locally to avoid complex DOM manipulation mixed with React render
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  const mouse = useRef({ x: -100, y: -100 });
  const follower = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Initialize on first valid mouse move
      if (follower.current.x === -100) {
        follower.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const computedStyle = window.getComputedStyle(target);
      const isPointer = computedStyle.cursor === 'pointer';

      const isInteractiveTag = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName);
      const closestInteractive = target.closest('a') || target.closest('button');

      if (isPointer || isInteractiveTag || closestInteractive) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      const { x, y } = mouse.current;
      const speed = 0.15;

      follower.current.x += (x - follower.current.x) * speed;
      follower.current.y += (y - follower.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${follower.current.x}px, ${follower.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Determine size and style based on state
  // Default: 20px (w-5)
  // Hover Link: 10px (scale-50 of 20px)
  // Project: Enlarge (e.g. 96px)

  const isProject = cursorType === 'project';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference hidden md:block">
      <div
        ref={cursorRef}
        className="absolute left-0 top-0 will-change-transform"
      >
        <div
          className={`
                    bg-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out
                    ${isProject ? 'w-24 h-24 -ml-12 -mt-12' : 'w-5 h-5 -ml-2.5 -mt-2.5'}
                    ${!isProject && isHoveringLink ? 'scale-50' : 'scale-100'}
                `}
        >
          <ArrowRight
            className={`text-black transition-opacity duration-300 ${isProject ? 'opacity-100' : 'opacity-0'}`}
            size={32}
          />
        </div>
      </div>
    </div>
  );
};