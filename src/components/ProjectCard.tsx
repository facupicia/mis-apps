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
      <article className="relative overflow-hidden rounded-2xl bg-neutral-50 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.hero_image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-neutral-900 tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 transition-all duration-300 group-hover:bg-neutral-900 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Tech Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech_tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 transition-colors duration-300 group-hover:bg-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  )
}
