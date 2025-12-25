import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  BookOpen,
  Code,
  Terminal,
  Cpu,
  ExternalLink,
  Briefcase,
  Users,
  ArrowLeft,
  X,
  Maximize2,
  Camera,
  GraduationCap,
  Menu,
  Search // Added Search icon
} from 'lucide-react';

/**
 * Catppuccin Mocha Theme (High Contrast)
 * Adjusted to be "more whiteish" for better readability
 */
const THEME = {
  base: '#1e1e2e',      // Main Background
  mantle: '#181825',    // Sidebar Background
  surface0: '#313244',  // Cards / Inputs
  surface1: '#45475a',  // Hovers
  overlay0: '#6c7086',  // Borders / Subtle text

  text: '#ffffff',      // Pure White (was #cdd6f4)
  subtext1: '#e6e9ef',  // Very light gray (was #bac2de)
  subtext0: '#cdd6f4',  // Light Lavender (was #a6adc8)

  // Accents
  blue: '#89b4fa',
  mauve: '#cba6f7',
  pink: '#f5c2e7',
  green: '#a6e3a1',
  peach: '#fab387',
  yellow: '#f9e2af',
  red: '#f38ba8',
};

// --- Types & Interfaces ---

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  stats?: string;
  link?: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

// --- Data ---

const EXPERIENCES: Experience[] = [
  {
    role: "Research Intern",
    company: "Indian Institute of Astrophysics",
    location: "Bangalore, India",
    period: "June 2025 - Present",
    description: [
      "Unravelling Lyman Alpha Emissions from quasars in DESI DR1 data.",
      "Using continuum subtraction with HSC-SSP broadband images.",
      "Working on detection of MgII emission around quasars."
    ]
  },
  {
    role: "Research Intern",
    company: "Indian Institute of Astrophysics",
    location: "Bangalore, India",
    period: "May 2024 - July 2024",
    description: [
      "Studied MgII and CIV absorbers from SDSS DR16Q via photometric study using JWST, HST, HSC DR3 data.",
      "Investigated connections between galaxies and absorbers.",
      "Developed a pipeline to map Lyα emission of quasars using broadband subtraction."
    ]
  }
];

const PROJECTS: Project[] = [
  {
    title: "Passafe",
    description: "A secure, terminal-based password manager for *nix operating systems built with Rust.",
    tech: ["Rust", "CLI", "Security"],
    stats: "4900+ Downloads",
    link: "https://github.com/Gokul2406"
  },
  {
    title: "Insight: IISER Mohali App",
    description: "Core team member contributing to the official mobile application for the institute.",
    tech: ["Flutter", "Dart", "Mobile"],
    link: "#"
  },
  {
    title: "Image Compression (SVD)",
    description: "Implementation of Matrix Singular Value Decomposition to demonstrate image compression and resolution alteration.",
    tech: ["Python", "NumPy", "Linear Algebra"],
    link: "#"
  }
];

const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "Julia", "Rust", "C/C++", "Bash", "Dart"],
    icon: <Code size={20} />
  },
  {
    title: "Scientific Tools",
    skills: ["PyTorch", "NumPy", "TOPCAT", "DS9", "CARTA", "XMatch"],
    icon: <Cpu size={20} />
  },
  {
    title: "Dev & Ops",
    skills: ["Git", "Linux (Arch/Fedora)", "Vim", "LaTeX"],
    icon: <Terminal size={20} />
  }
];

const TALKS = [
  {
    title: "Scientific Computing With Python",
    event: "Help Sessions (Sept 2024 - Present)",
    desc: "Conducting peer sessions introducing scientific computation."
  },
  {
    title: "Just Git It",
    event: "Feb 2024",
    desc: "Introductory talk on version control using Git."
  }
];

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/Ettikkulam_beach.jpeg",
    alt: "Beach Pic",
    caption: "A picture I took after arriving home due to the Indo-Pak conflict of 2025",
    category: "Outings"
  },
  {
    id: "g2",
    src: "/images/Jama_Masjid.jpeg",
    alt: "Masjid",
    caption: "A picture of one of the structures of Jama Masjid during a recent trip",
    category: "Outings"
  },
  {
    id: "g3",
    src: "/images/Me.jpeg",
    alt: "Me :)",
    caption: "A picture of me taken by a friend",
    category: "Me"
  },
  {
    id: "g4",
    src: "/images/Lalbagh_Waterfall.jpeg",
    alt: "Waterfall",
    caption: "A picture of waterfall at Lalbagh Bengaluru",
    category: "Outings"
  },
  {
    id: "g5",
    src: "/images/Me_Explaining_Work.jpeg",
    alt: "Me again",
    caption: "A picture a friend took of me while I was explaining my research proejct to her",
    category: "Me"
  },
  {
    id: "g6",
    src: "/images/Kavvayi.jpeg",
    alt: "Mangroves",
    caption: "A picture of mangroves near my grandmother's house. Fun fact, you can walk through the water, it's not that deep",
    category: "Outings"
  }
];

// --- Components ---

const SectionHeader = ({ title, icon, className = "gap-3" }: { title: string; icon?: React.ReactNode; className?: string }) => (
  <div className={`flex items-center ${className} mb-8`}>
    <span style={{ color: THEME.mauve }}>{icon}</span>
    <h2 className="text-xl font-bold tracking-tight uppercase" style={{ color: THEME.text }}>
      {title}
    </h2>
    <div className="h-px flex-grow ml-4 opacity-30" style={{ backgroundColor: THEME.overlay0 }}></div>
  </div>
);

const Badge = ({ children, color = THEME.blue }: { children: React.ReactNode; color?: string }) => (
  <span
    className="px-2 py-1 rounded text-xs font-medium border"
    style={{
      borderColor: `${color}40`,
      color: color,
      backgroundColor: `${color}10`
    }}
  >
    {children}
  </span>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`p-6 rounded-lg border transition-all duration-300 hover:translate-y-[-2px] ${className}`}
    style={{
      backgroundColor: THEME.surface0,
      borderColor: THEME.surface1,
    }}
  >
    {children}
  </div>
);

export default function Portfolio() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'gallery'>('portfolio');
  const [activeGalleryImage, setActiveGalleryImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll logic that handles page switching
  const handleNavClick = (target: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu on click

    if (target === 'gallery') {
      setCurrentView('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView === 'gallery') {
        setCurrentView('portfolio');
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];
  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const NavContent = () => (
    <div className="flex flex-col h-full p-6">
      <button
        onClick={() => handleNavClick('home')}
        className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity mb-12 text-left"
        style={{ color: THEME.text }}
      >
        <span style={{ color: THEME.mauve }}>~</span>/gokul
      </button>

      <div className="flex flex-col gap-4 flex-grow">
        {['About', 'Research', 'Projects', 'Blog', 'Skills', 'Gallery', 'Contact'].map((item) => {
          if (item === 'Blog') {
            return (
              <a
                key={item}
                href="https://gokul2406.github.io/Space"
                className="group relative flex items-center w-fit"
              >
                <span
                  className="text-sm font-medium transition-colors duration-200 opacity-80 group-hover:opacity-100 group-hover:text-white"
                  style={{ color: THEME.subtext1 }}
                >
                  {item}
                </span>
                <span
                  className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300 ease-out"
                  style={{ backgroundColor: THEME.blue }}
                />
              </a>
            );
          }
          return (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className="group relative flex items-center w-fit"
            >
              <span className={`text-sm font-medium transition-colors duration-200 ${(currentView === 'gallery' && item === 'Gallery')
                ? 'font-bold text-blue-300'
                : 'opacity-80 group-hover:opacity-100 group-hover:text-white'
                }`}
                style={{
                  color: (currentView === 'gallery' && item === 'Gallery') ? THEME.blue : THEME.subtext1
                }}>
                {item}
              </span>
              <span
                className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-300 ease-out ${(currentView === 'gallery' && item === 'Gallery') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                style={{ backgroundColor: THEME.blue }}
              />
            </button>
          );
        })}
      </div>

      <div className="pt-6 border-t mt-auto" style={{ borderColor: 'transparent' }}>
        <div className="flex gap-4 opacity-80">
          <a href="https://github.com/Gokul2406" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Github size={18} color={THEME.subtext0} />
          </a>
          <a href="https://www.linkedin.com/in/gokulpb" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={18} color={THEME.subtext0} />
          </a>
          <a href="mailto:ms23027@iisermohali.ac.in" className="hover:text-white transition-colors">
            <Mail size={18} color={THEME.subtext0} />
          </a>
        </div>
        <p className="mt-4 text-[10px]" style={{ color: THEME.overlay0 }}>
          © 2025 Gokul P Bharathan
        </p>
      </div>
    </div>
  );

  return (
    <div
      className="flex min-h-screen selection:bg-indigo-500/30"
      style={{
        backgroundColor: THEME.base,
        color: THEME.text,
        fontFamily: '"Maple Mono", "JetBrains Mono", "Fira Code", monospace'
      }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');`}
      </style>

      {/* --- DESKTOP SIDEBAR --- */}
      <aside
        className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 border-r"
        style={{ backgroundColor: THEME.mantle, borderColor: 'transparent' }}
      >
        <NavContent />
      </aside>

      {/* --- MOBILE HEADER --- */}
      <div
        className="md:hidden fixed top-0 w-full h-16 border-b flex items-center justify-between px-6 z-50 backdrop-blur-md"
        style={{ backgroundColor: `${THEME.base}dd`, borderColor: 'transparent' }}
      >
        <span className="font-bold text-lg" style={{ color: THEME.text }}>~/gokul.phys</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ color: THEME.text }}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-16" style={{ backgroundColor: THEME.base }}>
          <NavContent />
        </div>
      )}

      {/* Lightbox Overlay */}
      {activeGalleryImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200"
          style={{ backgroundColor: 'rgba(30, 30, 46, 0.95)', backdropFilter: 'blur(5px)' }}
          onClick={() => setActiveGalleryImage(null)}
        >
          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center p-4">
            <button
              onClick={(e) => { e.stopPropagation(); setActiveGalleryImage(null); }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              style={{ color: THEME.text }}
            >
              <X size={32} />
            </button>
            <img
              src={activeGalleryImage.src}
              alt={activeGalleryImage.alt}
              className="max-h-[85vh] max-w-full rounded shadow-2xl object-contain border"
              style={{ borderColor: THEME.surface1 }}
              onClick={(e) => e.stopPropagation()}
            />
            <div
              className="mt-6 text-center max-w-2xl px-4 py-3 rounded"
              style={{ backgroundColor: THEME.mantle }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Camera size={14} style={{ color: THEME.blue }} />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: THEME.blue }}>
                  {activeGalleryImage.category}
                </span>
              </div>
              <p className="text-base font-medium" style={{ color: THEME.text }}>
                {activeGalleryImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-6 md:p-16 pt-24 md:pt-16 min-h-screen">

        {/* VIEW LOGIC */}

        {currentView === 'gallery' ? (

          // --- GALLERY PAGE VIEW ---
          <div className="animate-in fade-in duration-500 max-w-5xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: THEME.text }}>
                Visuals
              </h1>
              <p className="text-lg max-w-2xl mb-8" style={{ color: THEME.subtext1 }}>
                A collection of snapshots from my research, simulations, and life at IISER Mohali.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 pb-4 border-b" style={{ borderColor: THEME.surface1 }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'translate-y-[-1px] shadow-sm' : 'hover:opacity-80'
                      }`}
                    style={{
                      backgroundColor: activeCategory === cat ? THEME.mauve : 'transparent',
                      color: activeCategory === cat ? THEME.base : THEME.subtext1,
                      border: activeCategory === cat ? 'none' : `1px solid ${THEME.surface1}`
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </header>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer border hover:border-mauve transition-colors"
                  style={{ borderColor: THEME.surface1, backgroundColor: THEME.surface0 }}
                  onClick={() => setActiveGalleryImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: THEME.mauve }}>{img.category}</span>
                    <p className="text-sm font-medium leading-relaxed" style={{ color: THEME.text }}>{img.caption}</p>
                    <div className="absolute top-4 right-4 p-2 rounded-full text-white" style={{ backgroundColor: THEME.surface1 }}>
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="py-20 text-center opacity-50">
                <p>No images found in this category.</p>
              </div>
            )}

            <div className="mt-20 pt-10 border-t text-center" style={{ borderColor: THEME.surface1 }}>
              <button
                onClick={() => handleNavClick('home')}
                className="inline-flex items-center gap-2 text-sm hover:opacity-100 transition-opacity opacity-70"
                style={{ color: THEME.subtext0 }}
              >
                <ArrowLeft size={16} />
                Return to Portfolio
              </button>
            </div>
          </div>

        ) : (

          // --- MAIN PORTFOLIO VIEW ---
          <div className="space-y-32 animate-in fade-in duration-500 max-w-4xl mx-auto">

            {/* Hero Section */}
            <section id="home" className="pt-10 flex flex-col gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sm mb-2 font-medium">
                  <span style={{ color: THEME.green }}>● Available for Research</span>
                  <span style={{ color: THEME.subtext0 }}>|</span>
                  <span style={{ color: THEME.subtext0 }}>Mohali, IN</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none" style={{ color: THEME.text }}>
                  Hello, I'm <span style={{ color: THEME.mauve }}>Gokul</span>.
                </h1>

                <p className="text-xl leading-relaxed max-w-2xl" style={{ color: THEME.subtext1 }}>
                  BS-MS Physics student at IISER Mohali. <br className="hidden md:block" />
                  I build software for <span style={{ color: THEME.blue }}>Astrophysics</span> and explore <span style={{ color: THEME.pink }}>Deep Learning</span>.
                </p>

                <div className="flex gap-4 pt-4">
                  <a href="mailto:ms23027@iisermohali.ac.in"
                    className="px-6 py-3 rounded text-sm font-semibold transition-transform hover:-translate-y-1 flex items-center gap-2 shadow-sm"
                    style={{ backgroundColor: THEME.mauve, color: THEME.base }}>
                    <Mail size={16} />
                    Get in touch
                  </a>
                  <a href="https://github.com/Gokul2406" target="_blank" rel="noreferrer"
                    className="px-6 py-3 rounded text-sm font-semibold transition-transform hover:-translate-y-1 border flex items-center gap-2 hover:bg-white/5"
                    style={{ borderColor: THEME.surface1, color: THEME.text }}>
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </section>

            {/* About / Research Interests */}
            <section id="about">
              <SectionHeader title="Research Interests" icon={<BookOpen size={20} />} />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold" style={{ color: THEME.blue }}>Astrophysics</h3>
                  <p style={{ color: THEME.subtext1 }} className="leading-relaxed text-sm">
                    My primary focus lies in Galaxy formation and evolution. I use hydrodynamical simulations to understand AGN feedback mechanisms and how they shape the cosmos.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold" style={{ color: THEME.pink }}>Deep Learning</h3>
                  <p style={{ color: THEME.subtext1 }} className="leading-relaxed text-sm">
                    Bridging the gap between theory and data. I'm exploring Physics Informed Neural Networks (PINNs) to solve differential equations faster than traditional numerical methods.
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section id="research">
              {/* Changed Title to Research Experience and increased gap to gap-6 */}
              <SectionHeader title="Research Experience" icon={<Search size={20} />} className="gap-6" />
              <div className="space-y-12">
                <div className="relative pl-8 border-l" style={{ borderColor: THEME.surface1 }}>
                  {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="mb-12 relative">
                      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2"
                        style={{ borderColor: THEME.mauve, backgroundColor: THEME.base }}>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 ml-3">
                        <h3 className="text-lg font-bold" style={{ color: THEME.text }}>{exp.role}</h3>
                        <span className="text-xs font-mono" style={{ color: THEME.subtext0 }}>{exp.period}</span>
                      </div>
                      <div className="text-sm mb-4 font-semibold uppercase tracking-wide" style={{ color: THEME.mauve }}>
                        {exp.company}
                      </div>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-3 items-start text-sm leading-relaxed" style={{ color: THEME.subtext1 }}>
                            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: THEME.surface1 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects */}
            <section id="projects">
              <SectionHeader title="Projects" icon={<Code size={20} />} />
              <div className="grid md:grid-cols-2 gap-6">
                {PROJECTS.map((project, index) => (
                  <Card key={index} className="flex flex-col h-full group">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold group-hover:opacity-80 transition-opacity" style={{ color: THEME.text }}>
                        {project.title}
                      </h3>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" style={{ color: THEME.subtext0 }}>
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="mb-6 flex-grow text-sm leading-relaxed" style={{ color: THEME.subtext1 }}>
                      {project.description}
                    </p>

                    {project.stats && (
                      <div className="mb-4 text-xs font-mono" style={{ color: THEME.green }}>
                        {project.stats}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map(t => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Leadership & Talks */}
            <section id="leadership">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <SectionHeader title="Community" icon={<Users size={20} />} />
                  <div className="space-y-6">
                    <div className="p-4 rounded border-l-2" style={{ borderColor: THEME.blue, backgroundColor: THEME.surface0 }}>
                      <h3 className="font-bold mb-1 text-sm" style={{ color: THEME.text }}>President</h3>
                      <p className="text-xs mb-2" style={{ color: THEME.subtext1 }}>Scientific Computational Club, IISER Mohali</p>
                    </div>
                    <div className="p-4 rounded border-l-2" style={{ borderColor: THEME.mauve, backgroundColor: THEME.surface0 }}>
                      <h3 className="font-bold mb-1 text-sm" style={{ color: THEME.text }}>Active Member</h3>
                      <p className="text-xs" style={{ color: THEME.subtext1 }}>Robotics and Instrumentation Club</p>
                    </div>
                    <div className="p-4 rounded border-l-2" style={{ borderColor: THEME.peach, backgroundColor: THEME.surface0 }}>
                      <h3 className="font-bold mb-1 text-sm" style={{ color: THEME.text }}>INSPIRE-SHE Scholar</h3>
                      <p className="text-xs" style={{ color: THEME.subtext1 }}>Department of Science & Technology India</p>
                    </div>
                  </div>
                </div>

                <div>
                  <SectionHeader title="Talks" icon={<GraduationCap size={20} />} />
                  <div className="space-y-8">
                    {TALKS.map((talk, i) => (
                      <div key={i} className="group">
                        <div className="flex justify-between items-baseline mb-2">
                          <h3 className="font-bold text-sm" style={{ color: THEME.text }}>{talk.title}</h3>
                          <span className="text-xs font-mono" style={{ color: THEME.subtext0 }}>{talk.event}</span>
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: THEME.subtext1 }}>
                          {talk.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section id="skills">
              <SectionHeader title="Arsenal" icon={<Terminal size={20} />} />
              <div className="grid md:grid-cols-3 gap-8">
                {SKILLS.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-2 mb-2" style={{ color: THEME.mauve }}>
                      {category.icon}
                      <h3 className="font-bold text-sm uppercase tracking-wider">{category.title}</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      {category.skills.map(skill => (
                        <span
                          key={skill}
                          className="text-sm transition-colors hover:translate-x-1 duration-200 cursor-default"
                          style={{ color: THEME.subtext1 }}
                        >
                          <span style={{ color: THEME.overlay0, marginRight: '8px' }}>▹</span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-12 border-t"
              style={{ borderColor: THEME.surface1 }}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: THEME.text }}>Let's work together.</h2>
                  <p className="text-sm" style={{ color: THEME.subtext1 }}>
                    Open to research collaborations and OSS contributions.
                  </p>
                </div>
                {/* Mobile view of social icons (desktop has them in sidebar) */}
                <div className="flex gap-4 md:hidden">
                  <a href="mailto:ms23027@iisermohali.ac.in"
                    className="p-3 rounded-full transition-colors hover:bg-white/10"
                    style={{ color: THEME.text }}>
                    <Mail size={20} />
                  </a>
                  <a href="https://github.com/Gokul2406" target="_blank" rel="noreferrer"
                    className="p-3 rounded-full transition-colors hover:bg-white/10"
                    style={{ color: THEME.text }}>
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/gokulpb" target="_blank" rel="noreferrer"
                    className="p-3 rounded-full transition-colors hover:bg-white/10"
                    style={{ color: THEME.text }}>
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              <div className="mt-12 text-center text-xs md:hidden" style={{ color: THEME.subtext0 }}>
                <p>Built with React & Tailwind • Typeset in Maple Mono</p>
              </div>
            </section>

          </div>
        )}
      </main>
    </div>
  );
}
