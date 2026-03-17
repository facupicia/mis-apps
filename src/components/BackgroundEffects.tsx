'use client'

import { useEffect, useRef } from 'react'

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Colores del Sunset Glow para las partículas
    const colors = ['#ffffff', '#ffbd4f', '#ff5e62', '#a4508b']

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      pulse: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 1.2 + 0.3 // Partículas más finas para look Apple
        this.speedX = (Math.random() - 0.5) * 0.15
        this.speedY = (Math.random() - 0.5) * 0.15
        this.opacity = Math.random() * 0.4 + 0.1
        // 70% blancas, 30% con colores del atardecer
        this.color = Math.random() > 0.7 
          ? colors[Math.floor(Math.random() * colors.length)] 
          : '#ffffff'
        this.pulse = Math.random() * 0.02 // Para que algunas titilen
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Rebote infinito
        if (this.x > canvas!.width) this.x = 0
        if (this.x < 0) this.x = canvas!.width
        if (this.y > canvas!.height) this.y = 0
        if (this.y < 0) this.y = canvas!.height

        // Efecto de parpadeo sutil
        this.opacity += this.pulse
        if (this.opacity > 0.6 || this.opacity < 0.1) this.pulse *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()
        
        // Añadir un pequeño brillo a las partículas de color
        if (this.color !== '#ffffff') {
           ctx.shadowBlur = 5
           ctx.shadowColor = this.color
        } else {
           ctx.shadowBlur = 0
        }
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1 // Soporte para pantallas Retina
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      particles = []
      const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 18000)
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener('resize', init)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#0a0a0a]">
      {/* Mesh gradiente de fondo para dar profundidad */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#ff5e62_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#a4508b_0%,transparent_50%)]" />
      
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 opacity-60"
      />
      
      {/* Overlay para oscurecer y centrar la atención */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,10,10,0)_0%,#0a0a0a_100%)]" />
    </div>
  )
}
