"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, Bot, User, Sparkles, X } from "lucide-react"

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "مرحباً! أنا مساعدك الذكي في ehabgm. كيف يمكنني مساعدتك اليوم؟",
      time: new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    "أريد موقع إلكتروني",
    "خدمات السوشيال ميديا",
    "الأسعار والباقات",
    "استشارة مجانية",
    "أمثلة على أعمالكم",
  ]

  const getBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase()

    if (message.includes("موقع") || message.includes("تصميم")) {
      return "ممتاز! نحن متخصصون في تصميم المواقع الإلكترونية الاحترافية. يمكننا إنشاء:\n\n🌐 مواقع الشركات والأعمال\n🛒 متاجر إلكترونية\n📱 مواقع متجاوبة مع الجوال\n⚡ مواقع سريعة ومحسنة لمحركات البحث\n\nهل تريد معرفة المزيد عن باقاتنا؟"
    }

    if (message.includes("سوشيال") || message.includes("تسويق")) {
      return "رائع! خدمات السوشيال ميديا تشمل:\n\n📱 إدارة حسابات فيسبوك وانستجرام\n✍️ كتابة محتوى إبداعي\n🎨 تصميم منشورات احترافية\n📊 تحليل الأداء والإحصائيات\n🎯 استهداف الجمهور المناسب\n\nأي منصة تهمك أكثر؟"
    }

    if (message.includes("سعر") || message.includes("تكلفة") || message.includes("باقة")) {
      return "أسعارنا تنافسية ومناسبة للسوق المصري:\n\n💻 تصميم الموقع: من 4,000 جنيه\n📱 إدارة السوشيال ميديا: من 1,500 جنيه شهرياً\n🎯 الإعلانات الممولة: 20% من الميزانية\n📊 باقات شاملة: خصومات تصل لـ 25%\n\nاستخدم حاسبة الأسعار للحصول على تقدير دقيق!"
    }

    if (message.includes("استشارة") || message.includes("مجانية")) {
      return "نعم! نقدم استشارة مجانية لمدة 30 دقيقة تشمل:\n\n🎯 تحليل احتياجات مشروعك\n📊 دراسة المنافسين\n💡 اقتراحات للتطوير\n📈 خطة تسويقية أولية\n💰 تقدير التكاليف\n\nهل تريد حجز موعد للاستشارة؟"
    }

    if (message.includes("أعمال") || message.includes("مشاريع") || message.includes("أمثلة")) {
      return "لدينا أكثر من 200 مشروع ناجح:\n\n🏥 مواقع طبية وعيادات\n🍽️ مطاعم ومقاهي\n🛒 متاجر إلكترونية\n🏢 شركات ومؤسسات\n🎓 مواقع تعليمية\n\nيمكنك مشاهدة معرض أعمالنا في قسم 'أعمالنا' أو طلب أمثلة مخصصة لمجالك."
    }

    return "شكراً لك! فريقنا المتخصص سيساعدك في أي استفسار. يمكنك:\n\n📞 التواصل المباشر عبر الواتساب\n📧 إرسال رسالة عبر نموذج التواصل\n🤝 حجز استشارة مجانية\n\nما الذي يمكنني مساعدتك فيه تحديداً؟"
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      type: "user",
      content: inputMessage,
      time: new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        type: "bot",
        content: getBotResponse(inputMessage),
        time: new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply)
    setTimeout(() => handleSendMessage(), 100)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl animate-pulse"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-96 h-[500px] z-50 animate-in slide-in-from-bottom-5">
          <Card className="h-full shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="w-5 h-5" />
                مساعد ehabgm الذكي
                <Badge className="bg-white/20 text-white text-xs">
                  <Sparkles className="w-3 h-3 mr-1" />
                  متاح الآن
                </Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col h-full p-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.type === "bot" && <Bot className="w-4 h-4 mt-1 text-blue-600" />}
                        {message.type === "user" && <User className="w-4 h-4 mt-1" />}
                        <div>
                          <p className="text-sm whitespace-pre-line">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">{message.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-blue-600" />
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="p-3 border-t bg-gray-50">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="اكتب رسالتك هنا..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="sm">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
