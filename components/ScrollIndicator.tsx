import React from 'react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'

const ScrollIndicator = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
      <motion.div
        className={`absolute bottom-8 right-8 flex items-center gap-3 ${
          isDark ? "text-white/60" : "text-gray-500"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-sm font-lato">Scroll to explore</span>
        <motion.div
          className={`w-10 h-10 rounded-full border flex items-center justify-center ${
            isDark ? "border-white/30" : "border-gray-400"
          }`}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
  )
}

export default ScrollIndicator