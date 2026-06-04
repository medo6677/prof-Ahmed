import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const ProfileSection = () => {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  return (
    <div className="flex flex-col items-center text-center">
      {/* Image Container with Glass and Glow effects */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="relative w-48 h-48 md:w-56 md:h-56 mb-8 group"
      >
        {/* Outer animated glow ring */}
        <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 profile-ring opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        
        {/* Middle glass border */}
        <div className="absolute inset-0 rounded-full glass-strong z-10" />
        
        {/* Inner Image Container */}
        <div className="absolute inset-[4px] rounded-full overflow-hidden bg-slate-800 z-20">
          <img
            src="/profile.jpg"
            alt={t('name')}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = "https://placehold.co/400x400/1e293b/ffffff?text=Profile"
            }}
          />
          
          {/* Inner glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" />
        </div>
      </motion.div>

      {/* Name and Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-tight">
          {t('name')}
        </h1>
        
        <p className="text-slate-300 text-sm md:text-base max-w-sm mx-auto leading-relaxed opacity-90">
          {t('title')}
        </p>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-8 opacity-60">
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-indigo-500" />
          <div className="w-2 h-2 rounded-full bg-purple-500 glow-purple" />
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-indigo-500" />
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileSection
