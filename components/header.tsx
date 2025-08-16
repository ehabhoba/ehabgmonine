"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navItems = [
    { name: "الرئيسية", href: "/" },
    {
      name: "من نحن",
      href: "#about",
      dropdown: [
        { name: "قصتنا", href: "#our-story" },
        { name: "رؤيتنا ورسالتنا", href: "#vision-mission" },
        { name: "فريق العمل", href: "#team" },
        { name: "شركاؤنا", href: "#partners" },
      ],
    },
    {
      name: "البرمجة والتطوير",
      href: "#development",
      dropdown: [
        { name: "تصميم موقع إلكتروني", href: "/website-design" },
        { name: "تصميم متجر إلكتروني", href: "/ecommerce" },
        { name: "تصميم جريدة إلكترونية", href: "/news-website" },
        { name: "تصميم موقع مبوبة إعلانية", href: "/classified-ads" },
        { name: "تطوير تطبيقات الموبايل", href: "/mobile-apps" },
        { name: "أنظمة إدارة المحتوى", href: "/cms" },
        { name: "حلول برمجية مخصصة", href: "/custom-solutions" },
      ],
    },
    {
      name: "التسويق الإلكتروني",
      href: "#digital-marketing",
      dropdown: [
        { name: "إدارة حملات السوشيال ميديا", href: "/social-media" },
        { name: "تحسين محركات البحث (SEO)", href: "/seo" },
        { name: "الإعلانات الممولة", href: "/paid-ads" },
        { name: "التسويق عبر البريد الإلكتروني", href: "/email-marketing" },
        { name: "التسويق بالمحتوى", href: "/content-marketing" },
        { name: "إدارة فيسبوك وانستجرام", href: "/facebook-instagram" },
        { name: "إدارة تيك توك ويوتيوب", href: "/tiktok-youtube" },
        { name: "إدارة تويتر ولينكد إن", href: "/twitter-linkedin" },
      ],
    },
    {
      name: "تصميم الجرافيك",
      href: "#graphic-design",
      dropdown: [
        { name: "تصميم الهوية البصرية", href: "/brand-identity" },
        { name: "تصميم بروفايل الشركات", href: "/company-profile" },
        { name: "تصميمات سوشيال ميديا", href: "/social-designs" },
        { name: "تصميم المطبوعات والإعلانات", href: "/print-design" },
      ],
    },
    {
      name: "حلول الأعمال",
      href: "#business-solutions",
      dropdown: [
        { name: "الاستشارات التسويقية", href: "/marketing-consulting" },
        { name: "خطط النمو وزيادة المبيعات", href: "/growth-plans" },
        { name: "التحول الرقمي للشركات", href: "/digital-transformation" },
        { name: "الأتمتة وتحسين العمليات", href: "/automation" },
      ],
    },
    { name: "سابقة الأعمال", href: "#portfolio" },
    { name: "المدونة", href: "#blog" },
    { name: "الأسعار", href: "/pricing" },
    { name: "الأسئلة الشائعة", href: "#faq" },
    { name: "تواصل معنا", href: "#contact" },
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse">
            <div className="relative w-12 h-12">
              <Image
                src="https://i.postimg.cc/TYyK2Rtv/logo.png"
                alt="ehabgm Logo"
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center text-foreground hover:text-primary transition-colors duration-200 py-2"
                      onMouseEnter={() => setActiveDropdown(item.name)}
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
                    >
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="text-foreground hover:text-primary transition-colors duration-200">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="https://wa.me/201022679250?text=مرحباً، أريد حجز استشارة مجانية">
                <Phone className="w-4 h-4 ml-2" />
                احجز استشارتك المجانية
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border max-h-96 overflow-y-auto">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors duration-200 py-2"
                        onClick={() => handleDropdownToggle(item.name)}
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
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-foreground hover:text-primary transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 w-full mt-4">
                <Link href="https://wa.me/201022679250?text=مرحباً، أريد حجز استشارة مجانية">
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
