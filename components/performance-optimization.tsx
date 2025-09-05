'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Lazy load images when they come into viewport
export function LazyImageObserver() {
  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const src = img.getAttribute('data-src')
            if (src) {
              img.src = src
              img.removeAttribute('data-src')
              img.classList.remove('lazy')
              imageObserver.unobserve(img)
            }
          }
        })
      },
      { rootMargin: '50px' }
    )

    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach((img) => imageObserver.observe(img))

    return () => imageObserver.disconnect()
  }, [])

  return null
}

// Preload critical resources
export function ResourcePreloader() {
  const pathname = usePathname()

  useEffect(() => {
    // Preload critical fonts
    const fontPreloads = [
      '/fonts/cairo-regular.woff2',
      '/fonts/cairo-bold.woff2',
    ]

    fontPreloads.forEach((font) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = font
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // Preload next likely pages based on current page
    const nextPages: Record<string, string[]> = {
      '/': ['/about', '/services', '/contact'],
      '/about': ['/services', '/contact', '/pricing'],
      '/services': ['/contact', '/pricing', '/'],
      '/contact': ['/services', '/about'],
    }

    const pagesToPreload = nextPages[pathname] || []
    pagesToPreload.forEach((page) => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = page
      document.head.appendChild(link)
    })
  }, [pathname])

  return null
}

// Service Worker registration for caching
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    }
  }, [])

  return null
}

// Critical CSS inlining for above-the-fold content
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS for above-the-fold content */
          .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          
          .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
          }
          
          .arabic-text {
            font-family: 'Cairo', -apple-system, BlinkMacSystemFont, sans-serif;
            direction: rtl;
            text-align: right;
          }
          
          /* Prevent layout shift */
          img {
            height: auto;
            max-width: 100%;
          }
          
          .lazy {
            background: #f0f0f0;
            min-height: 200px;
          }
        `,
      }}
    />
  )
}

// Web Vitals tracking
export function WebVitalsTracker() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          console.log('CLS:', metric)
          // Send to analytics
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(metric.value * 1000),
            })
          }
        })

        getFID((metric) => {
          console.log('FID:', metric)
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(metric.value),
            })
          }
        })

        getFCP((metric) => {
          console.log('FCP:', metric)
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FCP',
              value: Math.round(metric.value),
            })
          }
        })

        getLCP((metric) => {
          console.log('LCP:', metric)
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(metric.value),
            })
          }
        })

        getTTFB((metric) => {
          console.log('TTFB:', metric)
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'TTFB',
              value: Math.round(metric.value),
            })
          }
        })
      })
    }
  }, [])

  return null
}

// Combined performance optimization component
export default function PerformanceOptimization() {
  return (
    <>
      <CriticalCSS />
      <LazyImageObserver />
      <ResourcePreloader />
      <ServiceWorkerRegistration />
      <WebVitalsTracker />
    </>
  )
}