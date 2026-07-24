export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "MultiMovies",
    slug: "multimovies",
    description: "A modern, interactive movie web application featuring 3D visuals and animations",
    detailedDescription:
      " A modern, interactive movie web application built with React, GSAP, Framer Motion, and Three.js. This project features animated page transitions, an immersive 3D starfield background, and a responsive UI designed to provide an engaging movie browsing experience.",
    image: "/invoice.jpg",
    tags: ["React", "3D", "Animation", "Frontend", "Entertainment"],
    status: "active",
    techStack: ["React", "Three.js", "GSAP", "Framer Motion", "Tailwind CSS"],
    features: [
         "Immersive 3D starfield background using React Three Fiber",
      "Complex animated page transitions with GSAP and Framer Motion",
      "Interactive custom loader and dynamic view components",
      "Fully responsive design for seamless mobile and desktop experiences",
      "Modern, visually stunning user interface",
    ],
    learningOutcomes: [
       "Integrating 3D graphics into a web application using Three.js and @react-three/drei",
      "Orchestrating advanced animations with GSAP and Framer Motion",
      "Building responsive and interactive UI components in React",
      "Managing complex visual states and transitions",
    ],
    links: {
      visit: "https://multimovies.netlify.app/",
      github: "https://github.com/abhishek1165/MultiMovies",
      
    },
    author: "Abhishek Kachhap",
    authorAvatar: "/luffy.png",
  },
  {
  id: "2",
  title: "Connect IT",
  slug: "connect-it",
  description: "A modern Next.js web application featuring video capabilities, real-time updates, and secure authentication.",
  detailedDescription: "Connect is a comprehensive web application built with Next.js 14 and React 18. It integrates powerful features like real-time video streaming using the Stream Video React SDK and a robust backend with Convex. The app also provides secure user authentication via Clerk and a modern, accessible UI crafted with Tailwind CSS and Radix UI.",
  image: "/ConnectIt.png",
  tags: ["Next.js", "Video", "Real-time", "Full-Stack", "Web App"],
  status: "active",
  techStack: ["Next.js 14", "React 18", "Clerk", "Convex", "Stream Video React SDK", "Tailwind CSS", "Radix UI"],
  features: [
    "Secure user authentication with Clerk",
    "Video features via Stream Video React SDK",
    "Database integration with Convex",
    "Real-time updates and notifications",
    "Custom dashboard with user roles"
  ],
  learningOutcomes: [
     "Building real-time video applications with Stream SDK",
    "Full-stack Next.js development using a Convex backend",
    "Implementing secure authentication flows and role-based access control with Clerk",
    "Designing modern, accessible user interfaces utilizing Tailwind CSS and Radix UI primitives",
  ],
  links: {
    visit: "https://connect-it-lyart.vercel.app/",
    github: "https://github.com/abhishek1165/connect-it"
  },
  author: "Abhishek Kachhap",
  authorAvatar: "/luffy.png"
},
  {
  id: "3",
  title: "TaskFlow",
  slug: "taskflow",
  description: "A production-ready, full-stack collaborative project management platform built with the MERN stack.",
  detailedDescription: "TaskFlow is a comprehensive team task manager built with the MERN stack. It offers a robust suite of features including drag-and-drop Kanban task boards, granular role-based access control, real-time notifications, and an analytics dashboard. The application is fully responsive, supports dark/light mode switching, and utilizes JWT authentication to ensure secure project collaboration.",
  image: "/Taskmanger.png",
  tags: ["MERN", "Project Management", "Kanban", "Full-Stack", "Web App"],
  status: "active",
  techStack: ["React 18", "Node.js", "Express", "MongoDB", "Tailwind CSS", "shadcn/ui", "Redux Toolkit"],
  features: [
    "Secure JWT Authentication and Role-Based Access",
    "Drag-and-drop Kanban Board for task management",
    "Analytics Dashboard with interactive charts",
    "Automated notifications for task updates",
    "Project and Team Management capabilities"
  ],
  learningOutcomes: [
    "Building robust full-stack applications with the MERN stack",
    "Implementing drag-and-drop interfaces using @hello-pangea/dnd",
    "Creating interactive analytics dashboards with Recharts",
    "Managing complex state architecture with Redux Toolkit"
  ],
  links: {
    visit: "https://senpai-sync.onrender.com/",
    github: "https://github.com/abhishek1165/TaskManager-EtharaAi"
  },
  author: "Abhishek Kachhap",
  authorAvatar: "/luffy.png"
}
,
 {
  id: "4",
  title: "Event Snap",
  slug: "event-snap",
  description: "A full-stack web application for event photo management with advanced face recognition and AI-powered image organization.",
  detailedDescription: "Event Snap is a modern web application designed for comprehensive event photo management. It integrates advanced face recognition using DeepFace and efficient similarity search with FAISS to automatically identify and categorize faces in photos. The application features a robust FastAPI backend connected to MongoDB, and a responsive frontend built with React, Tailwind CSS, and Radix UI components.",
  image: "/event-snap.jpg",
  tags: ["AI", "Computer Vision", "React", "FastAPI", "Full-Stack", "Face Recognition"],
  status: "active",
  techStack: ["React", "Tailwind CSS", "FastAPI", "Python", "MongoDB", "DeepFace", "FAISS", "Google Generative AI", "OpenCV"],
  features: [
    "Automatically detect and identify faces in photos using DeepFace",
    "AI-powered categorization and organization of event photos",
    "FAISS-powered vector search for real-time similar face retrieval",
    "Secure JWT-based user authentication system",
    "Image management with automatic thumbnail generation"
  ],
  learningOutcomes: [
    "Integrating deep learning face recognition models within a web application architecture",
    "Building high-performance asynchronous REST APIs using FastAPI",
    "Implementing efficient vector similarity search using FAISS indices",
    "Leveraging Google Generative AI for intelligent photo organization and advanced LLM capabilities"
  ],
  links: {
    github: "https://github.com/abhishek1165/Event_Snap"
  },
  author: "Abhishek Kachhap",
  authorAvatar: "/luffy.png"
}
,
  {
    id: "5",
    title: "Food Delivery App",
    slug: "food-delivery-app",
    description: "Full-stack food ordering platform with restaurant management",
    detailedDescription:
      "A complete Food Delivery Web Application built with the MERN Stack. This platform connects restaurants with customers, featuring menu management, order processing, payment integration, and real-time order tracking.",
    image: "/food.jpg",
    tags: ["E-commerce", "MERN", "Full-Stack", "Payments"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe", "WhatsApp API"],
    features: [
      "Restaurant and menu management",
      "Shopping cart and checkout system",
      "Stripe payment integration",
      "Real-time order tracking",
      "WhatsApp order notifications",
      "Admin dashboard for order management",
    ],
    learningOutcomes: [
      "Payment gateway integration (Stripe)",
      "Third-party API integration (WhatsApp)",
      "E-commerce platform development",
      "Real-time data synchronization",
      "Geolocation and mapping services",
      "Multi-vendor platform architecture",
    ],
    links: {},
    author: "Abhishek Kachhap",
    authorAvatar: "/luffy.png",
  },
  {
    id: "6",
    title: "Movie Ticket Booking",
    slug: "movie-ticket-booking",
    description: "Complete movie booking system with seat selection and payments",
    detailedDescription:
      "A professional Movie Ticket Booking Website built with the MERN Stack, similar to BookMyShow. This full-stack application features movie listings, seat selection, booking management, and payment processing with a modern user interface.",
    image: "/movie.jpg",
    tags: ["Booking", "MERN", "Full-Stack", "Entertainment"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Razorpay", "JWT"],
    features: [
      "Movie listings with showtimes",
      "Interactive seat selection layout",
      "Secure booking and payment system",
      "User authentication and booking history",
      "Admin panel for theater management",
      "Responsive design for all devices",
    ],
    learningOutcomes: [
      "Complex booking system logic",
      "Payment integration (Razorpay/Stripe)",
      "JWT authentication implementation",
      "Role-based access control",
      "Database design for booking systems",
      "Frontend animations and UX design",
    ],
    links: {},
    author: "Abhishek Kachhap",
    authorAvatar: "/luffy.png",
  },
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(slug: string | undefined | null): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}