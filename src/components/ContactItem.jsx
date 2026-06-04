import { Phone, Mail, MapPin, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ContactItem = ({ type, values, label }) => {
  const { i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  const getIcon = () => {
    switch (type) {
      case 'phone': return <Phone className="w-5 h-5 text-indigo-400" />
      case 'email': return <Mail className="w-5 h-5 text-emerald-400" />
      case 'address': return <MapPin className="w-5 h-5 text-rose-400" />
      case 'dob': return <Calendar className="w-5 h-5 text-sky-400" />
      default: return null
    }
  }

  const getIconBg = () => {
    switch (type) {
      case 'phone': return 'bg-indigo-500/10 border-indigo-500/20'
      case 'email': return 'bg-emerald-500/10 border-emerald-500/20'
      case 'address': return 'bg-rose-500/10 border-rose-500/20'
      case 'dob': return 'bg-sky-500/10 border-sky-500/20'
      default: return 'bg-white/10 border-white/20'
    }
  }

  return (
    <div className={`contact-item flex items-start p-2 sm:p-3 rounded-xl border border-transparent ${isArabic ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center glass-icon ${getIconBg()} shadow-lg`}>
        {getIcon()}
      </div>
      
      <div className={`flex-1 min-w-0 ${isArabic ? 'mr-4' : 'ml-4'}`}>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          {label}
        </p>
        
        <div className="flex flex-col gap-1">
          {Array.isArray(values) ? (
            values.map((val, idx) => {
              const isLink = type === 'phone' || type === 'email'
              const href = type === 'phone' ? `tel:${val}` : type === 'email' ? `mailto:${val}` : null
              
              return isLink ? (
                <a 
                  key={idx} 
                  href={href}
                  className="text-slate-200 hover:text-white transition-colors text-sm md:text-base font-medium dir-ltr break-all"
                >
                  {val}
                </a>
              ) : (
                <span key={idx} className="text-slate-200 text-sm md:text-base font-medium break-words">
                  {val}
                </span>
              )
            })
          ) : (
            <span className="text-slate-200 text-sm md:text-base font-medium break-words">
              {values}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactItem
