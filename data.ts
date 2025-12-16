import { WorkItem } from './types';

// Centralized Assets Configuration
const IK_BASE = "https://ik.imagekit.io/vtitfjbr6";

export const ASSETS = {
  profile: `${IK_BASE}/kunal-katre-photo.webp`,
  resume: `${IK_BASE}/Kunal_Katre_Resume.pdf`,
  companies: {
    eka: `${IK_BASE}/company-logo/eka.png`,
    crio: `${IK_BASE}/company-logo/crio.jpeg`,
    flipkart: `${IK_BASE}/company-logo/Flipkart_Symbol_0.svg`,
    iitg: `${IK_BASE}/company-logo/IITG_logo.png`
  },
  projects: {
    cowin: {
      cover: `${IK_BASE}/cowin/cowin-hero-visual.png`,
      hero: `${IK_BASE}/cowin/cowin-hero-visual.png`,
      bookingFlow: `${IK_BASE}/cowin/book-flow-1.png`,
      downloadFlow: `${IK_BASE}/cowin/download-flow-1.png`
    },
    designSystem: {
      cover: "https://picsum.photos/seed/designsystem/800/800", // Update when links provided
      hero: "https://picsum.photos/seed/designsystem/1200/800"
    },
    webInfra: {
      cover: "https://picsum.photos/seed/webinfra/800/800", // Update when links provided
      hero: "https://picsum.photos/seed/webinfra/1200/800"
    },
    heartRate: {
      cover: `${IK_BASE}/hr/measuring-final.png`,
      hero: `${IK_BASE}/hr/measuring-final.png`,
      interface: `${IK_BASE}/hr/result-final.png`,
      onboarding: `${IK_BASE}/hr/pre-measure-final.webp`
    }
  }
};

export const works: WorkItem[] = [
  {
    id: 1,
    title: "Co-WIN Vaccine Flows",
    category: "Health Tech",
    description: "Architected Co-WIN vaccine flows driving 20M+ downloads & #1 Play Store rank. Designed for extreme public anxiety and technical chaos.",
    image: ASSETS.projects.cowin.cover,
    tags: ["Public Health", "High Scale", "Crisis Design"],
    award: "#1 Health App",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Design System Architecture",
    category: "Infrastructure",
    description: "Built a token-based Design System with automated pipelines (Figma to Swift/Kotlin/CSS) for a Server-Driven UI framework.",
    image: ASSETS.projects.designSystem.cover,
    tags: ["Design Ops", "Automation", "Design Tokens"],
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Web Publishing Engine",
    category: "No-Code & AI",
    description: "Architected a Decentralized Publishing Engine reducing campaign launch TAT from 1 week to <2 days via AI-assisted workflows.",
    image: ASSETS.projects.webInfra.cover,
    tags: ["Webflow", "AI Ops", "Speed"],
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Heart Rate Monitor",
    category: "Health Tech",
    description: "Designed the camera-based Heart Rate Monitor, improving conversion to 75% via research-led redesign and proactive guidance.",
    image: ASSETS.projects.heartRate.cover,
    tags: ["Computer Vision", "Retention", "UX Research"],
    liveUrl: "#"
  }
];