export interface Project {
  projectName: string;
  projectDesc: string;
  image: string;
  footerLink: { name: string; url: string }[];
}

export const greeting = {
  username: "Jason Asamoah",
  title: "Hi, I'm Jason",
  subtitle: "I'm a frontend developer specializing in building exceptional digital experiences.",
  resumeLink: "https://example.com/resume.pdf",
  displayGreeting: true,
};

export const socialMediaLinks = {
  github: "https://github.com/jasoonmisco11",
  linkedin: "https://www.linkedin.com/in/jason-asamoah-123456789/",
  gmail: "jasonmisco11@gmail.com",
  discord: "JasonMisco#007",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "Frontend Developer with experience in building web applications using React and Next.js.",
  skills: [
    "Developing responsive web applications using React.js and Next.js.",
    "Implementing UI/UX designs into high-quality code.",
    "Optimizing web performance and SEO."
  ],
  softwareSkills: [
    { skillName: "HTML5", icon: "logos:html-5" },
    { skillName: "CSS3", icon: "logos:css-3" },
    { skillName: "JavaScript", icon: "logos:javascript" },
    { skillName: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { skillName: "TypeScript", icon: "logos:typescript-icon" },
    { skillName: "ReactJS", icon: "logos:react" },
    { skillName: "NextJS", icon: "logos:nextjs-icon" },
  ],
  display: true,
};

export const educationBackground = {
  display: true,
  schools: [
    {
      schoolName: "Central University",
      logo: "https://central.edu.gh/static/img/fav.png", 
      subHeader: "Bachelor of Science in Computer Science",
      duration: "February 2022 - August 2025",
      desc: "Relevant Coursework: Software Engineering, Web Development, Data Structures & Algorithms, Database Management.",
      descBullets: [
        "Member of the Google Developers Club.",
        "Participated in hackathons and coding competitions.",
      ],
    },
  ],
};

export const techStack = {
  viewSkillBars: true,
  experience: [
    { stack: "Frontend/Design", progressPercentage: "65%" },
    { stack: "Design", progressPercentage: "60%" },
    { stack: "Backend", progressPercentage: "20%" },
    { stack: "DevOps", progressPercentage: "15%" },
  ],
  displayCodersrank: true,
};

export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Grace Tech Labs",
      companyLogo: "https://gracetechlabs.com/logo.png",
      date: "October 2025 – Present",
      desc: "Working on building and optimizing web applications using React.js and Next.js.",
      descBullets: ["Collaborated with the design team to implement responsive UI components."],
    },
    {
      role: "Software Engineer",
      company: "Super Tech Limited",
      companyLogo: "https://supertechlimited.com/logo.png",
      date: "November 2025 – Present",
      desc: "Working and learning on industry projects as a software engineer.",
      descBullets: ["Collaborated with cross-functional teams to deliver high-quality software solutions."],
    },
  ],
};

export const bigProjects = {
  title: "Big Projects",
  subtitle: "Some enterprises and startups I've built websites for",
  projects: [
    {
      image: "https://example.com/project1.png",
      projectName: "Project One",
      projectDesc: "A web application for managing tasks and productivity.",
      footerLink: [{ name: "Visit Website", url: "https://projectone.com" }],
    },
    {
      image: "https://example.com/project2.png",
      projectName: "Project Two",
      projectDesc: "An e-commerce platform for buying and selling products online.",
      footerLink: [{ name: "Visit Website", url: "https://projecttwo.com" }],
    },
  ],
  display: true,
};

export const contactInfo = {
  title: "Contact Me",
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+233-54-8279657",
  email_address: "jasonmisco11@gmail.com",
};