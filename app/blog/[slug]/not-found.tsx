import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">المقال غير موجود</h2>
          <p className="text-gray-600 mb-8">
            عذراً، المقال الذي تبحث عنه غير موجود أو تم حذفه.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            العودة إلى المدونة
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              <Home className="w-4 h-4 mr-2" />
              الصفحة الرئيسية
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              <Search className="w-4 h-4 mr-2" />
              تصفح المقالات
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">مقالات مقترحة</h3>
          <div className="space-y-3">
            {[
              "أفضل استراتيجيات التسويق الرقمي في 2024",
              "كيفية تحسين موقعك لمحركات البحث",
              "نصائح لإدارة حسابات السوشيال ميديا",
              "دليل شامل للإعلانات الممولة"
            ].map((title, index) => (
              <Link
                key={index}
                href="/blog"
                className="block text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200 text-right"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}