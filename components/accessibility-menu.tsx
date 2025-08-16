"use client"

import { useState } from "react"
import { Settings, Type, Eye, MousePointer } from "lucide-react"

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const adjustFontSize = (size: number) => {
    setFontSize(size)
    document.documentElement.style.fontSize = `${size}%`
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    document.documentElement.classList.toggle("high-contrast")
  }

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion)
    document.documentElement.classList.toggle("reduce-motion")
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 left-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        aria-label="قائمة إمكانية الوصول"
      >
        <Settings className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed top-36 left-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">إمكانية الوصول</h3>

          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Type className="w-4 h-4" />
                حجم الخط
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => adjustFontSize(90)}
                  className={`px-3 py-1 text-xs rounded ${fontSize === 90 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  صغير
                </button>
                <button
                  onClick={() => adjustFontSize(100)}
                  className={`px-3 py-1 text-xs rounded ${fontSize === 100 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  عادي
                </button>
                <button
                  onClick={() => adjustFontSize(120)}
                  className={`px-3 py-1 text-xs rounded ${fontSize === 120 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  كبير
                </button>
              </div>
            </div>

            <button
              onClick={toggleHighContrast}
              className={`w-full flex items-center gap-2 p-2 rounded transition-colors ${
                highContrast
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              <Eye className="w-4 h-4" />
              تباين عالي
            </button>

            <button
              onClick={toggleReducedMotion}
              className={`w-full flex items-center gap-2 p-2 rounded transition-colors ${
                reducedMotion
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              <MousePointer className="w-4 h-4" />
              تقليل الحركة
            </button>
          </div>
        </div>
      )}
    </>
  )
}
