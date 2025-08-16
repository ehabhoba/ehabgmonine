"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp, MessageCircle } from "lucide-react"

export default function InteractiveRating() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [hasRated, setHasRated] = useState(false)

  const handleRating = (value: number) => {
    setRating(value)
    setHasRated(true)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <ThumbsUp className="w-6 h-6 ml-2 text-yellow-500" />
                قيم تجربتك معنا
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!hasRated ? (
                <div className="space-y-4">
                  <p className="text-gray-600">كيف تقيم خدماتنا؟</p>
                  <div className="flex justify-center space-x-1 space-x-reverse">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= (hoveredRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-4xl">🎉</div>
                  <h3 className="text-xl font-bold text-green-600">شكراً لك!</h3>
                  <p className="text-gray-600">تقييمك: {rating} نجوم</p>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a href="https://wa.me/201022679250?text=أريد ترك تعليق على خدماتكم">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      اترك تعليقاً
                    </a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
