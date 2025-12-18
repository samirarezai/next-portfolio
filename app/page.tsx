"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: "01",
      name: "NEXT-MONGO",
      tag: "Full Stack Architecture",
      description: "Scalable MongoDB integration with Next.js",
      link: "https://github.com/samirarezai/next-mongo"
    },
    {
      id: "02",
      name: "TEST-VUEJS-3",
      tag: "UI Experimentation",
      description: "Advanced Vue 3 composition API patterns",
      link: "https://github.com/samirarezai/test-vuejs-3"
    },
    {
      id: "03",
      name: "NEST-JS-BACK",
      tag: "Backend Core",
      description: "Robust NestJS architecture for enterprise apps",
      link: "https://github.com/samirarezai/nest-js-back"
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Checkered Background Overlay */}
      <div className="fixed inset-0 checkered-grid pointer-events-none opacity-20" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-background/80 py-4 border-b border-foreground/5" : ""}`}>
        <div className="text-2xl font-black tracking-tighter">SR.</div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
        <button className="px-6 py-2 bg-foreground text-background font-bold uppercase text-xs tracking-widest hover:bg-accent hover:text-white transition-all">
          Resume
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 blur-3xl rounded-full animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full animate-pulse pointer-events-none" />

        <div className="z-10 text-center">
          <p className="text-xs font-black uppercase tracking-[0.5em] mb-8 opacity-60">
            Senior Front-End Developer — 2024
          </p>
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase">
            Design <br />
            <span className="text-accent">Wrap</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="max-w-xs text-sm font-medium leading-relaxed opacity-60 text-center md:text-left">
              Crafting high-performance web applications with React, Next.js, and TypeScript.
            </p>
            <div className="h-px w-20 bg-foreground/20 hidden md:block" />
            <p className="max-w-xs text-sm font-medium leading-relaxed opacity-60 text-center md:text-right">
              7+ years of experience in building pixel-perfect digital experiences.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Scroll</span>
          <div className="w-px h-12 bg-foreground/20" />
        </div>
      </section>

      {/* Skills / Focus Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-y border-foreground/5 bg-background/50 relative">
        {[
          { title: "Frontend", desc: "Expertise in React, Next.js, and modern CSS architectures.", color: "bg-pink-500" },
          { title: "Architecture", desc: "Building scalable, maintainable, and efficient codebases.", color: "bg-blue-500" },
          { title: "Interface", desc: "Focusing on UX, accessibility, and high-fidelity interactions.", color: "bg-purple-500" },
          { title: "Strategy", desc: "Leading teams and projects to successful delivery.", color: "bg-orange-500" }
        ].map((skill, i) => (
          <div key={i} className="group cursor-default">
            <div className={`w-12 h-1 bg-foreground group-hover:w-full transition-all duration-500 mb-6`} />
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">{skill.title}</h3>
            <p className="text-sm font-medium leading-relaxed opacity-60">{skill.desc}</p>
          </div>
        ))}
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24">
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter">
            Work<span className="text-accent">.</span>
          </h2>
          <div className="hidden md:block text-right">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Portfolio</p>
            <p className="text-sm font-bold">Selected Projects (03)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-7 aspect-video bg-foreground/5 relative overflow-hidden">
                {/* Simulated Project Image/Video Placeholder */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-black opacity-5 text-outline">{project.id}</span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="text-xs font-black uppercase tracking-widest text-accent mb-4">{project.tag}</p>
                <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-lg font-medium leading-relaxed opacity-60 mb-8">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 font-black uppercase text-xs tracking-widest">
                  View Repository <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Profile / About Section */}
      <section className="py-32 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              The <br />
              <span className="text-accent text-outline">Dream</span> <br />
              Team
            </h2>
            <p className="text-xl font-medium leading-relaxed opacity-80 mb-12">
              &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot; – Cory House
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="aspect-3/4 bg-background/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6">
                <p className="font-black uppercase tracking-widest text-sm">Samira Rezayi</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Senior Frontend Developer</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8">
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-2 opacity-60">Location</h4>
                <p className="text-lg font-bold uppercase tracking-tight">Tehran, Iran / Remote</p>
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-2 opacity-60">Experience</h4>
                <p className="text-lg font-bold uppercase tracking-tight">7+ Years of crafting code</p>
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-2 opacity-60">Connect</h4>
                <div className="flex gap-4 mt-2">
                  {['LI', 'GH', 'TW'].map(s => (
                    <span key={s} className="w-10 h-10 border border-background/20 flex items-center justify-center font-bold text-[10px] hover:bg-accent hover:border-accent transition-colors cursor-pointer">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-foreground/5 text-center">
        <h2 className="text-[15vw] font-black leading-none uppercase tracking-tighter opacity-5 mb-12 select-none">
          Get In Touch
        </h2>
        <div className="flex flex-col items-center gap-8">
          <p className="text-sm font-bold uppercase tracking-[0.5em] opacity-40">Available for new opportunities</p>
          <a href="mailto:hello@samirarezai.com" className="text-3xl md:text-5xl font-black hover:text-accent transition-colors">
            work@samirarezai.com
          </a>
          <p className="mt-12 text-[10px] font-bold uppercase tracking-widest opacity-40">
            © 2025 SAMIRA REZAIE — ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
