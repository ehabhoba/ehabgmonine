"use client"
import Link from "next/link"
import Image from "next/image"

export default function SimpleHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="https://i.postimg.cc/TYyK2Rtv/logo.png"
              alt="ehabgm Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-blue-600">ehabgm</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              الرئيسية
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              من نحن
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              الأسعار
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              تواصل معنا
            </Link>
          </nav>

          <a
            href="https://wa.me/201022679250"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            واتساب
          </a>
        </div>
      </div>
    </header>
  )
}
