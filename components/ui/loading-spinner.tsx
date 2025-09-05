'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'white'
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    primary: 'border-blue-600',
    secondary: 'border-gray-600',
    white: 'border-white'
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      <div className="w-full h-full border-2 border-transparent border-t-current rounded-full"></div>
    </motion.div>
  )
}

// مكون للتحميل مع النص
interface LoadingWithTextProps {
  text?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'white'
  className?: string
}

export function LoadingWithText({ 
  text = 'جاري التحميل...', 
  size = 'md',
  color = 'primary',
  className = ''
}: LoadingWithTextProps) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 rtl:space-y-reverse ${className}`}>
      <LoadingSpinner size={size} color={color} />
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  )
}

// مكون للتحميل مع التقدم
interface LoadingProgressProps {
  progress: number
  text?: string
  className?: string
}

export function LoadingProgress({ 
  progress, 
  text = 'جاري التحميل...', 
  className = '' 
}: LoadingProgressProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{text}</span>
        <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-blue-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
}