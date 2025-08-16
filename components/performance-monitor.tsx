"use client"

import { useEffect, useState } from "react"
import { Zap } from "lucide-react"

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    fps: 0,
    memoryUsage: 0,
  })

  useEffect(() => {
    // Monitor page load time
    const loadTime = performance.now()
    setMetrics((prev) => ({ ...prev, loadTime: Math.round(loadTime) }))

    // Monitor FPS
    let frames = 0
    let lastTime = performance.now()

    const countFPS = () => {
      frames++
      const currentTime = performance.now()
      if (currentTime >= lastTime + 1000) {
        setMetrics((prev) => ({ ...prev, fps: Math.round((frames * 1000) / (currentTime - lastTime)) }))
        frames = 0
        lastTime = currentTime
      }
      requestAnimationFrame(countFPS)
    }
    requestAnimationFrame(countFPS)

    // Monitor memory usage (if available)
    if ("memory" in performance) {
      const updateMemory = () => {
        const memory = (performance as any).memory
        setMetrics((prev) => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024),
        }))
      }
      updateMemory()
      const interval = setInterval(updateMemory, 5000)
      return () => clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-2 rounded-lg text-xs font-mono opacity-20 hover:opacity-100 transition-opacity">
      <div className="flex items-center gap-2 mb-1">
        <Zap className="w-3 h-3" />
        <span>الأداء</span>
      </div>
      <div>تحميل: {metrics.loadTime}ms</div>
      <div>FPS: {metrics.fps}</div>
      {metrics.memoryUsage > 0 && <div>ذاكرة: {metrics.memoryUsage}MB</div>}
    </div>
  )
}
