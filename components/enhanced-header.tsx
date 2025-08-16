"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react"

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      title: "البرمجة والتطوير",
      items: [
        { name: "تصميم المواقع الإلكترونية", href: "/website-design" },
        { name: "المتاجر الإلكترونية", href: "/ecommerce" },
        { name: "تطبيقات الجوال", href: "/mobile-apps" },
        { name: "أنظمة إدارة المحتوى", href: "/cms" },
        { name: "الحلول البرمجية المخصصة", href: "/custom-solutions" },
      ],
    },
    {
      title: "التسويق الإلكتروني",
      items: [
        { name: "إدارة السوشيال ميديا", href: "/social-media" },
        { name: "تحسين محركات البحث", href: "/seo" },
        { name: "الإعلانات الممولة", href: "/paid-ads" },
        { name: "التسويق بالمحتوى", href: "/content-marketing" },
        { name: "التسويق عبر البريد الإلكتروني", href: "/email-marketing" },
      ],
    },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src="https://i.postimg.cc/TYyK2Rtv/logo.png"
                alt="ehabgm Logo"
                width={50}
                height={50}
                className="rounded-lg shadow-md"
              />
              <div className="text-right">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ehabgm
                </h1>
                <p className="text-xs text-gray-600">وكالة التسويق الرقمي</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              <Link href="/" className="nav-link">
                الرئيسية
              </Link>

              {services.map((service) => (
                <div
                  key={service.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(service.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="nav-link flex items-center space-x-1 rtl:space-x-reverse">
                    <span>{service.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === service.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200/50 overflow-hidden"
                      >
                        {service.items.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              href={item.href}
                              className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/pricing" className="nav-link">
                الأسعار
              </Link>
              <Link href="/about" className="nav-link">
                من نحن
              </Link>
              <Link href="/contact" className="nav-link">
                تواصل معنا
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
              <motion.a
                href="tel:+201234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>اتصل بنا</span>
              </motion.a>

              <motion.a
                href="https://wa.me/201234567890?text=مرحباً، أريد استشارة مجانية"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 rtl:space-x-reverse px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>استشارة مجانية</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
                  الرئيسية
                </Link>
                {services.map((service) => (
                  <div key={service.title} className="space-y-2">
                    <h3 className="font-semibold text-gray-900">{service.title}</h3>
                    {service.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-1 pr-4 text-gray-600 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link href="/pricing" className="block py-2 text-gray-700 hover:text-blue-600">
                  الأسعار
                </Link>
                <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">
                  من نحن
                </Link>
                <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">
                  تواصل معنا
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style jsx>{`
        .nav-link {
          @apply text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  )
}
