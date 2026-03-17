'use client' // Lo necesitamos para los efectos de fondo si el canvas tiene refs

import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { BackgroundEffects } from "@/components/BackgroundEffects"; // Asegúrate de exportarlo así
import { supabase } from "@/lib/supabase";
import { Project } from "@/types/project";
import { useEffect, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("order_index", { ascending: true });

      if (!error) setProjects(data || []);
    }
    fetchProjects();
  }, []);

  return (
    <main className="relative min-h-screen selection:bg-[#ff5e62]/30">
      {/* 2. Header Estilo Glassmorphism */}
      <header className="sticky top-0 z-50 border-b border-white/[0.05] bg-[#0a0a0a]/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <nav className="flex items-center gap-8">
            <a
              href="#proyectos"
              className="text-xs uppercase tracking-widest text-neutral-400 transition-colors hover:text-white"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="group relative text-xs uppercase tracking-widest text-neutral-400 transition-colors hover:text-white"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#ffbd4f] to-[#ff5e62] transition-all group-hover:w-full" />
            </a>
          </nav>
        </div>
      </header>

      {/* 3. Hero / Projects Section */}
      <section id="proyectos" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient">
            Proyectos
          </h1>
          <p className="max-w-2xl text-lg text-neutral-400 leading-relaxed font-light">
            Una colección de proyectos donde el diseño y el código se encuentran para crear 
            soluciones digitales <span className="text-neutral-200">excepcionales</span>.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm py-32 text-center">
            <div className="h-12 w-12 rounded-full border border-neutral-800 flex items-center justify-center mb-4">
              <span className="animate-pulse text-neutral-500">?</span>
            </div>
            <p className="text-neutral-400 font-medium">Buscando creaciones...</p>
            <p className="mt-1 text-sm text-neutral-600">Conectando con Supabase</p>
          </div>
        )}
      </section>

      {/* 4. Contact Section */}
      <section id="contacto" className="relative">
        <ContactSection />
      </section>

      {/* Footer minimalista */}
      <footer className="py-10 text-center border-t border-white/5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
          © {new Date().getFullYear()} — Facundo Picia
        </p>
      </footer>
    </main>
  );
}