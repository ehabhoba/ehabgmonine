import { AlertCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UrgencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 animate-pulse" />
          <span className="font-medium">عرض محدود: خصم 50% على جميع الخدمات للعملاء الجدد!</span>
          <div className="flex items-center gap-1 text-yellow-300">
            <Clock className="w-4 h-4" />
            <span className="text-sm">ينتهي خلال 48 ساعة</span>
          </div>
        </div>

        <Button variant="secondary" size="sm" className="bg-white text-red-600 hover:bg-gray-100">
          احجز الآن
        </Button>
      </div>
    </div>
  )
}
