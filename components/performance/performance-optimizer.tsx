'use client'

import { useEffect, useState } from 'react'

export default function PerformanceOptimizer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // تحسين الأداء عند تحميل الصفحة
    const optimizePerformance = () => {
      // تحسين الصور
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy'
        }
      })

      // تحسين الروابط
      const links = document.querySelectorAll('a[href^="http"]')
      links.forEach(link => {
        if (link instanceof HTMLAnchorElement) {
          if (!link.rel.includes('noopener')) {
            link.rel += ' noopener noreferrer'
          }
        }
      })

      // تحسين النماذج
      const forms = document.querySelectorAll('form')
      forms.forEach(form => {
        if (!form.noValidate) {
          form.noValidate = true
        }
      })
    }

    // تشغيل التحسينات بعد تحميل الصفحة
    if (document.readyState === 'complete') {
      optimizePerformance()
    } else {
      window.addEventListener('load', optimizePerformance)
    }

    // مراقبة الأداء
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart)
          }
        }
      })
      
      observer.observe({ entryTypes: ['navigation', 'paint'] })
    }

    // تحسين الذاكرة
    const cleanup = () => {
      // تنظيف Event Listeners غير المستخدمة
      window.removeEventListener('load', optimizePerformance)
    }

    return cleanup
  }, [])

  // تحسين التمرير
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // إضافة تأثيرات التمرير هنا
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // تحسين الشبكة
  useEffect(() => {
    // Preload الصور المهمة
    const preloadImages = [
      'https://i.postimg.cc/TYyK2Rtv/logo.png'
    ]

    preloadImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })

    // Preconnect للمواقع الخارجية
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://i.postimg.cc'
    ]

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = domain
      document.head.appendChild(link)
    })
  }, [])

  return null
}

// مكون لتحسين التحميل التدريجي
export function ProgressiveLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setLoading(false)
          clearInterval(timer)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        <div className="w-64 bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-600">جاري التحميل...</p>
      </div>
    </div>
  )
}

// مكون لتحسين الذاكرة
export function MemoryOptimizer() {
  useEffect(() => {
    // تنظيف الذاكرة كل 5 دقائق
    const cleanup = setInterval(() => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
          // إجبار garbage collection إذا كان متاحاً
          if ('gc' in window) {
            (window as any).gc()
          }
        }
      }
    }, 300000) // 5 دقائق

    return () => clearInterval(cleanup)
  }, [])

  return null
}