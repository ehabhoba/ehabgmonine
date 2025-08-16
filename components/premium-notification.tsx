"use client"

import { useState, useEffect } from "react"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotificationProps {
  id: string
  type: "success" | "error" | "info" | "warning"
  title: string
  message: string
  duration?: number
  onClose: (id: string) => void
}

export default function PremiumNotification({ id, type, title, message, duration = 5000, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    setIsVisible(true)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(progressInterval)
          handleClose()
          return 0
        }
        return prev - 100 / (duration / 100)
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [duration])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose(id), 300)
  }

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case "info":
        return <Info className="w-5 h-5 text-primary" />
    }
  }

  const getStyles = () => {
    switch (type) {
      case "success":
        return "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
      case "error":
        return "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
      case "warning":
        return "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20"
      case "info":
        return "border-primary/20 bg-primary/5 dark:border-primary/30 dark:bg-primary/10"
    }
  }

  const getProgressColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500"
      case "error":
        return "bg-red-500"
      case "warning":
        return "bg-yellow-500"
      case "info":
        return "bg-primary"
    }
  }

  return (
    <div
      className={`relative glass-morphism border rounded-lg p-4 shadow-lg transform transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } ${getStyles()}`}
    >
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-b-lg overflow-hidden">
        <div
          className={`h-full transition-all duration-100 ease-linear ${getProgressColor()}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-start gap-3">
        {getIcon()}
        <div className="flex-1 min-w-0">
          <h4 className="font-serif font-semibold text-foreground text-sm">{title}</h4>
          <p className="text-muted-foreground text-sm mt-1">{message}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="h-6 w-6 p-0 hover:bg-muted/50 rounded-full flex-shrink-0"
        >
          <X className="w-3 h-3" />
        </Button>
      </div>
    </div>
  )
}

// Notification Manager Component
export function NotificationManager() {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])

  const addNotification = (notification: Omit<NotificationProps, "onClose">) => {
    const newNotification = {
      ...notification,
      onClose: removeNotification,
    }
    setNotifications((prev) => [...prev, newNotification])
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  // Global notification function
  useEffect(() => {
    ;(window as any).showNotification = addNotification
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <PremiumNotification key={notification.id} {...notification} />
      ))}
    </div>
  )
}
