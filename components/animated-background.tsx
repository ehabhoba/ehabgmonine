"use client"

import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      speed: number
      opacity: number
    }>
  >([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
    window.addEventListener("resize", generateParticles)

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: particle.x + Math.sin(particle.y * 0.01) * 0.5,
          y: particle.y < -10 ? window.innerHeight + 10 : particle.y - particle.speed,
        })),
      )
    }

    const interval = setInterval(animateParticles, 50)

    return () => {
      window.removeEventListener("resize", generateParticles)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="particles-bg">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `translateZ(0)`,
          }}
        />
      ))}

      {/* Digital Marketing Icons Floating */}
      <div className="absolute top-20 left-10 text-primary/10 text-6xl animate-bounce">📊</div>
      <div className="absolute top-40 right-20 text-secondary/10 text-5xl animate-pulse">💡</div>
      <div
        className="absolute bottom-40 left-20 text-primary/10 text-4xl animate-spin"
        style={{ animationDuration: "10s" }}
      >
        ⚙️
      </div>
      <div
        className="absolute bottom-20 right-10 text-secondary/10 text-5xl animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        🚀
      </div>
      <div
        className="absolute top-1/2 left-1/4 text-primary/10 text-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        📱
      </div>
      <div
        className="absolute top-1/3 right-1/3 text-secondary/10 text-4xl animate-bounce"
        style={{ animationDelay: "1.5s" }}
      >
        💻
      </div>
    </div>
  )
}
