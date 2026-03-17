'use client'

import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="relative mt-32 py-24 overflow-hidden">
      {/* Separador sutil con gradiente en lugar de línea sólida */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge pequeño al estilo Apple */}
          <span className="mb-4 inline-block rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#ffbd4f]">
            Disponible para nuevos retos
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-gradient">
            Trabajemos juntos
          </h2>
          
          <p className="mt-6 max-w-lg text-lg text-neutral-400 font-light leading-relaxed">
            ¿Tenés un proyecto en mente? Me encantaría escucharlo. <br />
            Mandame un mensaje y creemos algo <span className="text-neutral-200">increíble</span>.
          </p>

          {/* Contact Button mejorado */}
<a
  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
  className="group relative z-10 mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_50px_-10px_rgba(255,94,98,0.3)] active:scale-95"
>
  <Mail className="h-5 w-5 transition-colors duration-300 group-hover:text-[#ffbd4f]" />
  <span className="relative">
    Contactar ahora
    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[#ffbd4f] to-[#ff5e62] transition-all duration-500 group-hover:w-full"></span>
  </span>
</a>

          {/* Social Links con interacción Sunset */}
          <div className="mt-20 flex items-center gap-8">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 text-neutral-500 transition-all duration-300 hover:text-white"
                aria-label={social.label}
              >
                {/* Glow de fondo individual para cada icono en hover */}
                <div className="absolute inset-0 scale-0 rounded-full bg-[#ff5e62]/10 blur-xl transition-transform duration-500 group-hover:scale-150" />
                <social.icon className="relative h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decoración ambiental: Un resplandor muy suave al fondo de la sección */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-64 w-full -translate-x-1/2 bg-[#ff5e62]/5 blur-[120px]" />
    </section>
  )
}