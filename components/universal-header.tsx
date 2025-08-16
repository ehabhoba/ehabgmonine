"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  Home,
  Info,
  Mail,
  DollarSign,
  HelpCircle,
  Award,
  Users,
} from "lucide-react"

export default function UniversalHeader() {
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
        { name: "تصميم المواقع الإلكترونية", href: "/website-design", icon: "🌐" },
        { name: "المتاجر الإلكترونية", href: "/ecommerce", icon: "🛒" },
        { name: "تطبيقات الجوال", href: "/mobile-apps", icon: "📱" },
        { name: "أنظمة إدارة المحتوى", href: "/cms", icon: "⚙️" },
        { name: "الحلول البرمجية المخصصة", href: "/custom-solutions", icon: "💻" },
        { name: "مواقع الأخبار", href: "/news-website", icon: "📰" },
        { name: "المواقع المبوبة", href: "/classified-ads", icon: "📋" },
      ],
    },
    {
      title: "التسويق الإلكتروني",
      items: [
        { name: "إدارة السوشيال ميديا", href: "/social-media", icon: "📱" },
        { name: "تحسين محركات البحث", href: "/seo", icon: "🔍" },
        { name: "الإعلانات الممولة", href: "/paid-ads", icon: "📢" },
        { name: "التسويق بالمحتوى", href: "/content-marketing", icon: "✍️" },
        { name: "التسويق عبر البريد الإلكتروني", href: "/email-marketing", icon: "📧" },
      ],
    },
    {
      title: "التصميم والهوية البصرية",
      items: [
        { name: "تصميم الهوية البصرية", href: "/brand-identity", icon: "🎨" },
        { name: "التصميم الجرافيكي", href: "/graphic-design", icon: "🖼️" },
        { name: "تصميم الشعارات", href: "/logo-design", icon: "🏷️" },
      ],
    },
    {
      title: "حلول الأعمال",
      items: [
        { name: "الاستشارات التسويقية", href: "/marketing-consulting", icon: "💼" },
        { name: "إدارة المشاريع", href: "/project-management", icon: "📊" },
        { name: "التدريب والتطوير", href: "/training", icon: "🎓" },
      ],
    },
  ]

  const mainNavItems = [
    { name: "الرئيسية", href: "/", icon: Home },
    { name: "الأسعار", href: "/pricing", icon: DollarSign },
    { name: "من نحن", href: "/about", icon: Info },
    { name: "المدونة", href: "/blog", icon: Users },
    { name: "الإنجازات", href: "/achievements", icon: Award },
    { name: "الأسئلة الشائعة", href: "/faq", icon: HelpCircle },
    { name: "تواصل معنا", href: "/contact", icon: Mail },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50"
            : "bg-gradient-to-b from-white/90 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
            >
              <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="relative">
                  <Image
                    src="https://i.postimg.cc/TYyK2Rtv/logo.png"
                    alt="ehabgm Logo"
                    width={55}
                    height={55}
                    className="rounded-xl shadow-lg ring-2 ring-blue-500/20"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-right">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ehabgm
                  </h1>
                  <p className="text-xs text-gray-600 font-medium">وكالة التسويق الرقمي</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6 rtl:space-x-reverse">
              {mainNavItems.slice(0, 3).map((item) => {
                const IconComponent = item.icon
                return (
                  <Link key={item.name} href={item.href} className="nav-link group">
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}

              {services.map((service) => (
                <div
                  key={service.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(service.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="nav-link flex items-center space-x-1 rtl:space-x-reverse group">
                    <span>{service.title}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === service.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden"
                      >
                        <div className="p-2">
                          {service.items.map((item, index) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={item.href}
                                className="flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-xl transition-all duration-200 group"
                              >
                                <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {mainNavItems.slice(3).map((item) => {
                const IconComponent = item.icon
                return (
                  <Link key={item.name} href={item.href} className="nav-link group">
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 rtl:space-x-reverse">
              <motion.a
                href="tel:+201022679250"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>اتصل بنا</span>
              </motion.a>

              <motion.a
                href="https://wa.me/201022679250?text=مرحباً، أريد استشارة مجانية حول خدماتكم"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 rtl:space-x-reverse px-6 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                <MessageCircle className="w-4 h-4 relative z-10" />
                <span className="relative z-10">استشارة مجانية</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors relative"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
            >
              <div className="container mx-auto px-4 py-6 max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  {mainNavItems.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 rtl:space-x-reverse py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )
                  })}

                  {services.map((service) => (
                    <div key={service.title} className="space-y-2">
                      <h3 className="font-bold text-gray-900 px-3 py-2 bg-gray-50 rounded-lg">{service.title}</h3>
                      <div className="pr-4 space-y-1">
                        {service.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center space-x-3 rtl:space-x-reverse py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-sm">{item.icon}</span>
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <a
                      href="tel:+201022679250"
                      className="flex items-center justify-center space-x-2 rtl:space-x-reverse w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      <span>اتصل بنا</span>
                    </a>
                    <a
                      href="https://wa.me/201022679250?text=مرحباً، أريد استشارة مجانية"
                      className="flex items-center justify-center space-x-2 rtl:space-x-reverse w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>استشارة مجانية</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style jsx>{`
        .nav-link {
          @apply flex items-center space-x-2 rtl:space-x-reverse text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative px-3 py-2 rounded-lg hover:bg-blue-50;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 1px;
        }
        .nav-link:hover::after {
          width: 80%;
        }
      `}</style>
    </>
  )
}
