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
  GraduationCap
} from 'lucide-react';

/**
 * Catppuccin Mocha Theme Palette
 */
const THEME = {
  base: '#1e1e2e',    // Main background
  mantle: '#181825',  // Darker background (sidebar/footer)
  crust: '#11111b',   // Darkest background
  text: '#cdd6f4',    // Main text
  subtext1: '#bac2de', // Secondary text
  subtext0: '#a6adc8', // Tertiary text
  overlay2: '#9399b2', // Borders/faint text
  blue: '#89b4fa',    // Primary accent
  mauve: '#cba6f7',   // Secondary accent
  pink: '#f5c2e7',    // Tertiary accent
  green: '#a6e3a1',   // Success/Good
  red: '#f38ba8',     // Error/Important
  yellow: '#f9e2af',  // Warning/Highlight
  peach: '#fab387',   // Numbers/Special
  surface0: '#313244', // Card background
  surface1: '#45475a', // Hover states
  surface2: '#585b70', // Active states
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

// Placeholder images - Replace these URLs with your actual photos
const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080&auto=format&fit=crop",
    alt: "Starry sky and galaxy",
    caption: "Analyzing star formation rates in early galaxies.",
    category: "Research"
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080&auto=format&fit=crop",
    alt: "Coding setup with neovim",
    caption: "My nightly coding station. Neovim + Tmux on Arch Linux.",
    category: "Setup"
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1080&auto=format&fit=crop",
    alt: "Physics library",
    caption: "Late night study sessions at the IISER library.",
    category: "Campus"
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1614726365723-49cfae963c6c?q=80&w=1080&auto=format&fit=crop",
    alt: "Simulation visualization",
    caption: "Visualizing hydrodynamical simulation data outputs.",
    category: "Simulations"
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1080&auto=format&fit=crop",
    alt: "Lab Equipment",
    caption: "Setting up instrumentation for data collection.",
    category: "Research"
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080&auto=format&fit=crop",
    alt: "Circuit Board",
    caption: "Working on embedded systems for the Robotics Club.",
    category: "Setup"
  }
];

// --- Main Components ---

const SectionHeader = ({ title, icon }: { title: string; icon?: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-8">
    <span style={{ color: THEME.mauve }}>{icon}</span>
    <h2 className="text-2xl font-bold tracking-tight" style={{ color: THEME.text }}>
      {title}
    </h2>
    <div className="h-px flex-grow ml-4 opacity-30" style={{ backgroundColor: THEME.surface0 }}></div>
  </div>
);

const Badge = ({ children, color = THEME.blue }: { children: React.ReactNode; color?: string }) => (
  <span 
    className="px-2 py-1 rounded text-xs font-medium border transition-colors"
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
      backgroundColor: `${THEME.surface0}40`, // Lower opacity for cleaner look
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

  // Smooth scroll logic that handles page switching
  const handleNavClick = (target: string) => {
    
    if (target === 'gallery') {
      setCurrentView('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we are on gallery page, switch back to portfolio first
      if (currentView === 'gallery') {
        setCurrentView('portfolio');
        // Small delay to allow render, then scroll
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        // We are already on portfolio, just scroll
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];
  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div 
      className="min-h-screen selection:bg-indigo-500/30"
      style={{ 
        backgroundColor: THEME.base, 
        color: THEME.text,
        fontFamily: '"Maple Mono", "JetBrains Mono", "Fira Code", monospace' 
      }}
    >
      {/* Import JetBrains Mono as fallback if Maple isn't local */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');`}
      </style>

      {/* Navigation */}
      <nav 
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
        style={{ 
          backgroundColor: `${THEME.base}dd`, 
          borderColor: THEME.surface0 
        }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => handleNavClick('home')} 
            className="font-bold text-lg tracking-tighter hover:text-blue-400 transition-colors" 
            style={{ color: THEME.mauve }}
          >
            ~/gokul.phys
          </button>
          
          <div className="hidden md:flex gap-8 text-sm">
            {['About', 'Research', 'Projects', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`hover:text-blue-400 transition-colors ${
                  (currentView === 'gallery' && item === 'Gallery')
                    ? 'text-blue-400' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{ color: THEME.text }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Lightbox Overlay */}
      {activeGalleryImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(5px)' }}
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
              className="max-h-[85vh] max-w-full rounded shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()} 
            />
            
            <div 
              className="mt-6 text-center max-w-2xl px-4 py-3 rounded-lg backdrop-blur-md"
              style={{ backgroundColor: `${THEME.base}80` }}
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
      <main className="pt-32 pb-32 px-6 max-w-5xl mx-auto min-h-screen">
        
        {/* VIEW LOGIC */}
        
        {currentView === 'gallery' ? (
          
          // --- GALLERY PAGE VIEW ---
          <div className="animate-in fade-in duration-500">
             <header className="mb-12">
               <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: THEME.text }}>
                 Visuals
               </h1>
               <p className="text-lg opacity-80 max-w-2xl mb-8" style={{ color: THEME.subtext0 }}>
                 A collection of snapshots from my research, simulations, and life at IISER Mohali.
               </p>

               {/* Category Filter */}
               <div className="flex flex-wrap gap-2 pb-4 border-b" style={{ borderColor: THEME.surface0 }}>
                 {categories.map(cat => (
                   <button
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                       activeCategory === cat ? 'translate-y-[-1px]' : 'hover:bg-white/5'
                     }`}
                     style={{ 
                       backgroundColor: activeCategory === cat ? THEME.blue : 'transparent',
                       color: activeCategory === cat ? THEME.base : THEME.subtext0,
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
                    className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer bg-gray-800 break-inside-avoid"
                    onClick={() => setActiveGalleryImage(img)}
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: THEME.blue }}>{img.category}</span>
                      <p className="text-sm font-medium text-white leading-relaxed">{img.caption}</p>
                      <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all delay-100 translate-y-2 group-hover:translate-y-0 duration-300">
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

             <div className="mt-20 pt-10 border-t text-center" style={{ borderColor: THEME.surface0 }}>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="inline-flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                  style={{ color: THEME.subtext0 }}
                >
                  <ArrowLeft size={16} />
                  Return to Portfolio
                </button>
             </div>
          </div>

        ) : (
          
          // --- MAIN PORTFOLIO VIEW ---
          <div className="space-y-32 animate-in fade-in duration-500">
            
            {/* Hero Section */}
            <section id="home" className="pt-10 flex flex-col gap-8 max-w-3xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sm mb-2">
                  <span style={{ color: THEME.green }}>● Available for Research</span>
                  <span style={{ color: THEME.surface2 }}>|</span>
                  <span style={{ color: THEME.blue }}>Mohali, IN</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
                  Hello, I'm <span style={{ color: THEME.blue }}>Gokul</span>.
                </h1>
                
                <p className="text-xl leading-relaxed opacity-90" style={{ color: THEME.subtext0 }}>
                  BS-MS Physics student at IISER Mohali. <br className="hidden md:block"/>
                  I build software for <span style={{ color: THEME.peach }}>Astrophysics</span> and explore <span style={{ color: THEME.mauve }}>Deep Learning</span>.
                </p>
                
                <div className="flex gap-4 pt-4">
                  <a href="mailto:ms23027@iisermohali.ac.in" 
                    className="px-6 py-3 rounded text-sm font-semibold transition-transform hover:-translate-y-1 flex items-center gap-2"
                    style={{ backgroundColor: THEME.blue, color: THEME.base }}>
                    <Mail size={16} />
                    Get in touch
                  </a>
                  <a href="https://github.com/Gokul2406" target="_blank" rel="noreferrer"
                    className="px-6 py-3 rounded text-sm font-semibold transition-transform hover:-translate-y-1 border flex items-center gap-2"
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
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold" style={{ color: THEME.blue }}>Astrophysics</h3>
                  <p style={{ color: THEME.subtext0 }} className="leading-relaxed text-sm">
                    My primary focus lies in Galaxy formation and evolution. I use hydrodynamical simulations to understand AGN feedback mechanisms and how they shape the cosmos.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold" style={{ color: THEME.mauve }}>Deep Learning</h3>
                  <p style={{ color: THEME.subtext0 }} className="leading-relaxed text-sm">
                    Bridging the gap between theory and data. I'm exploring Physics Informed Neural Networks (PINNs) to solve differential equations faster than traditional numerical methods.
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section id="research">
              <SectionHeader title="Experience" icon={<Briefcase size={20} />} />
              <div className="space-y-12">
                <div className="relative pl-8 border-l" style={{ borderColor: THEME.surface1 }}>
                  {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="mb-12 relative">
                      <div className="absolute -left-[37px] p-1.5 rounded-full border-4" 
                          style={{ backgroundColor: THEME.base, borderColor: THEME.surface1 }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME.blue }} />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                        <h3 className="text-lg font-bold" style={{ color: THEME.text }}>{exp.role}</h3>
                        <span className="text-xs opacity-70" style={{ color: THEME.subtext1 }}>{exp.period}</span>
                      </div>
                      <div className="text-sm mb-4 font-semibold opacity-90" style={{ color: THEME.pink }}>
                        {exp.company}
                      </div>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-3 items-start text-sm leading-relaxed opacity-80" style={{ color: THEME.subtext0 }}>
                            <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: THEME.overlay2 }} />
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
                      <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors" style={{ color: THEME.text }}>
                        {project.title}
                      </h3>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" style={{ color: THEME.subtext1 }}>
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="mb-6 flex-grow text-sm leading-relaxed opacity-80" style={{ color: THEME.subtext0 }}>
                      {project.description}
                    </p>
                    
                    {project.stats && (
                      <div className="mb-4 text-xs" style={{ color: THEME.green }}>
                        {project.stats}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map(t => (
                        <Badge key={t} color={THEME.mauve}>{t}</Badge>
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
                      <div className="p-4 rounded border-l-2" style={{ borderColor: THEME.blue, backgroundColor: `${THEME.surface0}20` }}>
                          <h3 className="font-bold mb-1 text-sm" style={{ color: THEME.text }}>President</h3>
                          <p className="text-xs mb-2 opacity-80" style={{ color: THEME.subtext1 }}>Scientific Computational Club, IISER Mohali</p>
                      </div>
                      <div className="p-4 rounded border-l-2" style={{ borderColor: THEME.mauve, backgroundColor: `${THEME.surface0}20` }}>
                          <h3 className="font-bold mb-1 text-sm" style={{ color: THEME.text }}>Active Member</h3>
                          <p className="text-xs opacity-80" style={{ color: THEME.subtext1 }}>Robotics and Instrumentation Club</p>
                      </div>
                      <div className="p-4 rounded border-l-2" style={{ borderColor: THEME.peach, backgroundColor: `${THEME.surface0}20` }}>
                          <h3 className="font-bold mb-1 text-sm" style={{ color: THEME.text }}>INSPIRE-SHE Scholar</h3>
                          <p className="text-xs opacity-80" style={{ color: THEME.subtext1 }}>Department of Science & Technology India</p>
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
                            <span className="text-xs font-mono opacity-60" style={{ color: THEME.pink }}>{talk.event}</span>
                          </div>
                          <p className="text-xs leading-relaxed opacity-70" style={{ color: THEME.subtext0 }}>
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
                    <div className="flex items-center gap-2 mb-2 opacity-80" style={{ color: THEME.blue }}>
                      {category.icon}
                      <h3 className="font-bold text-sm uppercase tracking-wider">{category.title}</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      {category.skills.map(skill => (
                        <span 
                          key={skill}
                          className="text-sm transition-colors hover:translate-x-1 duration-200 cursor-default"
                          style={{ color: THEME.subtext0 }}
                        >
                          <span style={{ color: THEME.overlay2, marginRight: '8px' }}>▹</span>
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
                    style={{ borderColor: THEME.surface0 }}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: THEME.text }}>Let's work together.</h2>
                  <p className="text-sm opacity-60" style={{ color: THEME.subtext0 }}>
                    Open to research collaborations and OSS contributions.
                  </p>
                </div>
                <div className="flex gap-4">
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
              <div className="mt-12 text-center text-xs opacity-30" style={{ color: THEME.text }}>
                <p>Designed in Catppuccin Mocha • Typeset in Maple Mono</p>
              </div>
            </section>

          </div>
        )}
      </main>
    </div>
  );
}
