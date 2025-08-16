"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X, Sparkles, Gift, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EnhancedModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  type?: "default" | "offer" | "success" | "warning"
}

export default function EnhancedModal({ isOpen, onClose, title, children, type = "default" }: EnhancedModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  if (!isOpen) return null

  const getModalIcon = () => {
    switch (type) {
      case "offer":
        return <Gift className="w-6 h-6 text-secondary" />
      case "success":
        return <Sparkles className="w-6 h-6 text-primary" />
      case "warning":
        return <Clock className="w-6 h-6 text-yellow-500" />
      default:
        return null
    }
  }

  const getModalStyles = () => {
    switch (type) {
      case "offer":
        return "border-secondary/20 shadow-secondary/10"
      case "success":
        return "border-primary/20 shadow-primary/10"
      case "warning":
        return "border-yellow-500/20 shadow-yellow-500/10"
      default:
        return "border-border/20"
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-md modal-content rounded-xl p-6 transform transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        } ${getModalStyles()}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {getModalIcon()}
            <h2 className="text-xl font-serif font-bold text-foreground">{title}</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={handleClose} className="h-8 w-8 p-0 hover:bg-muted rounded-full">
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="text-muted-foreground">{children}</div>

        {/* Decorative elements for offer type */}
        {type === "offer" && (
          <div className="absolute -top-2 -right-2">
            <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium animate-pulse">
              عرض خاص
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
