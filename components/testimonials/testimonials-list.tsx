'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-client'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface Testimonial {
  id: string
  client_name: string
  client_company: string | null
  client_image: string | null
  testimonial: string
  rating: number
  featured: boolean
  created_at: string
}

export default function TestimonialsList() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)

  const supabase = createClient()

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('featured', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setTestimonials(data || [])
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    } finally {
      setLoading(false)
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="mr-3">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-3 bg-gray-200 rounded w-4/6"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد شهادات بعد</h3>
        <p className="text-gray-600">سنقوم بإضافة شهادات العملاء قريباً</p>
      </div>
    )
  }

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6)

  return (
    <div className="space-y-8">
      {/* Featured Testimonial Carousel */}
      {testimonials.length > 0 && (
        <div className="relative">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-blue-200 ml-2" />
                    <div className="flex">
                      {renderStars(testimonials[currentIndex]?.rating || 5)}
                    </div>
                  </div>
                  <blockquote className="text-lg leading-relaxed mb-6">
                    "{testimonials[currentIndex]?.testimonial}"
                  </blockquote>
                  <div className="flex items-center">
                    {testimonials[currentIndex]?.client_image && (
                      <Image
                        src={testimonials[currentIndex].client_image}
                        alt={testimonials[currentIndex].client_name}
                        width={48}
                        height={48}
                        className="rounded-full ml-4"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonials[currentIndex]?.client_name}
                      </h4>
                      {testimonials[currentIndex]?.client_company && (
                        <p className="text-blue-200">
                          {testimonials[currentIndex].client_company}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {testimonials.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="flex space-x-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      )}

      {/* All Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {testimonial.client_image ? (
                  <Image
                    src={testimonial.client_image}
                    alt={testimonial.client_name}
                    width={48}
                    height={48}
                    className="rounded-full ml-4"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg ml-4">
                    {testimonial.client_name.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.client_name}
                  </h4>
                  {testimonial.client_company && (
                    <p className="text-sm text-gray-600">
                      {testimonial.client_company}
                    </p>
                  )}
                </div>
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.testimonial}"
              </blockquote>

              {testimonial.featured && (
                <div className="mt-4">
                  <Badge className="bg-yellow-100 text-yellow-800">
                    شهادة مميزة
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More/Less Button */}
      {testimonials.length > 6 && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="px-8"
          >
            {showAll ? 'عرض أقل' : 'عرض المزيد'}
          </Button>
        </div>
      )}
    </div>
  )
}