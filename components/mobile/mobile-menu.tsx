'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Menu, ChevronDown, Phone, MessageCircle } from 'lucide-react'
import AuthButton from '../auth/auth-button'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const services = [
    {
      title: "البرمجة والتطوير",
      items: [
        { name: "تصميم المواقع الإلكترونية", href: "/website-design" },
        { name: "المتاجر الإلكترونية", href: "/ecommerce" },
        { name: "تطبيقات الجوال", href: "/mobile-apps" },
        { name: "أنظمة إدارة المحتوى", href: "/cms" },
        { name: "الحلول البرمجية المخصصة", href: "/custom-solutions" },
        { name: "مواقع الأخبار", href: "/news-website" },
        { name: "المواقع المبوبة", href: "/classified-ads" },
      ],
    },
    {
      title: "التسويق الإلكتروني",
      items: [
        { name: "إدارة السوشيال ميديا", href: "/social-media" },
        { name: "الإعلانات الممولة", href: "/paid-ads" },
        { name: "التسويق بالمحتوى", href: "/content-marketing" },
        { name: "التسويق بالبريد الإلكتروني", href: "/email-marketing" },
        { name: "استشارات التسويق", href: "/marketing-consulting" },
      ],
    },
    {
      title: "الهوية البصرية",
      items: [
        { name: "تصميم الشعارات", href: "/brand-identity" },
        { name: "الهوية البصرية الشاملة", href: "/brand-identity" },
      ],
    },
  ]

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="فتح القائمة"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-lg font-semibold text-gray-900">القائمة</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="إغلاق القائمة"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-4 space-y-2">
                    {/* Main Links */}
                    <Link
                      href="/"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      الرئيسية
                    </Link>
                    
                    <Link
                      href="/about"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      من نحن
                    </Link>

                    {/* Services Dropdown */}
                    <div>
                      <button
                        onClick={() => toggleDropdown('services')}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <span>خدماتنا</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === 'services' ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === 'services' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1">
                              {services.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="py-2">
                                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                                    {category.title}
                                  </h3>
                                  <div className="space-y-1">
                                    {category.items.map((item, itemIndex) => (
                                      <Link
                                        key={itemIndex}
                                        href={item.href}
                                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link
                      href="/blog"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      المدونة
                    </Link>
                    
                    <Link
                      href="/pricing"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      الأسعار
                    </Link>
                    
                    <Link
                      href="/contact"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      اتصل بنا
                    </Link>
                  </nav>
                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t space-y-3">
                  <div className="flex justify-center">
                    <AuthButton />
                  </div>
                  
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <a
                      href="https://wa.me/201022679250"
                      className="flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>واتساب</span>
                    </a>
                    
                    <a
                      href="tel:+201022679250"
                      className="flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="w-4 h-4" />
                      <span>اتصال</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}