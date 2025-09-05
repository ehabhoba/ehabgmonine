import { Metadata } from 'next'
import AuthForm from '@/components/auth-form'

export const metadata: Metadata = {
  title: 'تسجيل الدخول - ehabgm',
  description: 'سجل دخولك للوصول إلى خدماتنا المتقدمة في التسويق الرقمي',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img
            className="mx-auto h-12 w-auto"
            src="https://i.postimg.cc/TYyK2Rtv/logo.png"
            alt="ehabgm logo"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            تسجيل الدخول
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            أو{' '}
            <a
              href="/signup"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              أنشئ حساب جديد
            </a>
          </p>
        </div>
        <AuthForm mode="signin" />
      </div>
    </div>
  )
}