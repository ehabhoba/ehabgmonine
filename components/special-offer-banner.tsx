"use client"

import { useState, useEffect } from "react"
import { X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SpecialOfferBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Show banner after 3 seconds
    const showTimer = setTimeout(() => setIsVisible(true), 3000)

    // Set countdown to 7 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    const interval = setInterval(updateCountdown, 1000)
    updateCountdown()

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-20 left-4 right-4 z-40 max-w-md mx-auto">
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-lg shadow-2xl border border-red-400">
        <button onClick={() => setIsVisible(false)} className="absolute top-2 left-2 text-white/80 hover:text-white">
          <X className="w-4 h-4" />
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Gift className="w-5 h-5 ml-2" />
            <span className="font-bold text-sm">عرض خاص محدود!</span>
          </div>

          <h3 className="text-lg font-bold mb-2">خصم 30% على جميع الباقات</h3>

          <div className="flex justify-center space-x-2 space-x-reverse mb-3 text-xs">
            <div className="bg-white/20 px-2 py-1 rounded">
              <div className="font-bold">{timeLeft.days}</div>
              <div>يوم</div>
            </div>
            <div className="bg-white/20 px-2 py-1 rounded">
              <div className="font-bold">{timeLeft.hours}</div>
              <div>ساعة</div>
            </div>
            <div className="bg-white/20 px-2 py-1 rounded">
              <div className="font-bold">{timeLeft.minutes}</div>
              <div>دقيقة</div>
            </div>
            <div className="bg-white/20 px-2 py-1 rounded">
              <div className="font-bold">{timeLeft.seconds}</div>
              <div>ثانية</div>
            </div>
          </div>

          <Button asChild size="sm" className="bg-white text-red-500 hover:bg-gray-100 text-xs">
            <Link href="https://wa.me/201022679250?text=مرحباً، أريد الاستفادة من العرض الخاص">احصل على العرض الآن</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
