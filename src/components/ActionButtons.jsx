import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const ActionButtons = () => {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  // WhatsApp Icon SVG
  const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )

  return (
    <div className={`mt-8 flex flex-col sm:flex-row gap-4 ${isArabic ? 'sm:justify-end' : 'sm:justify-start'}`}>
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="/cv.pdf"
        download
        className={`
          group relative flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 md:px-8 md:py-4 rounded-full overflow-hidden
          bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500
          text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg
          transition-all duration-300
          hover:shadow-indigo-500/50 hover:shadow-2xl
          ${isArabic ? 'flex-row-reverse' : 'flex-row'}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 shimmer-line opacity-30" />
        <div className="relative flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full group-hover:animate-bounce">
            <Download className="w-5 h-5" />
          </div>
          <span>{t('downloadCV')}</span>
        </div>
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="https://wa.me/201061837260"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group relative flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 md:px-8 md:py-4 rounded-full overflow-hidden
          bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500
          text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg
          transition-all duration-300
          hover:shadow-emerald-500/50 hover:shadow-2xl
          ${isArabic ? 'flex-row-reverse' : 'flex-row'}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 shimmer-line opacity-30" />
        <div className="relative flex items-center gap-3">
          <div className="bg-white/20 p-1.5 rounded-full group-hover:animate-bounce">
            <WhatsappIcon />
          </div>
          <span>{t('whatsappChat')}</span>
        </div>
      </motion.a>
    </div>
  )
}

export default ActionButtons
