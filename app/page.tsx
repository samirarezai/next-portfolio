"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-mono">
      {/* Robot Dot Grid Overlay */}
      <div className="fixed inset-0 robot-grid pointer-events-none opacity-10" />
      <div className="fixed inset-0 checkered-grid pointer-events-none opacity-5" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-background/80 py-4 border-b-4 border-primary" : ""}`}>
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-12 h-12 bg-primary flex items-center justify-center pixel-shadow-pink">
            {/* Pixel Face Logo */}
            <div className="grid grid-cols-5 gap-0.5 p-1.5 w-full h-full">
              {[0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0].map((p, i) => (
                <div key={i} className={`${p ? 'bg-pink' : 'bg-transparent'}`} />
              ))}
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter uppercase text-primary font-keygen">SAMIRA</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink font-keygen">REZAYI</span>
          </div>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] font-silkscreen">
          <a href="#work" className="hover:text-pink transition-colors relative py-2 group">
            Work
            <span className="absolute bottom-0 left-0 w-full h-1 bg-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a href="#about" className="hover:text-pink transition-colors relative py-2 group">
            About
            <span className="absolute bottom-0 left-0 w-full h-1 bg-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a href="#contact" className="hover:text-pink transition-colors relative py-2 group">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-1 bg-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>
        <div className="flex items-center gap-6">
          <button className="px-6 py-3 bg-primary text-background font-black uppercase text-[10px] tracking-[0.2em] hover:bg-pink transition-all pixel-shadow-pink active:translate-x-1 active:translate-y-1 active:shadow-none">
            Hire Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
        {/* Large Decorative Katakana "メカ" (Meka) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-primary opacity-[0.03] pointer-events-none select-none">
          メカ
        </div>

        <div className="z-10 flex flex-col items-center max-w-6xl w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-pink text-background px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-float font-silkscreen">
                Full-Stack Developer
              </div>
              <h1 className="text-8xl md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase text-primary mb-8 font-keygen">
                SAMIRA <br />
                <span className="text-pink">REZAYI</span> <br />

              </h1>
              <p className="max-w-md text-lg font-bold leading-relaxed opacity-70 border-l-4 border-primary pl-6 font-silkscreen">
                7+ years of crafting digital robots and high-performance web experiences.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              {/* Abstract Robot Decoration using CSS grid */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-background border-8 border-primary relative pixel-shadow animate-float">
                <div className="absolute inset-4 border-4 border-pink opacity-50" />
                <div className="absolute top-12 left-12 w-12 h-12 bg-primary animate-pulse" />
                <div className="absolute top-12 right-12 w-12 h-12 bg-primary animate-pulse" />
                <div className="absolute bottom-12 left-12 right-12 h-8 bg-pink opacity-80" />
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-pink flex items-center justify-center text-4xl font-bold text-background pixel-shadow">
                  ★
                </div>
              </div>

              {/* Pinki Creature */}
              <div className="absolute -bottom-44 -right-40 w-32 h-32 z-20 animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
                <Image
                  src="/pinki.png"
                  alt="Pinki Creature"
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-[0_0_15px_rgba(254,52,218,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-4">
          <div className="w-8 h-12 border-4 border-primary rounded-full relative">
            <div className="w-2 h-2 bg-pink rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute -left-20 top-20 text-9xl font-black text-primary opacity-5 rotate-90 select-none font-keygen">
          PROJECTS
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <span className="text-pink font-black text-xl font-silkscreen">[ 03 ]</span>
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-primary font-keygen">
              WORK<span className="text-pink">.</span>
            </h2>
          </div>
          <div className="text-right font-black font-silkscreen uppercase tracking-widest text-xs opacity-40">
            Selected Repositories
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background border-4 border-primary p-8 hover:bg-primary transition-all duration-300 pixel-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 text-pink font-black group-hover:text-background transition-colors">
                #{project.id}
              </div>
              <div className="mb-12">
                <p className="text-[10px] font-black uppercase tracking-widest text-pink group-hover:text-background/80 transition-colors mb-4 font-silkscreen">
                  {project.tag}
                </p>
                <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-background transition-colors mb-6">
                  {project.name}
                </h3>
                <p className="text-sm font-bold leading-relaxed opacity-60 group-hover:text-background/60 transition-colors font-silkscreen">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-4 font-black uppercase text-xs tracking-widest group-hover:text-background transition-colors">
                View Source <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-32 px-6 bg-primary text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 robot-grid" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12 font-keygen">
              THE <br />
              <span className="text-pink">ROBOT</span> <br />
              BRAIN
            </h2>
            <p className="text-2xl font-bold leading-relaxed mb-12 border-l-8 border-pink pl-8 font-silkscreen">
              &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-black uppercase tracking-widest text-[10px] mb-2 text-pink font-silkscreen">Core Location</h4>
                <p className="text-lg font-bold font-silkscreen">Tehran, Iran / Remote</p>
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-[10px] mb-2 text-pink font-silkscreen">Uptime</h4>
                <p className="text-lg font-bold font-silkscreen">7+ Years Exp</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="aspect-square bg-background border-8 border-pink relative group overflow-hidden">
              {/* Pixel Art Headshot Placeholder */}
              <div className="absolute inset-0 bg-pink/20 mix-blend-multiply group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 left-4">
                <p className="font-black uppercase text-primary bg-background px-2 inline-block">SR-9000</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              {['Languages', 'Frameworks', 'Tools'].map((cat, idx) => (
                <div key={idx} className="border-b-2 border-background/20 pb-4 font-silkscreen">
                  <h4 className="font-black uppercase text-[10px] text-pink mb-1">{cat}</h4>
                  <div className="h-2 w-full bg-background/10 mt-2">
                    <div className="h-full bg-pink w-[80%]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[15vw] font-black opacity-[0.02] pointer-events-none uppercase tracking-tighter font-keygen">
          CONTACT
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-xs font-black uppercase tracking-[0.5em] text-pink mb-8 font-silkscreen">Ready for deployment</p>
          <a href="mailto:samirarezai1996@gmail.com" className="text-4xl md:text-7xl font-black text-primary hover:text-pink transition-colors break-all font-keygen">
            SAMIRAREZAI1996@GMAIL.COM
          </a>

          <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t-4 border-primary">
            <div className="flex gap-4">
              {['LI', 'GH', 'TW'].map(s => (
                <button key={s} className="w-12 h-12 border-4 border-primary flex items-center justify-center font-black text-xs hover:bg-pink hover:border-pink hover:text-background transition-all pixel-shadow-pink font-silkscreen">
                  {s}
                </button>
              ))}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40 font-silkscreen">
              © 2025 SAMIRA REZAIE — SYSTEM: OPTIMIZED
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary font-silkscreen">JAPAN</span>
              <span className="text-2xl">🇯🇵</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
