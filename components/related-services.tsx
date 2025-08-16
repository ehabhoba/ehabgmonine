import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface RelatedService {
  title: string
  description: string
  href: string
  icon: string
}

interface RelatedServicesProps {
  services: RelatedService[]
  title?: string
}

export default function RelatedServices({ services, title = "خدمات ذات صلة" }: RelatedServicesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={service.href}>
                    تعرف على المزيد
                    <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
