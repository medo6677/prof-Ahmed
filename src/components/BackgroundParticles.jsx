import { useEffect } from 'react'
import { motion } from 'framer-motion'

const BackgroundParticles = () => {
  useEffect(() => {
    // Generate random particles
    const container = document.getElementById('particles')
    if (!container) return

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div')
      
      // Random properties
      const size = Math.random() * 8 + 2
      const left = Math.random() * 100
      const top = Math.random() * 100
      const opacity = Math.random() * 0.5 + 0.1
      const duration = Math.random() * 10 + 10
      const delay = Math.random() * 5
      
      // Styling
      particle.style.position = 'absolute'
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${left}%`
      particle.style.top = `${top}%`
      particle.style.background = 'rgba(255, 255, 255, 0.8)'
      particle.style.borderRadius = '50%'
      particle.style.opacity = opacity
      particle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)'
      
      // Animation & Performance
      particle.style.animation = `particle-drift ${duration}s linear infinite ${delay}s`
      particle.style.willChange = 'transform, opacity'
      
      container.appendChild(particle)
    }

    return () => {
      if (container) container.innerHTML = ''
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 transition-colors duration-1000 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 light:from-blue-50 light:via-indigo-100 light:to-purple-50">
      {/* Decorative Orbs - Optimized using pure radial gradients without CSS filters */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.2)_0%,rgba(0,0,0,0)_70%)] orb-1" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.2)_0%,rgba(0,0,0,0)_70%)] orb-2" />
      <div className="absolute top-[20%] right-[10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,rgba(0,0,0,0)_70%)] orb-3" />
      
      {/* Dynamic Particles Container (Hidden on mobile for performance) */}
      <div id="particles" className="absolute inset-0 hidden md:block" />
      
      {/* Glass Overlay for depth */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/10" />
    </div>
  )
}

export default BackgroundParticles
