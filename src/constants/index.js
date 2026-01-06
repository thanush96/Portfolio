import {
  l6,
  susila,
  sgic,
  codeBasys,
  facebook,
  instagram,
  linkedin,
  react,
  firebase,
  redux,
  ts,
  node,
  angular,
  express,
  git,
  flutter,
  next,
  tailwind,
  javascript,
  reactNative,
  googleCloud,
  aws,
  freelancer
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "freelance",
    title: "Projects",
  },
];

export const features = [
  {
    id: "1",
    icon: l6,
    title: "SOFTWARE ENGINEER | LINEARSIX",
    duration: "2022 - 2025",
    content: [
      {
        title: "LIME Banking System",
        description:
          "Fintech platform powering private banks in Sri Lanka. Developed banking widgets including Loan Calculator, Investment Planner, and Customer 360 view. Built reusable UI components as versioned NPM packages. Rebuilt and maintained the GUI Docker image and release pipeline. Supported hybrid mobile apps using Cordova for both iOS and Android platforms.",

        technology: [
          "Angular",
          "TypeScript",
          "Cordova",
          "Docker",
          "SCSS",
          "Git",
          "AWS",
          "JIRA",
          "Postman",
          "Swagger",
        ],
      },
    ],
  },
  {
    id: "2",
    icon: susila,
    title: "FULL STACK DEVELOPER | SUSILA INSPIRE",
    duration: "2021 - 2022",
    content: [
      {
        title: "KICHUK Mobile App",
        description:
          "A cross-platform mobile application that connects users with home service providers for cleaning, washing, repairs, and salon services. The app also includes an e-commerce module for purchasing service-related equipment.",

        technology: [
          "Flutter",
          "Dart",
          "Node.js",
          "Firebase Auth",
          "Firestore",
          "Firebase Storage",
        ],
      },
      {
        title: "LINKUP Web Application",
        description:
          "A multi-feature social platform providing job listings, automatic resume generation, property buying/selling services, matrimony search, and access to government gazette updates. The system allows new users to generate professional CVs without requiring registration.",

        technology: [
          "React.js",
          "JWT",
          "Node.js",
          "Bootstrap",
          "GitHub",
          "NPM",
          "REST APIs",
        ],
      },
      {
        title: "SUSILA Life Video Streaming App",
        description:
          "A subscription-based Progressive Web App (PWA) for video streaming with real-time playback, user-friendly interface, and advanced security features. Provides seamless viewing experience with payment integration.",

        technology: [
          "MERN Stack",
          "MongoDB",
          "Express",
          "React",
          "Node.js",
          "PWA",
          "Service Worker",
          "Redux",
        ],
      },
    ],
  },
  {
    id: "3",
    icon: codeBasys,
    title: "SOFTWARE DEVELOPER | CODE BASYS",
    duration: "2020 - 2021",
    content: [
      {
        title: "Asset Management System",
        description:
          "A comprehensive system for managing organizational assets across multiple branches, floors, and rooms. Features include asset addition, warranty tracking, automated expiry alerts, and user-specific asset allocation and maintenance management.",

        technology: [
          "PHP",
          "MySQL",
          "HTML",
          "CSS",
          "GitHub",
          "REST APIs",
          "jQuery",
        ],
      },
      {
        title: "Restaurant Food Mobile App",
        description:
          "A cross-platform mobile application with Admin Portal and User App. Users can view restaurant menus, place bulk food orders, and make seat reservations for specific dates. The Admin Portal allows adding new menu items, setting shop holidays, managing bulk orders, and verifying seat reservations via OTP.",

        technology: [
          "React Native",
          "Firebase Auth",
          "Firestore",
          "Redux",
          "CSS",
          "GitHub",
        ],
      },
    ],
  },

  {
    id: "4",
    icon: sgic,
    title: "INDUSTRIAL TRAINING | SAMUEL GNANAM IT CENTRE",
    duration: "2020 - 2021",
    content: [
      {
        title: "Defect Tracker",
        description:
          "A bug tracking and reporting system designed to record, manage, and report software defects in development projects. Provides features for workflow management, bug reporting, and status tracking, helping teams maintain software quality.",

        technology: [
          "Java OOP",
          "Spring MVC",
          "Spring Boot",
          "Microservices",
          "REST Web Services",
          "JUnit Testing",
          "Jenkins",
          "EC2",
          "MySQL",
        ],
      },
    ],
  },
];

export const freelanceProjects = [
  {
    id: "freelance-1",
    icon: freelancer,
    title: "FREELANCE PROJECTS",
    duration: "2020 - 2025",
    content: [
      {
        title: "CeyGo Ride-Sharing App",
        description:
          "Developed a cross-platform mobile ride-sharing application using Flutter and Firebase, supporting multiple roles (Customer, Driver, Admin). Features include real-time ride tracking, payment integration via Stripe SDK, and comprehensive admin dashboard.",

        technology: [
          "Flutter",
          "Dart",
          "Node.js",
          "Firebase Auth",
          "Firestore",
          "Firebase Storage",
          "Stripe SDK",
        ],
      },
      {
        title: "Music Bible App",
        description:
          "Cross-platform mobile app built with Flutter and Firebase to enhance Bible reading, sharing, and community engagement. Features include offline reading, audio Bible, verse sharing, and cloud synchronization. Available on Google Play Store.",

        technology: [
          "Flutter",
          "Firebase Auth",
          "Firestore",
          "Cloud Functions",
          "Firebase Storage",
          "Dart",
        ],
        link: "https://play.google.com/store/apps/details?id=com.faite.project.music_bible_music_player",
      },
      {
        title: "TIT Education LMS App",
        description:
          "A comprehensive Learning Management System (LMS) mobile application developed for TIT Education. Built with React Native, the app provides students with access to course materials, video lectures, assignments, and progress tracking. Features include offline content access, push notifications for updates, and seamless integration with the institution's learning platform.",

        technology: [
          "React Native",
          "Firebase Auth",
          "Firestore",
          "Firebase Storage",
          "Push Notifications",
          "Redux",
        ],
        link: "https://play.google.com/store/apps/details?id=com.titeducation&hl=en",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Years Experience",
    value: "5+",
  },
  {
    id: "stats-2",
    title: "Projects Completed",
    value: "8+",
  },
  {
    id: "stats-3",
    title: "Technologies",
    value: "10+",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        link: "#home",
      },
      {
        name: "Experience",
        link: "#experience",
      },
      {
        name: "Projects",
        link: "#apps",
      },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        name: "GitHub",
        link: "https://github.com/thanush96",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/thanushkanth-pathmanathan-055063170/",
      },
      {
        name: "Email",
        link: "mailto:thanushkanth96@icloud.com",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: git,
    link: "https://github.com/thanush96",
  },

  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/dhanush__1996/",
  },

  {
    id: "social-media-1",
    icon: facebook,
    link: "https://www.facebook.com/thanush.kanth.31",
  },

  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/thanushkanth-pathmanathan-055063170/",
  },
];

export const skills = [
  {
    id: "skill-1",
    logo: react,
    name: "React",
  },
  {
    id: "skill-2",
    logo: angular,
    name: "Angular",
  },
  {
    id: "skill-3",
    logo: next,
    name: "Next.js",
  },
  {
    id: "skill-4",
    logo: flutter,
    name: "Flutter",
  },
  {
    id: "skill-5",
    logo: reactNative,
    name: "React Native",
  },
  {
    id: "skill-6",
    logo: javascript,
    name: "JavaScript",
  },
  {
    id: "skill-7",
    logo: ts,
    name: "TypeScript",
  },
  {
    id: "skill-8",
    logo: node,
    name: "Node.js",
  },
  {
    id: "skill-9",
    logo: express,
    name: "Express.js",
  },
  {
    id: "skill-10",
    logo: firebase,
    name: "Firebase",
  },
  {
    id: "skill-11",
    logo: aws,
    name: "AWS",
  },
  {
    id: "skill-12",
    logo: googleCloud,
    name: "Google Cloud",
  },
  {
    id: "skill-13",
    logo: redux,
    name: "Redux",
  },
  {
    id: "skill-14",
    logo: tailwind,
    name: "Tailwind CSS",
  },
];

export const iosApps = [
  {
    id: "app-1",
    name: "CeyGo Ride-Sharing App",
    platform: "iOS & Android",
    icon: "",
    description: "Cross-platform mobile ride-sharing application using Flutter and Firebase, supporting multiple roles (Customer, Driver, Admin). Features include real-time ride tracking, payment integration via Stripe SDK, and comprehensive admin dashboard.",
    appStoreLink: "",
    technology: [
      "Flutter",
      "Dart",
      "Node.js",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "Stripe SDK",
    ],
    screenshots: [
      "/apps/CeyGO/1.png",
      "/apps/CeyGO/2.png",
      "/apps/CeyGO/3.png",
      "/apps/CeyGO/4.png",
    ],
  },
  {
    id: "app-2",
    name: "Music Bible App",
    platform: "iOS & Android",
    icon: "",
    description: "Cross-platform mobile app built with Flutter and Firebase to enhance Bible reading, sharing, and community engagement. Features include offline reading, audio Bible, verse sharing, and cloud synchronization. Available on Google Play Store.",
    appStoreLink: "https://play.google.com/store/apps/details?id=com.faite.project.music_bible_music_player",
    technology: [
      "Flutter",
      "Firebase Auth",
      "Firestore",
      "Cloud Functions",
      "Firebase Storage",
      "Dart",
    ],
    screenshots: [
      "/apps/aMusicBible/1.jpg",
      "/apps/aMusicBible/2.jpg",
      "/apps/aMusicBible/3.jpg",
      "/apps/aMusicBible/4.jpg",
    ],
  },
  {
    id: "app-3",
    name: "Velto App",
    platform: "iOS & Android",
    icon: "",
    description: "Cross-platform mobile application built with Flutter, offering intuitive UI/UX and robust backend integration. Features include real-time data synchronization, secure authentication, and smooth navigation.",
    appStoreLink: "",
    technology: ["Flutter", "Dart", "Firebase", "REST API", "Provider", "State Management"],
    screenshots: [
      "/apps/velto/1.png",
      "/apps/velto/2.png",
      "/apps/velto/3.png",
      "/apps/velto/4.png",
    ],
  },
  {
    id: "app-4",
    name: "LMS App",
    platform: "iOS & Android",
    icon: "",
    description: "A comprehensive Learning Management System (LMS) mobile application developed for TIT Education. Built with React Native, the app provides students with access to course materials, video lectures, assignments, and progress tracking.",
    appStoreLink: "https://play.google.com/store/apps/details?id=com.titeducation&hl=en",
    technology: [
      "React Native",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "Push Notifications",
      "Redux",
    ],
    screenshots: [
      "/apps/LMS/1.png",
      "/apps/LMS/2.png",
      "/apps/LMS/3.png",
      "/apps/LMS/4.png",
    ],
  },
];
