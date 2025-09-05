'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Send, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { createClient } from '@/lib/supabase-client'
import { trackContactFormSubmit } from '@/components/analytics'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
  service_category: string
  budget_range: string
  preferred_contact_method: string
}

const serviceCategories = [
  { value: 'website_design', label: 'تصميم المواقع الإلكترونية' },
  { value: 'ecommerce', label: 'المتاجر الإلكترونية' },
  { value: 'mobile_apps', label: 'تطبيقات الجوال' },
  { value: 'social_media', label: 'إدارة السوشيال ميديا' },
  { value: 'seo', label: 'تحسين محركات البحث SEO' },
  { value: 'paid_ads', label: 'الإعلانات الممولة' },
  { value: 'email_marketing', label: 'التسويق بالبريد الإلكتروني' },
  { value: 'content_marketing', label: 'التسويق بالمحتوى' },
  { value: 'brand_identity', label: 'الهوية البصرية' },
  { value: 'marketing_consulting', label: 'استشارات التسويق' },
  { value: 'custom_solutions', label: 'حلول مخصصة' },
]

const budgetRanges = [
  { value: '1000-5000', label: '1,000 - 5,000 جنيه' },
  { value: '5000-10000', label: '5,000 - 10,000 جنيه' },
  { value: '10000-25000', label: '10,000 - 25,000 جنيه' },
  { value: '25000-50000', label: '25,000 - 50,000 جنيه' },
  { value: '50000+', label: 'أكثر من 50,000 جنيه' },
]

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service_category: '',
    budget_range: '',
    preferred_contact_method: 'email',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  
  const supabase = createClient()

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const { error } = await supabase
        .from('contact_forms')
        .insert([formData])

      if (error) throw error

      // Track successful form submission
      trackContactFormSubmit(formData.service_category || 'general')

      setMessage({
        type: 'success',
        text: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service_category: '',
        budget_range: '',
        preferred_contact_method: 'email',
      })
    } catch (error: any) {
      setMessage({
        type: 'error',
        text: error.message || 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              تواصل معنا
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تحقيق أهدافك التسويقية. تواصل معنا اليوم واحصل على استشارة مجانية
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span>اتصل بنا</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">01022679250</p>
                    <p className="text-sm text-gray-500 mt-1">متاح من 9 صباحاً إلى 10 مساءً</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span>البريد الإلكتروني</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">info@ehabgm.online</p>
                    <p className="text-sm text-gray-500 mt-1">نرد خلال 24 ساعة</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>الموقع</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">حلوان، القاهرة، مصر</p>
                    <p className="text-sm text-gray-500 mt-1">نخدم جميع أنحاء الوطن العربي</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>ساعات العمل</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>السبت - الخميس</span>
                        <span>9:00 ص - 10:00 م</span>
                      </div>
                      <div className="flex justify-between">
                        <span>الجمعة</span>
                        <span>2:00 م - 10:00 م</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>أرسل لنا رسالة</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">الاسم الكامل *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">البريد الإلكتروني *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="01234567890"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">اسم الشركة</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="اسم شركتك (اختياري)"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service_category">نوع الخدمة المطلوبة</Label>
                        <Select value={formData.service_category} onValueChange={(value) => handleInputChange('service_category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر نوع الخدمة" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceCategories.map((category) => (
                              <SelectItem key={category.value} value={category.value}>
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget_range">الميزانية المتوقعة</Label>
                        <Select value={formData.budget_range} onValueChange={(value) => handleInputChange('budget_range', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر نطاق الميزانية" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range.value} value={range.value}>
                                {range.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="preferred_contact_method">طريقة التواصل المفضلة</Label>
                      <Select value={formData.preferred_contact_method} onValueChange={(value) => handleInputChange('preferred_contact_method', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">البريد الإلكتروني</SelectItem>
                          <SelectItem value="phone">الهاتف</SelectItem>
                          <SelectItem value="whatsapp">واتساب</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">تفاصيل المشروع *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="اشرح لنا تفاصيل مشروعك وما تحتاج إليه..."
                      />
                    </div>

                    {message && (
                      <Alert className={message.type === 'error' ? 'border-red-500 bg-red-50' : 'border-green-500 bg-green-50'}>
                        <AlertDescription className={message.type === 'error' ? 'text-red-700' : 'text-green-700'}>
                          {message.text}
                        </AlertDescription>
                      </Alert>
                    )}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full md:w-auto flex items-center space-x-2 rtl:space-x-reverse"
                    >
                      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                      <Send className="h-4 w-4" />
                      <span>{loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}