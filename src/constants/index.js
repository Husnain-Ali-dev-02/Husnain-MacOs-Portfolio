const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  // {
  //   id: "safari",
  //   name: "Articles", // was "Safari"
  //   icon: "safari.png",
  //   canOpen: true,
  // },
  // {
  //   id: "photos",
  //   name: "Gallery", // was "Photos"
  //   icon: "photos.png",
  //   canOpen: true,
  // },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Shadcn ui", "CSS", "DaisyUI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Supabase", "Appwrite"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
  {
    category: "Authentication",
    items:["Auth0", "Supabase Auth", "Clerk", "Auth.js", "Kinde"]
  }
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Husnain-Ali-dev-02",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/husnain-ali-a11813282/ ",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 – Spott
    {
      id: 2,
      name: "Spott",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 21,
          name: "Spott.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Spott is a modern and intuitive event discovery and management platform.",
            "It helps users explore nearby events, create their own events, and manage them effortlessly.",
            "Spott focuses on smooth onboarding, location-based discovery, and a premium user experience.",
            "Built with Next.js, Convex, and Tailwind CSS for real-time data handling and responsive design."
          ],
        },
        {
          id: 22,
          name: "Spott.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://spott-mu.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 23,
          name: "Spott.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Project-1.png",
        },
        {
          id: 24,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2 – CoinPulse
    {
      id: 3,
      name: "CoinPulse",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-72",
      windowPosition: "top-[18vh] left-10",
      children: [
        {
          id: 31,
          name: "CoinPulse.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "CoinPulse is a high-performance cryptocurrency analytics dashboard.",
            "It delivers real-time market data including prices, trends, and order book updates.",
            "The platform integrates CoinGecko APIs and WebSockets for near real-time updates.",
            "Built using Next.js, TypeScript, Tailwind CSS, shadcn/ui, and TradingView charts."
          ],
        },
        {
          id: 32,
          name: "CoinPulse.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://coinpulse-sable.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 33,
          name: "CoinPulse.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Coinpulse.png",
        },
        {
          id: 34,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3 – StoreIT
    {
      id: 4,
      name: "StoreIT",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-60 right-40",
      windowPosition: "top-[22vh] left-14",
      children: [
        {
          id: 41,
          name: "StoreIT.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "StoreIT is a modern cloud storage and file-sharing platform.",
            "Users can upload, organize, and manage files securely from anywhere.",
            "It replaces email attachments with a structured and accessible cloud hub.",
            "Built with Next.js, React, TypeScript, Appwrite, and Tailwind CSS."
          ],
        },
        {
          id: 42,
          name: "StoreIT.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://storeit-storage-management-solution-brown.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 43,
          name: "StoreIT.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Project-2.png",
        },
        {
          id: 44,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 4 – Signalist
    {
      id: 5,
      name: "Signalist",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-12 left-80",
      windowPosition: "top-[33vh] left-12",
      children: [
        {
          id: 51,
          name: "Signalist.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Signalist is a stock market tracking and analytics platform.",
            "It allows users to monitor prices, manage watchlists, and set alerts.",
            "The platform automates workflows and provides real-time market insights.",
            "Built with Next.js, TypeScript, shadcn/ui, Better Auth, and Inngest."
          ],
        },
        {
          id: 52,
          name: "Signalist.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://signalist-sta.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 53,
          name: "Signalist.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Project-3.png",
        },
        {
          id: 54,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};




const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/husnain.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "/images/adrian-2.jpg",
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
  "Hi! I’m Husnain 👋, a passionate MERN stack developer specializing in React.js and Next.js.",
  "I love building dynamic, responsive, and user-friendly web applications that are smooth, performant, and visually appealing.",
  "From sleek UIs to immersive features like AI integrations and interactive elements, I enjoy making websites that are both functional and delightful.",
  "When I'm not coding, you'll find me experimenting with new tech, optimizing layouts, or exploring creative ways to solve problems in web development.",
],

    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };