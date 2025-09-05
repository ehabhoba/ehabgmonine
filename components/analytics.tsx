'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
    dataLayer: any[]
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (GA_MEASUREMENT_ID && typeof window.gtag !== 'undefined') {
      const url = pathname + searchParams.toString()
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname, searchParams])

  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
              custom_map: {
                'custom_parameter_1': 'service_type',
                'custom_parameter_2': 'user_engagement'
              }
            });
          `,
        }}
      />
    </>
  )
}

export function FacebookPixel() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (FB_PIXEL_ID && typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView')
    }
  }, [pathname, searchParams])

  if (!FB_PIXEL_ID) {
    return null
  }

  return (
    <Script
      id="facebook-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `,
      }}
    />
  )
}

// Analytics events helper functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', eventName, parameters)
  }
}

// Common tracking events
export const trackContactFormSubmit = (formType: string) => {
  trackEvent('form_submit', 'contact', formType)
  trackFacebookEvent('Contact', { form_type: formType })
}

export const trackServiceView = (serviceName: string) => {
  trackEvent('page_view', 'service', serviceName)
  trackFacebookEvent('ViewContent', { content_name: serviceName, content_type: 'service' })
}

export const trackQuoteRequest = (serviceType: string, value?: number) => {
  trackEvent('quote_request', 'conversion', serviceType, value)
  trackFacebookEvent('InitiateCheckout', { content_name: serviceType, value: value })
}