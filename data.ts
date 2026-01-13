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
      cover: `${IK_BASE}/cowin/homepage-card-images/form4.png`,
      hero: `${IK_BASE}/cowin/homepage-card-images/form4.png`,
      bookingFlow: `${IK_BASE}/cowin/book-flow-1.png`,
      downloadFlow: `${IK_BASE}/cowin/download-flow-1.png`
    },
    designSystem: {
      cover: `${IK_BASE}/ds/cover.png`,
      hero: `${IK_BASE}/ds/cover.png`,
      figmaGitRepos: `${IK_BASE}/ds/figma-git-repos.png`,
      platformBindingLayer: `${IK_BASE}/ds/platform-binding-layer.png`,
      tokenTaxonomy: `${IK_BASE}/ds/3-tier-token.png?updatedAt=1768301971227`
    },
    webInfra: {
      cover: `${IK_BASE}/webflow/cover.png`,
      hero: `${IK_BASE}/webflow/cover.png`
    },
    heartRate: {
      cover: `${IK_BASE}/hr/homepage-card-images/form4.png`,
      hero: `${IK_BASE}/hr/homepage-card-images/form4.png`,
      interface: `${IK_BASE}/hr/result-final.png`,
      onboarding: `${IK_BASE}/hr/pre-measure-final.webp`
    }
  }
};

export const works: WorkItem[] = [
  {
    id: 1,
    title: "Heart Rate Monitor",
    category: "Health Tech",
    description: "Redesigned the heart-rate monitor. Doubled user retention and improved conversion by 21%.",
    image: ASSETS.projects.heartRate.cover,
    gallery: [
      `${IK_BASE}/hr/homepage-card-images/form4.png`,
      `${IK_BASE}/hr/homepage-card-images/form3.png`,
      `${IK_BASE}/hr/homepage-card-images/form2.png`,
      `${IK_BASE}/hr/homepage-card-images/form1.png`
    ],
    tags: ["Computer Vision", "Retention", "UX Research"],
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Co-WIN Vaccine Flows",
    category: "Health Tech",
    description: "Designed the vaccine booking flow for 1.4 billion people. 20M+ downloads. #1 Play Store rank.",
    image: ASSETS.projects.cowin.cover,
    gallery: [
      `${IK_BASE}/cowin/homepage-card-images/form4.png`,
      `${IK_BASE}/cowin/homepage-card-images/form3.png`,
      `${IK_BASE}/cowin/homepage-card-images/form2.png`,
      `${IK_BASE}/cowin/homepage-card-images/form1.png`
    ],
    tags: ["Public Health", "High Scale", "Crisis Design"],
    award: "#1 Health App",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Design System Architecture",
    category: "Infrastructure",
    description: "Automated design tokens from Figma to Production. Zero handoff errors across Android, iOS, and Web.",
    image: ASSETS.projects.designSystem.cover,
    gallery: [
      "https://ik.imagekit.io/vtitfjbr6/ds/cover.png",
      "https://ik.imagekit.io/vtitfjbr6/ds/figma-git-repos.png",
      "https://ik.imagekit.io/vtitfjbr6/ds/platform-binding-layer.png",
      "https://ik.imagekit.io/vtitfjbr6/ds/3-tier-token.png?updatedAt=1768301971227"
    ],
    tags: ["Design Ops", "Automation", "Design Tokens"],
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Web Publishing Engine",
    category: "No-Code & AI",
    description: "Built a self-serve web engine. Reduced marketing campaign launch time by 80% using AI workflows.",
    image: ASSETS.projects.webInfra.cover,
    gallery: [
      `${IK_BASE}/webflow/cover.png`
    ],
    tags: ["Webflow", "AI Ops", "Speed"],
    liveUrl: "#"
  }
];