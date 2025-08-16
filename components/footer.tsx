import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const services = [
    "إدارة الحملات الإعلانية",
    "تصميم الهوية البصرية",
    "تطوير المواقع الإلكترونية",
    "تحسين محركات البحث",
    "إدارة السوشيال ميديا",
    "التحليل والتقارير",
  ]

  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "خدماتنا", href: "#services" },
    { name: "أعمالنا", href: "#portfolio" },
    { name: "من نحن", href: "#about" },
    { name: "تواصل معنا", href: "#contact" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-background">ehabgm</h3>
                <p className="text-xs text-background/70">وكالة التسويق الرقمي</p>
              </div>
            </div>

            <p className="text-background/80 leading-relaxed">
              وكالة تسويق رقمي متخصصة في حلوان، القاهرة. نساعد الشركات على النمو والنجاح عبر الإنترنت بحلول تسويقية
              مبتكرة ومدروسة.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-background/80 hover:text-primary transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">حلوان، القاهرة، مصر</span>
              </div>

              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">01022679250</span>
              </div>

              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">info@ehabgm.online</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-background/5 rounded-lg">
              <h5 className="font-semibold text-background mb-2">ساعات العمل</h5>
              <p className="text-sm text-background/80">السبت - الخميس: 9 ص - 6 م</p>
              <p className="text-sm text-primary">دعم فني 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">© 2024 ehabgm. جميع الحقوق محفوظة.</p>

            <div className="flex space-x-6 space-x-reverse text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
