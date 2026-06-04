import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ProfileSection from './ProfileSection'
import ContactItem from './ContactItem'
import ActionButtons from './ActionButtons'

const GlassCard = () => {
  const { t } = useTranslation()

  const contactInfo = [
    { type: 'phone', values: ['+97333766285', '+97338976204', '+201061837260'], label: t('phone') },
    { type: 'email', values: ['ahmed.abdelfatah@fsed.bu.edu.eg', 'ahmedabdelfattah2050@gmail.com', 'ahmedabdelfattah2010@yahoo.com'], label: t('email') },
    { type: 'address', values: t('addressValue'), label: t('address') },
    { type: 'dob', values: t('dobValue'), label: t('dob') },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden relative z-10"
    >
      {/* Subtle top highlight for glass effect */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      <div className="flex flex-col lg:flex-row">
        {/* Left Side (Profile) */}
        <div className="lg:w-2/5 p-6 sm:p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden flex items-center justify-center bg-black/10">
          <ProfileSection />
        </div>

        {/* Right Side (Details) */}
        <div className="lg:w-3/5 p-3 sm:p-8 md:p-12 relative bg-white/5">
          
          <div className="relative z-10 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <ContactItem {...info} />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="pt-4 mt-8 border-t border-white/10"
            >
              <ActionButtons />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default GlassCard
