import { Moon, Sun, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className="p-3 rounded-full glass-icon text-white hover:bg-white/20 transition-colors shadow-lg"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-indigo-300" />}
    </motion.button>
  )
}

export const LangToggle = () => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(newLang)
    
    // Update body classes for global font changes
    if (newLang === 'ar') {
      document.body.classList.add('lang-ar')
      document.documentElement.dir = 'rtl'
    } else {
      document.body.classList.remove('lang-ar')
      document.documentElement.dir = 'ltr'
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLang}
      className="flex items-center gap-2 px-4 py-2 rounded-full glass-icon text-white hover:bg-white/20 transition-colors shadow-lg font-medium"
    >
      <Languages className="w-5 h-5 opacity-70" />
      <span>{t('switchToArabic')}</span>
    </motion.button>
  )
}
