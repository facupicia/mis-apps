'use client'

import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="mt-32 border-t border-neutral-200 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
            Let's work together
          </h2>
          <p className="mt-4 max-w-md text-neutral-500">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>

          {/* Contact Button */}
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors duration-300 hover:text-neutral-900"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors duration-300 hover:text-neutral-900"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors duration-300 hover:text-neutral-900"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Footer */}
          <p className="mt-16 text-sm text-neutral-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
