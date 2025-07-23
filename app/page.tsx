"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Code,
  Brain,
  Database,
  Globe,
  Cpu,
  Terminal,
  Download,
} from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import { SmoothLoading } from "@/components/smooth-loading";
import { SmoothCursor } from "@/components/smooth-cursor";
import { MinimalNav } from "@/components/minimal-nav";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ExperienceCard } from "@/components/experience-card";
import { SkillCard } from "@/components/skill-card";
import { SpaceBackground } from "@/components/space-background";
import { ContactForm } from "@/components/contact-form";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll();
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const CV_DOWNLOAD_URL =
    "https://drive.google.com/file/d/1e9-63ttT06MQjJqS0J0gar_pKmgb82A8/view?usp=drivesdk";

  const handleScroll = useCallback(() => {
    const sections = ["home", "about", "work", "contact"];
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    window.open(CV_DOWNLOAD_URL, "_blank");
    console.log("CV download initiated");
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "Java", "TypeScript", "C++"],
    },
    {
      title: "AI/ML Frameworks",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "OpenCV",
        "Hugging Face",
      ],
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "Next.js", "Vue.js", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"],
    },
    {
      title: "AI/ML Specializations",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        "NLP",
        "Computer Vision",
        "Generative AI",
        "Deep Learning",
        "MLOps",
      ],
    },
    {
      title: "Development Tools",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Git", "Docker", "AWS", "VS Code", "Linux"],
    },
  ];

  const projects = [
    {
      title: "SignAI - Sign Language to Speech",
      description:
        "Real-time sign language interpreter that converts hand gestures into speech and text using computer vision and deep learning. Features real-time processing with 95% accuracy.",
      technologies: [
        "Python",
        "MediaPipe",
        "TensorFlow",
        "React.js",
        "Node.js",
        "WebRTC",
      ],
      github: "https://github.com/rishul02/SIGNAI",
      demo: "https://signai-rishul.vercel.app/",
      featured: true,
      category: "AI/ML",
      impact: "500+ users helped",
      status: "Live",
    },
    {
      title: "Gen-Vision: Text to Image Generator",
      description:
        "Full-stack web application with AI-powered image generation using Clipdrop API. Features secure payment integration, user authentication, and high-quality image generation.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Express.js",
        "MongoDB",
        "Clipdrop API",
        "Stripe",
      ],
      github: "https://github.com/rishul02/Gen-Vision",
      demo: "https://gen-vision.netlify.app/",
      featured: true,
      category: "Full Stack",
      impact: "1K+ images generated",
      status: "Live",
    },
    {
      title: "Big Mart Sales Prediction",
      description:
        "ML-powered sales forecasting system with interactive dashboards and real-time analytics. Helps retailers optimize inventory and predict demand patterns.",
      technologies: [
        "Python",
        "Pandas",
        "React.js",
        "Next.js",
        "Machine Learning",
        "D3.js",
      ],
      github: "https://github.com/rishul02",
      demo: "https://bigmart-prediction.vercel.app",
      featured: false,
      category: "Full Stack",
      impact: "92% accuracy achieved",
      status: "Beta",
    },
    {
      title: "PDF Processing Tool",
      description:
        "NLP-based tool for extracting and summarizing text from PDFs with intelligent content analysis. Features OCR, text extraction, and AI-powered summarization.",
      technologies: ["Python", "NLP", "MongoDB", "PyPDF2", "NLTK", "FastAPI"],
      github: "https://github.com/rishul02/wasserstoff-AiInternTask",
      demo: "",
      featured: false,
      category: "AI/ML",
      impact: "50% time saved",
      status: "Live",
    },
  ];

  const experience = [
    {
      title: "AI/ML Research Assistant",
      company: "Shiv Nadar Institution of Eminence",
      period: "May 2025 - Present",
      location: "Noida, India",
      description:
        "Worked on data-driven environmental analysis projects by processing and integrating multi-source chemical speciation data to identify key pollutant contributors. Contributed to the development of a health risk assessment model and developed machine learning models for environmental prediction and impact analysis.",
      technologies: [
        "Python",
        "Machine Learning",
        "Statistical Modeling",
        "Data Visualization",
        "Pandas",
        "Scikit-learn",
      ],
      achievements: [
        "Published 2 research papers",
        "Analyzed 1TB+ data",
        "25% accuracy improvement",
      ],
      type: "Research",
    },
    {
      title: "Web Development Intern",
      company: "Gao Tek",
      period: "May 2025 - July 2025",
      location: "New York (Remote)",
      description:
        "Developing e-commerce solutions with advanced search functionality and optimized user experiences. Building scalable web applications with modern technologies.",
      technologies: [
        "WooCommerce",
        "AJAX",
        "WordPress",
        "PHP",
        "JavaScript",
        "MySQL",
      ],
      achievements: [
        "40% search speed boost",
        "30% load time reduction",
        "5K+ users served",
        "Improved SEO rankings",
      ],
      type: "Development",
    },
    {
      title: "Project Intern",
      company: "iNeuron.ai",
      period: "Nov 2024 - Feb 2025",
      location: "Bengaluru (Remote)",
      description:
        "Built scalable software solutions and led booking system development with significant performance improvements. Worked on AI/ML projects and data analysis.",
      technologies: [
        "Python",
        "Software Development",
        "System Optimization",
        "Flask",
        "MongoDB",
      ],
      achievements: [
        "20% efficiency gain",
        "15% error reduction",
        "Led 3-person team",
        "Deployed 5+ projects",
      ],
      type: "Development",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <SmoothLoading />
      <SmoothCursor />
      <SpaceBackground />

      <MinimalNav
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <button
        onClick={handleDownloadCV}
        className="fixed top-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-medium text-sm backdrop-blur-sm border border-white/10 hover:scale-105 lg:hidden"
        data-cursor-text="Download"
      >
        <Download className="w-4 h-4" />
        Download CV
      </button>

      <main className="relative z-10">
        <section id="home">
          <HeroSection scrollToSection={scrollToSection} />

          <div className="hidden lg:flex justify-center -mt-36">
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 font-medium text-base backdrop-blur-sm border border-white/10 hover:scale-105"
              data-cursor-text="Download"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="work" className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Skills"
              subtitle="Technologies and tools I use to bring ideas to life"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {skillCategories.map((category, index) => (
                <SkillCard
                  key={index}
                  title={category.title}
                  icon={category.icon}
                  skills={category.skills}
                  index={index}
                />
              ))}
            </div>

            <SectionHeading
              title="Projects"
              subtitle="A showcase of cutting-edge solutions and innovative applications"
            />

            <div className="grid md:grid-cols-2 gap-8 mb-32">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>

            <SectionHeading
              title="Experience"
              subtitle="Professional journey and key achievements"
            />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <ExperienceCard key={exp.title} {...exp} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <footer className="py-12 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <p className="text-zinc-500 text-sm font-light">
              © 2025 Rishul. All rights reserved.
            </p>
            <p className="text-zinc-500 text-sm font-light">
              Designed & Developed with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
