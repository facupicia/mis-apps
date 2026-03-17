'use client'

import { Project } from '@/types/project'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="relative overflow-hidden rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-white/5 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,94,98,0.3)] hover:-translate-y-2">
        
        {/* Container de Imagen con Overlay Sunset */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.hero_image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradiente sutil que aparece en hover para "teñir" la imagen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5e62]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Borde interno brillante en el hover */}
          <div className="absolute inset-0 border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-neutral-100 tracking-tight transition-colors duration-300 group-hover:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-400 line-clamp-2 leading-relaxed transition-colors duration-300 group-hover:text-neutral-300">
                {project.description}
              </p>
            </div>
            
            {/* Botón de flecha con los colores del Sunset Glow */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#ffbd4f] group-hover:to-[#ff5e62] group-hover:text-white group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          {/* Tech Tags con bordes inteligentes */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech_tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-white/5 bg-neutral-950/30 px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-neutral-500 transition-all duration-300 group-hover:border-[#ff5e62]/30 group-hover:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Línea decorativa inferior (Glow Line) */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffbd4f] via-[#ff5e62] to-[#a4508b] transition-all duration-700 group-hover:w-full" />
      </article>
    </a>
  )
}