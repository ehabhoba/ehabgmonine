import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, FileX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <FileX className="w-24 h-24 mx-auto mb-6 text-gray-400" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">المقال غير موجود</h1>
        <p className="text-gray-600 mb-8">
          المقال الذي تبحث عنه غير موجود أو تم حذفه. يرجى التحقق من الرابط أو العودة للصفحة الرئيسية.
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/blog">
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة للمدونة
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">
              الصفحة الرئيسية
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}