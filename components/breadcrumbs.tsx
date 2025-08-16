import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600 mb-6">
      <Link href="/" className="hover:text-primary transition-colors">
        الرئيسية
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 space-x-reverse">
          <ChevronLeft className="w-4 h-4 rotate-180" />
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
