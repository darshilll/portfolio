

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  
  
] as const;

export const gridItems = [
  {
    id: 2,
    title: "Skillset",
    description: "",
    className:
      "lg:col-span-10 md:col-span-6 md:row-span-2 min-h-[45vh] md:min-h-[55vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Taska - Your digital task assistant",
    des: "This platform provides a user-friendly interface to optimize task assignment, monitor progress, and facilitate collaboration.",
    img: "/taska.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/nod.svg",
      "/expr.png",
      "/mo.svg",
      "/fb.svg",
    ],
    link: "https://taska-fwm0.onrender.com",
  },
  {
    id: 2,
    title: "Prismify: Connect, Share, Discover.",
    des: "A social media platform which include user authentication, dynamic feed, profile customization, post creation and management.",
    img: "/prismify.png",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/ts.svg"],
    link: "https://prismifycommunity.netlify.app",
  },
  {
    id: 3,
    title: "Craavee: Explore, Cook, Share ",
    des: "A feature-rich recipe website that empowers users to search for recipes, view ingredients,follow step-by-step cooking instructions.",
    img: "/crave.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://craavee.netlify.app",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "GirlScript Summer Of Code",
    desc: "Open Source Contributor",
    desc1:
      "Led contributions to various open-source projects using MERN stack, TypeScript, Next.js, Tailwind CSS, and Firebase. Innovated solutions and improved project functionality under the guidance of mentorship of the Girlscript community.",

    date: "May 2024 - Present",
    tech: ["MERN", "Next.js", "Tailwind CSS", "TypeScript", "Firebase"],
  },
  {
    id: 2,
    title: "CognoRise Infotech",
    desc: "Web Development Intern",
    desc1:
      "Developed dynamic web applications using the MERN stack, collaborated with teams to deliver scalable solutions, and optimized code for performance. I also resolved complex technical issues, ensuring high-quality and functional outcomes.",
    // change to md:col-span-2
    date: "March 2024 - April 2024",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/mail.svg",
    link: "mailto:darsgajul2003@gmail.com",
  },
  {
    id: 4,
    img: "/link1.svg",
    link: "https://www.linkedin.com/in/darshil-gajul",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/darshilll",
  },
  {
    id: 3,
    img: "/insta1.svg",
    link: "https://www.instagram.com/darshilll_.03",
  },
];
