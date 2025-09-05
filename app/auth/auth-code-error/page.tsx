import Link from 'next/link'

export default function AuthCodeError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            خطأ في المصادقة
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            عذراً، حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.
          </p>
        </div>
        <div>
          <Link
            href="/login"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            العودة لتسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  )
}