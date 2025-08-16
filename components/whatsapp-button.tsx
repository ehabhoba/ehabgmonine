"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = "201022679250" // Egypt country code + phone number
    const message =
      "مرحباً ehabgm! 👋\n\nأريد الاستفسار عن خدمات التسويق الرقمي والتصميم.\n\nيرجى التواصل معي لمناقشة احتياجاتي."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-pulse hover:animate-none"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />

        {/* Enhanced Tooltip */}
        <div
          className={`absolute right-16 bg-foreground text-background px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            isHovered ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-2"
          }`}
        >
          <div className="font-semibold">تواصل معنا الآن!</div>
          <div className="text-xs opacity-90">استشارة مجانية</div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-2 bg-foreground rotate-45"></div>
        </div>
      </button>

      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
        !
      </div>
    </div>
  )
}
