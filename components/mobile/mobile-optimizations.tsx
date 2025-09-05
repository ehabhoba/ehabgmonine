'use client'

import { useEffect } from 'react'

export default function MobileOptimizations() {
  useEffect(() => {
    // تحسين اللمس للهواتف المحمولة
    const addTouchOptimizations = () => {
      // إضافة touch-action للعناصر التفاعلية
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, select')
      interactiveElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.touchAction = 'manipulation'
        }
      })

      // تحسين التمرير السلس
      document.documentElement.style.scrollBehavior = 'smooth'
    }

    // تحسين عرض الموقع على الهواتف
    const optimizeViewport = () => {
      // منع التكبير غير المرغوب فيه
      const viewport = document.querySelector('meta[name="viewport"]')
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes')
      }
    }

    // تحسين الأداء على الهواتف
    const optimizeMobilePerformance = () => {
      // تقليل عدد العناصر المتحركة على الهواتف
      if (window.innerWidth < 768) {
        // تعطيل بعض الرسوم المتحركة على الهواتف
        const animatedElements = document.querySelectorAll('[data-animate]')
        animatedElements.forEach(element => {
          if (element instanceof HTMLElement) {
            element.style.animation = 'none'
          }
        })
      }

      // تحسين الصور للهواتف
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (window.innerWidth < 768) {
          img.loading = 'lazy'
          img.decoding = 'async'
        }
      })
    }

    // تحسين النماذج للهواتف
    const optimizeForms = () => {
      const inputs = document.querySelectorAll('input, textarea')
      inputs.forEach(input => {
        if (input instanceof HTMLInputElement) {
          // تحسين لوحة المفاتيح
          if (input.type === 'email') {
            input.setAttribute('inputmode', 'email')
          } else if (input.type === 'tel') {
            input.setAttribute('inputmode', 'tel')
          } else if (input.type === 'number') {
            input.setAttribute('inputmode', 'numeric')
          }

          // تحسين التركيز
          input.addEventListener('focus', () => {
            input.scrollIntoView({ behavior: 'smooth', block: 'center' })
          })
        }
      })
    }

    // تحسين الروابط للهواتف
    const optimizeLinks = () => {
      const links = document.querySelectorAll('a')
      links.forEach(link => {
        // زيادة مساحة اللمس
        if (link.offsetHeight < 44) {
          link.style.minHeight = '44px'
          link.style.display = 'flex'
          link.style.alignItems = 'center'
        }
      })
    }

    // تشغيل التحسينات
    addTouchOptimizations()
    optimizeViewport()
    optimizeMobilePerformance()
    optimizeForms()
    optimizeLinks()

    // إعادة تشغيل التحسينات عند تغيير حجم الشاشة
    const handleResize = () => {
      optimizeMobilePerformance()
      optimizeLinks()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return null
}

// مكون لتحسين التمرير على الهواتف
export function MobileScrollOptimizer() {
  useEffect(() => {
    let startY = 0
    let isScrolling = false

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolling) {
        isScrolling = true
        requestAnimationFrame(() => {
          // تحسين التمرير
          isScrolling = false
        })
      }
    }

    // تحسين التمرير السلس
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 50) {
        e.preventDefault()
        window.scrollBy({
          top: e.deltaY,
          behavior: 'smooth'
        })
      }
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return null
}

// مكون لتحسين الأداء على الهواتف
export function MobilePerformanceOptimizer() {
  useEffect(() => {
    // تقليل استهلاك البطارية
    const reduceBatteryUsage = () => {
      // تعطيل الرسوم المتحركة عند انخفاض البطارية
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          if (battery.level < 0.2) {
            document.body.classList.add('reduce-motion')
          }
        })
      }

      // تقليل عدد الأحداث
      let eventCount = 0
      const throttledHandler = (fn: Function) => {
        return (...args: any[]) => {
          if (eventCount % 2 === 0) {
            fn(...args)
          }
          eventCount++
        }
      }

      // تطبيق التخفيض على الأحداث
      const originalAddEventListener = EventTarget.prototype.addEventListener
      EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'scroll' || type === 'resize') {
          const throttledListener = throttledHandler(listener as Function)
          return originalAddEventListener.call(this, type, throttledListener, options)
        }
        return originalAddEventListener.call(this, type, listener, options)
      }
    }

    // تحسين الذاكرة
    const optimizeMemory = () => {
      // تنظيف الذاكرة كل دقيقة على الهواتف
      setInterval(() => {
        if ('memory' in performance) {
          const memory = (performance as any).memory
          if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.7) {
            // إجبار garbage collection
            if ('gc' in window) {
              (window as any).gc()
            }
          }
        }
      }, 60000)
    }

    reduceBatteryUsage()
    optimizeMemory()
  }, [])

  return null
}