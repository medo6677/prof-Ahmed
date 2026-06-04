import { useEffect } from 'react'
import { motion } from 'framer-motion'

const BackgroundParticles = () => {
  useEffect(() => {
    // Generate random particles
    const container = document.getElementById('particles')
    if (!container) return

    for (let i = 0; i < 30; i++) {
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
      
      // Animation
      particle.style.animation = `particle-drift ${duration}s linear infinite ${delay}s`
      
      container.appendChild(particle)
    }

    return () => {
      if (container) container.innerHTML = ''
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 transition-colors duration-1000 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 light:from-blue-50 light:via-indigo-100 light:to-purple-50">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] orb-1 mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] orb-2 mix-blend-screen" />
      <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-indigo-500/15 blur-[100px] orb-3 mix-blend-screen" />
      
      {/* Dynamic Particles Container */}
      <div id="particles" className="absolute inset-0" />
      
      {/* Glass Overlay for depth */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] dark:bg-black/10" />
    </div>
  )
}

export default BackgroundParticles
