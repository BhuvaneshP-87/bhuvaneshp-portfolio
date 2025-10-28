import React, { useState, useEffect, useCallback } from 'react';
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  Database,
  Cloud,
  Layers,
  Zap,
  Palette
} from 'lucide-react';

// --- DATA DEFINITION ---
const portfolioData = {
  name: "Bhuvanesh Perumal Samy",
  title: "Full Stack Software Developer",
  summary: "Full Stack Developer with 3+ YOE building high-performance applications using MERN and Java Spring Boot. Adept at driving end-to-end solutions, optimizing scalability, and collaborating across teams to deliver impactful, efficient, and innovative products.",
  contact: {
    email: "perumals@usc.edu",
    linkedin: "your-linkedin-profile", // Placeholder
    github: "your-github-profile", // Placeholder
  },
  // ADD YOUR PHOTO URL HERE
  photoUrl: "https://placehold.co/150x150/8b5cf6/ffffff?text=Your+Photo", 
  experience: [
    {
      role: "Full Stack Software Development Engineer",
      company: "Aidash Inc (IVMS Team)",
      duration: "Jun 2024 – Aug 2025",
      location: "Bengaluru, India",
      bullets: [
        "Architected Java-based microservices with automated file processing capabilities, handling up to 1M records, and reducing manual processing time from 10 hours to 5 minutes.",
        "Optimized database migration scripts using SQL and Python to process 50M+ records, reducing execution time from 16 hrs to 10 mins by applying advanced indexing and query optimization strategies.",
        "Developed deep learning models achieving 82% text emotion detection and 80% audio emotion recognition accuracy for an AI-powered mental health application."
      ]
    },
  ],
  skills: [
    { name: "Java / Spring Boot", icon: "Code", level: "Advanced" },
    { name: "Python / AI/ML", icon: "Zap", level: "Advanced" },
    { name: "ReactJS / Typescript", icon: "Layers", level: "Expert" },
    { name: "AWS / Cloud Architecture", icon: "Cloud", level: "Advanced" },
    { name: "SQL / Database Optimization", icon: "Database", level: "Expert" },
    { name: "Microservices & Docker", icon: "Briefcase", level: "Advanced" },
  ],
  projects: [
    {
      title: "AI-Powered Mental Health Platform",
      description: "Engineered a responsive full-stack MERN application that utilized NLP and Speech Processing to analyze user emotions and deliver personalized music recommendations. Deployed with real-time processing and scalable architecture on AWS.",
      tags: ["MERN Stack", "NLP", "Deep Learning", "AWS", "Socket.IO"],
      link: "#" // Placeholder
    },
    {
      title: "High-Volume Data Migration & Optimization",
      description: "Spearheaded the performance tuning of large-scale database systems, resulting in a 99% reduction in execution time for complex migration scripts (16 hours to 10 minutes) across 50M+ records by optimizing indexing and queries.",
      tags: ["SQL", "Python", "PostgreSQL", "Query Optimization", "Infrastructure"],
      link: "#" // Placeholder
    },
  ],
  // New color themes for interactivity
  colorThemes: [
    { name: 'Emerald', value: '#10b981' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Orange', value: '#f97316' },
  ],
  // New data for the photo section (Visual Artifacts)
  photos: [
    {
      title: "Data Visualization Dashboard",
      url: "https://placehold.co/400x300/1e2937/10b981?text=Analytics+Dashboard",
      alt: "A screenshot of an analytics dashboard with charts.",
    },
    {
      title: "Microservice Architecture Diagram",
      url: "https://placehold.co/400x300/1e2937/8b5cf6?text=System+Design",
      alt: "A diagram illustrating the microservice architecture.",
    },
    {
      title: "AI Model Training Results",
      url: "https://placehold.co/400x300/1e2937/f97316?text=ML+Results+Chart",
      alt: "A chart showing the accuracy and loss curves of an AI model.",
    },
    {
      title: "Responsive Web Mockup",
      url: "https://placehold.co/400x300/1e2937/06b6d4?text=Mobile+UI+Mockup",
      alt: "A mockup of a mobile application interface.",
    },
  ]
};

// Map string names to Lucide icons
const iconMap = {
  Home: Home,
  User: User,
  Code: Code,
  Briefcase: Briefcase,
  Mail: Mail,
  Database: Database,
  Cloud: Cloud,
  Layers: Layers,
  Zap: Zap,
};

// --- UTILITY COMPONENTS ---

const SectionTitle = ({ title, icon: Icon, id }) => (
  <h2 id={id} className="text-3xl font-bold mb-8 flex items-center text-primary-400">
    <Icon className="w-6 h-6 mr-3 text-secondary-500" />
    {title}
  </h2>
);

const Pill = ({ text }) => (
  <span className="inline-block bg-neutral-700 text-neutral-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-neutral-600 transition duration-300">
    {text}
  </span>
);

// --- MAIN SECTIONS ---

const HeroSection = ({ name, title, summary, contact, photoUrl }) => {
  const [tiltStyle, setTiltStyle] = useState({});

  // Tilt effect handlers for interactive hero section
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate mouse position relative to center (-1 to 1)
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    // Max rotation is 5 degrees
    const rotateY = mouseX * 5;
    const rotateX = mouseY * -5; // Inverted X-axis movement

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'none', // Disable transition while actively moving the mouse
      willChange: 'transform',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Spring-like ease-out
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16">
      {/* Interactive Tilt Container */}
      <div
        className="max-w-4xl mx-auto text-center px-4"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
      >
        {/* New: Profile Photo */}
        <div className="mb-8 flex justify-center">
            <img
                src={photoUrl}
                alt={`${name}'s profile photo`}
                className="w-36 h-36 rounded-full object-cover border-4 border-primary-400 shadow-xl"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/111827/9ca3af?text=Photo"; }}
            />
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
          {name}
        </h1>
        <p className="text-2xl sm:text-3xl font-light text-neutral-300 mb-6">
          {title}
        </p>
        <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
          {summary}
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-neutral-900 bg-secondary-500 hover:bg-secondary-600 transition duration-300 ease-in-out shadow-lg shadow-secondary-500/30"
        >
          Get In Touch
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
};

const AboutSection = ({ summary }) => (
  <section id="about" className="py-20 border-t border-neutral-800">
    <div className="max-w-4xl mx-auto px-4">
      <SectionTitle title="About Me" icon={User} id="about-title" />
      <p className="text-lg text-neutral-400 leading-relaxed">
        {summary} My academic background includes a **Master of Science in Computer Science** from the University of Southern California, with coursework in Deep Learning, Analysis of Algorithms, and Database Systems. I thrive on translating complex problems into robust, scalable, and highly performant code, constantly seeking ways to drive efficiency and technological innovation.
      </p>
    </div>
  </section>
);

const ExperienceSection = ({ experience }) => (
  <section id="experience" className="py-20 border-t border-neutral-800">
    <div className="max-w-4xl mx-auto px-4">
      <SectionTitle title="Experience" icon={Briefcase} id="experience-title" />
      {experience.map((job, index) => (
        <div key={index} className="mb-10 p-6 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 transition duration-300 shadow-xl">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-primary-400">{job.role}</h3>
              <p className="text-lg text-neutral-300">{job.company}</p>
            </div>
            <p className="text-sm text-neutral-500 text-right">
              {job.duration}
              <br/>
              {job.location}
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-neutral-400 ml-4">
            {job.bullets.map((bullet, idx) => (
              <li key={idx}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const SkillsSection = ({ skills }) => (
  <section id="skills" className="py-20 border-t border-neutral-800">
    <div className="max-w-4xl mx-auto px-4">
      <SectionTitle title="Skills & Tech Stack" icon={Zap} id="skills-title" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
          const Icon = iconMap[skill.icon] || Code;
          return (
            <div
              key={index}
              // Added custom class for interactive hover effect using the dynamic color
              className="skill-card p-4 rounded-xl border border-neutral-700 bg-neutral-800 transition duration-300 flex items-center space-x-4 hover:scale-[1.02] hover:z-10"
            >
              <Icon className="w-6 h-6 text-secondary-500 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-neutral-200">{skill.name}</h4>
                <p className="text-xs text-neutral-500">{skill.level}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// New Section for Photos/Visuals
const PhotosSection = ({ photos }) => (
  <section id="photos" className="py-20 border-t border-neutral-800">
    <div className="max-w-4xl mx-auto px-4">
      <SectionTitle title="Visual Artifacts" icon={Layers} id="photos-title" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.03]"
          >
            {/* Image Placeholder */}
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-auto object-cover transition duration-500 group-hover:opacity-80"
              // Fallback for image loading error
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/1e2937/9ca3af?text=Image+Load+Error"; }}
            />
            {/* Overlay for title/hover effect, using dynamic border color */}
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-60 flex items-end opacity-0 group-hover:opacity-100 transition duration-500 p-4 border-2 border-transparent group-hover:border-secondary-500">
              <h4 className="text-lg font-semibold text-neutral-100 leading-snug">{photo.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-neutral-500 mt-12">
          *These images are placeholders. Replace the 'url' values in 'portfolioData.photos' with links to your actual visualizations and designs.*
      </p>
    </div>
  </section>
);


const ProjectsSection = ({ projects }) => (
  <section id="projects" className="py-20 border-t border-neutral-800">
    <div className="max-w-4xl mx-auto px-4">
      <SectionTitle title="Key Projects" icon={Code} id="projects-title" />
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="project-card p-6 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 transition duration-300 shadow-xl border-l-4 border-secondary-500 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-primary-400 mb-2">{project.title}</h3>
            <p className="text-neutral-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <Pill key={idx} text={tag} />
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-secondary-500 hover:text-secondary-400 font-medium transition duration-300 mt-2"
            >
              View Project Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FooterSection = ({ contact }) => (
  <footer id="contact" className="py-12 border-t border-neutral-800 bg-neutral-900">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <SectionTitle title="Connect With Me" icon={Mail} id="contact-title" />
      <p className="text-xl text-neutral-300 mb-6">
        I’m currently open to new opportunities. Let's build something great together.
      </p>
      <div className="flex justify-center space-x-6 mb-8">
        <a
          href={`mailto:${contact.email}`}
          className="text-neutral-400 hover:text-secondary-500 transition duration-300 flex items-center space-x-2"
        >
          <Mail className="w-6 h-6" />
          <span className="hidden sm:inline">{contact.email}</span>
        </a>
        <a
          href={`https://linkedin.com/in/${contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-secondary-500 transition duration-300"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href={`https://github.com/${contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-secondary-500 transition duration-300"
        >
          <Github className="w-6 h-6" />
        </a>
      </div>
      <p className="text-sm text-neutral-600 mt-8">
        Designed & Built by {portfolioData.name} | © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

// --- MAIN APPLICATION COMPONENT ---

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  // State for dynamic color theme
  const [secondaryColor, setSecondaryColor] = useState(portfolioData.colorThemes[0].value);
  const [secondaryColorName, setSecondaryColorName] = useState(portfolioData.colorThemes[0].name);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'photos', label: 'Visuals', icon: Layers }, // New section added
    { id: 'projects', label: 'Projects', icon: Code },
  ];

  // Logic to cycle through color themes
  const cycleColor = useCallback(() => {
    const currentIndex = portfolioData.colorThemes.findIndex(t => t.value === secondaryColor);
    const nextIndex = (currentIndex + 1) % portfolioData.colorThemes.length;
    setSecondaryColor(portfolioData.colorThemes[nextIndex].value);
    setSecondaryColorName(portfolioData.colorThemes[nextIndex].name);
  }, [secondaryColor]);


  // Helper for smooth scrolling
  const scrollToSection = useCallback((id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  }, []);

  // Intersection Observer for tracking active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50% 0px', // Adjust margin to switch section indicator earlier
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the entry that is closest to the top and intersecting
      const visibleEntries = entries.filter(entry => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Find the top-most intersecting section
        const topMostEntry = visibleEntries.reduce((prev, current) => {
          return current.boundingClientRect.top < prev.boundingClientRect.top ? current : prev;
        });
        setActiveSection(topMostEntry.target.id);
      }
    }, observerOptions);

    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navItems]);


  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 font-sans antialiased" style={{'--secondary-color': secondaryColor}}>
      {/* Tailwind CSS Script for font and dynamic styling injection */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          /* Custom utility class to apply the font */
          .font-sans {
            font-family: 'Inter', sans-serif;
          }

          /* Interactive Skill Card Hover Effect (uses CSS variable) */
          .skill-card:hover {
            border-color: var(--secondary-color);
            box-shadow: 0 0 15px color-mix(in srgb, var(--secondary-color) 30%, transparent), 0 0 5px var(--secondary-color);
          }

          /* Interactive Project Card Hover Effect */
          .project-card:hover {
            border-color: var(--secondary-color);
          }
          
          /* Utility classes to help with dynamic colors */
          .text-secondary-500 { color: var(--secondary-color) !important; }
          .bg-secondary-500 { background-color: var(--secondary-color) !important; }
          .hover\\:bg-secondary-600:hover { background-color: color-mix(in srgb, var(--secondary-color) 80%, black) !important; }
          .hover\\:text-secondary-400:hover { color: color-mix(in srgb, var(--secondary-color) 80%, white) !important; }
          .shadow-secondary-500\\/30 { box-shadow: 0 10px 15px -3px color-mix(in srgb, var(--secondary-color) 30%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--secondary-color) 30%, transparent) !important; }
          .border-secondary-500 { border-color: var(--secondary-color) !important; }
          .to-secondary-500 { --tw-gradient-to: var(--secondary-color) !important; }
        `}
      </style>
      <script>
        {`
          // Dynamically configure Tailwind colors
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'primary': {
                    400: '#8b5cf6', // Violet, static
                    500: '#6366f1',
                  },
                  'secondary': {
                    500: '${secondaryColor}', // Dynamic secondary color
                  },
                  'neutral': {
                    // ... existing neutral colors
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                  }
                },
              }
            }
          }
        `}
      </script>

      {/* Color Theme Picker Button */}
      <button
        onClick={cycleColor}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-neutral-800 text-neutral-300 hover:text-secondary-500 border border-neutral-700 transition duration-300 group shadow-lg"
        aria-label="Change Color Theme"
      >
        <Palette className="w-6 h-6" />
        <span className="absolute right-full mr-3 whitespace-nowrap hidden md:block px-3 py-1 bg-neutral-700 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Theme: {secondaryColorName}
        </span>
      </button>


      {/* Main Content Sections */}
      <main className="container mx-auto max-w-7xl">
        <HeroSection {...portfolioData} photoUrl={portfolioData.photoUrl} />
        <AboutSection summary={portfolioData.summary} />
        <ExperienceSection experience={portfolioData.experience} />
        <SkillsSection skills={portfolioData.skills} />
        <PhotosSection photos={portfolioData.photos} />
        <ProjectsSection projects={portfolioData.projects} />
      </main>
      
      {/* Fixed Navigation/Sidebar for desktop/mobile */}
      <div className="fixed bottom-0 left-0 right-0 md:top-1/2 md:-translate-y-1/2 md:left-4 md:right-auto z-50">
        <div className="bg-neutral-800/80 backdrop-blur-md rounded-t-xl md:rounded-full shadow-2xl flex justify-around md:flex-col md:w-16 p-2 space-x-2 md:space-x-0 md:space-y-4 border-t border-neutral-700 md:border-t-0 md:border md:border-neutral-700">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  p-3 rounded-full transition duration-300
                  ${activeSection === item.id
                    ? 'bg-secondary-500 text-neutral-900 shadow-secondary-500/50 shadow-md'
                    : 'text-neutral-400 hover:bg-neutral-700 hover:text-primary-400'
                  }
                  flex items-center justify-center relative group
                `}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
                <span className="absolute left-full ml-4 whitespace-nowrap hidden md:block px-3 py-1 bg-neutral-700 text-neutral-200 text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
      <FooterSection contact={portfolioData.contact} />
    </div>
  );
};

export default App;
