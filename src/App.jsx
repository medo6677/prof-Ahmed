import { Suspense } from 'react'
import BackgroundParticles from './components/BackgroundParticles'
import GlassCard from './components/GlassCard'
import { ThemeToggle, LangToggle } from './components/Toggles'

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>}>
      <main className="relative min-h-screen w-full overflow-hidden text-slate-100 selection:bg-indigo-500/30">
        <BackgroundParticles />
        
        {/* Controls Overlay */}
        <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
          <ThemeToggle />
          <LangToggle />
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 container mx-auto px-2 sm:px-4 py-20 min-h-screen flex items-center justify-center">
          <GlassCard />
        </div>
      </main>
    </Suspense>
  )
}

export default App
