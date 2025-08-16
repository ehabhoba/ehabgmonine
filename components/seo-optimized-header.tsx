"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SEOOptimizedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navItems = [
    { name: "الرئيسية", href: "/", keywords: "الصفحة الرئيسية" },
    {
      name: "من نحن",
      href: "/about",
      keywords: "عن الشركة",
      dropdown: [
        { name: "قصتنا", href: "/about#our-story", keywords: "تاريخ الشركة" },
        { name: "رؤيتنا ورسالتنا", href: "/about#vision-mission", keywords: "رؤية ورسالة" },
        { name: "فريق العمل", href: "/about#team", keywords: "الفريق" },
        { name: "إنجازاتنا", href: "/achievements", keywords: "الإنجازات والجوائز" },
      ],
    },
    {
      name: "البرمجة والتطوير",
      href: "/development",
      keywords: "تطوير المواقع والتطبيقات",
      dropdown: [
        { name: "تصميم موقع إلكتروني", href: "/website-design", keywords: "تصميم مواقع ويب" },
        { name: "تصميم متجر إلكتروني", href: "/ecommerce", keywords: "متاجر إلكترونية" },
        { name: "تصميم جريدة إلكترونية", href: "/news-website", keywords: "مواقع إخبارية" },
        { name: "تصميم موقع مبوبة إعلانية", href: "/classified-ads", keywords: "مواقع إعلانات مبوبة" },
        { name: "تطوير تطبيقات الموبايل", href: "/mobile-apps", keywords: "تطبيقات الجوال" },
        { name: "أنظمة إدارة المحتوى", href: "/cms", keywords: "CMS وإدارة المحتوى" },
        { name: "حلول برمجية مخصصة", href: "/custom-solutions", keywords: "برمجة مخصصة" },
      ],
    },
    {
      name: "التسويق الإلكتروني",
      href: "/digital-marketing",
      keywords: "التسويق الرقمي",
      dropdown: [
        { name: "إدارة حملات السوشيال ميديا", href: "/social-media", keywords: "إدارة وسائل التواصل الاجتماعي" },
        { name: "تحسين محركات البحث (SEO)", href: "/seo", keywords: "تحسين محركات البحث SEO" },
        { name: "الإعلانات الممولة", href: "/paid-ads", keywords: "إعلانات مدفوعة فيسبوك جوجل" },
        { name: "التسويق عبر البريد الإلكتروني", href: "/email-marketing", keywords: "التسويق بالإيميل" },
        { name: "التسويق بالمحتوى", href: "/content-marketing", keywords: "كتابة المحتوى التسويقي" },
        { name: "الاستشارات التسويقية", href: "/marketing-consulting", keywords: "استشارات تسويقية" },
      ],
    },
    {
      name: "تصميم الجرافيك",
      href: "/graphic-design",
      keywords: "التصميم الجرافيكي",
      dropdown: [
        { name: "تصميم الهوية البصرية", href: "/brand-identity", keywords: "تصميم هوية تجارية وشعارات" },
        { name: "تصميمات سوشيال ميديا", href: "/social-designs", keywords: "تصميمات منصات التواصل" },
        { name: "تصميم المطبوعات والإعلانات", href: "/print-design", keywords: "تصميم مطبوعات وإعلانات" },
      ],
    },
    { name: "سابقة الأعمال", href: "/portfolio", keywords: "معرض الأعمال والمشاريع" },
    { name: "المدونة", href: "/blog", keywords: "مقالات ونصائح تسويقية" },
    { name: "الأسعار", href: "/pricing", keywords: "أسعار الخدمات والباقات" },
    { name: "الأسئلة الشائعة", href: "/faq", keywords: "الأسئلة المتكررة" },
    { name: "تواصل معنا", href: "/contact", keywords: "التواصل والاستفسارات" },
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with SEO optimization */}
          <Link
            href="/"
            className="flex items-center space-x-3 space-x-reverse"
            title="ehabgm - وكالة التسويق الرقمي في حلوان، القاهرة"
          >
            <div className="relative w-12 h-12">
              <Image
                src="https://i.postimg.cc/TYyK2Rtv/logo.png"
                alt="ehabgm - وكالة التسويق الرقمي في حلوان، القاهرة"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">ehabgm</h1>
              <p className="text-xs text-muted-foreground">وكالة التسويق الرقمي</p>
            </div>
          </Link>

          {/* Desktop Navigation with SEO optimization */}
          <nav
            className="hidden lg:flex items-center space-x-6 space-x-reverse"
            role="navigation"
            aria-label="القائمة الرئيسية"
          >
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center text-foreground hover:text-primary transition-colors duration-200 py-2"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      title={item.keywords}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 mr-1" />
                    </button>
                    <div
                      className={`absolute top-full right-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-lg transition-all duration-200 ${
                        activeDropdown === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      role="menu"
                    >
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
                            title={subItem.keywords}
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200"
                    title={item.keywords}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button with SEO optimization */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link
                href="https://wa.me/201022679250?text=مرحباً، أريد حجز استشارة مجانية"
                title="احجز استشارة مجانية في التسويق الرقمي - ehabgm حلوان"
              >
                <Phone className="w-4 h-4 ml-2" />
                احجز استشارتك المجانية
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="فتح القائمة"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="lg:hidden mt-4 pb-4 border-t border-border max-h-96 overflow-y-auto"
            role="navigation"
            aria-label="القائمة المحمولة"
          >
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors duration-200 py-2"
                        onClick={() => handleDropdownToggle(item.name)}
                        title={item.keywords}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pr-4 space-y-2 mt-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1"
                              onClick={() => setIsMenuOpen(false)}
                              title={subItem.keywords}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-foreground hover:text-primary transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                      title={item.keywords}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 w-full mt-4">
                <Link
                  href="https://wa.me/201022679250?text=مرحباً، أريد حجز استشارة مجانية"
                  title="احجز استشارة مجانية في التسويق الرقمي"
                >
                  <Phone className="w-4 h-4 ml-2" />
                  احجز استشارتك المجانية
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
