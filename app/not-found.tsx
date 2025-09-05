import Link from 'next/link'
import { ArrowLeft, Home, Search, Mail } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">الصفحة غير موجودة</h1>
          <p className="text-xl text-gray-600 mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5 mr-2" />
              الصفحة الرئيسية
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-8 py-4 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Search className="w-5 h-5 mr-2" />
              تصفح المدونة
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ربما تبحث عن:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/services"
                className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">خدماتنا</h3>
                <p className="text-sm text-gray-600">تصميم المواقع والتسويق الرقمي</p>
              </Link>
              
              <Link
                href="/about"
                className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">من نحن</h3>
                <p className="text-sm text-gray-600">تعرف على فريق ehabgm</p>
              </Link>
              
              <Link
                href="/contact"
                className="block p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">تواصل معنا</h3>
                <p className="text-sm text-gray-600">نحن هنا لمساعدتك</p>
              </Link>
              
              <Link
                href="/pricing"
                className="block p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">الأسعار</h3>
                <p className="text-sm text-gray-600">خطط وأسعار مناسبة</p>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">هل تحتاج مساعدة؟</h2>
            <p className="text-blue-100 mb-6">
              فريقنا جاهز لمساعدتك في العثور على ما تبحث عنه
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/201022679250"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                تواصل عبر الواتساب
              </a>
              <a
                href="mailto:info@ehabgm.online"
                className="inline-flex items-center bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                إرسال بريد إلكتروني
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}