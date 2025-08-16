"use client"

import { useState, useEffect } from "react"
import { X, Bell, Gift, Star } from "lucide-react"

interface Notification {
  id: string
  type: "offer" | "update" | "success"
  title: string
  message: string
  action?: string
  actionUrl?: string
}

export default function SmartNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show welcome notification after 3 seconds
    const timer = setTimeout(() => {
      addNotification({
        id: "welcome",
        type: "offer",
        title: "مرحباً بك في ehabgm!",
        message: "احصل على استشارة مجانية لمشروعك الآن",
        action: "احصل على الاستشارة",
        actionUrl: "https://wa.me/201022679250?text=أريد استشارة مجانية لمشروعي",
      })
    }, 3000)

    // Show special offer after 30 seconds
    const offerTimer = setTimeout(() => {
      addNotification({
        id: "special-offer",
        type: "offer",
        title: "عرض خاص!",
        message: "خصم 25% على جميع باقات التسويق الرقمي",
        action: "احصل على الخصم",
        actionUrl: "https://wa.me/201022679250?text=أريد الاستفادة من العرض الخاص",
      })
    }, 30000)

    return () => {
      clearTimeout(timer)
      clearTimeout(offerTimer)
    }
  }, [])

  const addNotification = (notification: Notification) => {
    setNotifications((prev) => [...prev, notification])
    setIsVisible(true)

    // Auto remove after 10 seconds
    setTimeout(() => {
      removeNotification(notification.id)
    }, 10000)
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
    if (notifications.length <= 1) {
      setIsVisible(false)
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "offer":
        return <Gift className="w-5 h-5 text-green-500" />
      case "update":
        return <Bell className="w-5 h-5 text-blue-500" />
      case "success":
        return <Star className="w-5 h-5 text-yellow-500" />
      default:
        return <Bell className="w-5 h-5 text-gray-500" />
    }
  }

  if (!isVisible || notifications.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 animate-slide-in-right"
        >
          <div className="flex items-start gap-3">
            {getIcon(notification.type)}
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">{notification.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">{notification.message}</p>
              {notification.action && (
                <a
                  href={notification.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                >
                  {notification.action}
                </a>
              )}
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
