import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export default function AuthCodeError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            خطأ في تسجيل الدخول
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Button asChild className="w-full">
            <Link href="/">
              العودة للصفحة الرئيسية
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact">
              تواصل معنا
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}