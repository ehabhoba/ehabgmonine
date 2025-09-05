'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-client'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Eye, Filter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface PortfolioItem {
  id: string
  title: string
  description: string
  image_url: string
  category: string
  client_name: string | null
  project_url: string | null
  featured: boolean
  created_at: string
}

const categories = [
  { id: 'all', name: 'جميع المشاريع' },
  { id: 'website', name: 'مواقع إلكترونية' },
  { id: 'ecommerce', name: 'متاجر إلكترونية' },
  { id: 'mobile', name: 'تطبيقات موبايل' },
  { id: 'branding', name: 'هوية بصرية' },
  { id: 'social-media', name: 'سوشيال ميديا' },
  { id: 'seo', name: 'تحسين محركات البحث' },
]

export default function PortfolioGrid() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const supabase = createClient()

  useEffect(() => {
    fetchPortfolioItems()
  }, [])

  useEffect(() => {
    filterItems()
  }, [selectedCategory, portfolioItems])

  const fetchPortfolioItems = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setPortfolioItems(data || [])
    } catch (error) {
      console.error('Error fetching portfolio items:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterItems = () => {
    let filtered = portfolioItems

    if (selectedCategory !== 'all') {
      filtered = portfolioItems.filter(item => item.category === selectedCategory)
    }

    setFilteredItems(filtered)
  }

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category?.name || categoryId
  }

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6)

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Category Filter Skeleton */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>

        {/* Portfolio Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-64 bg-gray-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (portfolioItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد مشاريع بعد</h3>
        <p className="text-gray-600">سنقوم بإضافة مشاريعنا قريباً</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
          >
            <Filter className="w-4 h-4 ml-2" />
            {category.name}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => (
          <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={item.image_url}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 text-gray-900 hover:bg-white"
                  >
                    <Eye className="w-4 h-4 ml-1" />
                    عرض
                  </Button>
                  {item.project_url && (
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="bg-white/90 text-gray-900 hover:bg-white"
                    >
                      <Link href={item.project_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 ml-1" />
                        الموقع
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              {item.featured && (
                <Badge className="absolute top-3 right-3 bg-yellow-500 text-white">
                  مميز
                </Badge>
              )}
            </div>
            
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {getCategoryName(item.category)}
                </Badge>
                {item.client_name && (
                  <span className="text-sm text-gray-500">
                    {item.client_name}
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More/Less Button */}
      {filteredItems.length > 6 && (
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

      {/* No Results */}
      {filteredItems.length === 0 && selectedCategory !== 'all' && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد مشاريع في هذه الفئة</h3>
          <p className="text-gray-600 mb-4">جرب فئة أخرى أو عرض جميع المشاريع</p>
          <Button onClick={() => setSelectedCategory('all')}>
            عرض جميع المشاريع
          </Button>
        </div>
      )}
    </div>
  )
}