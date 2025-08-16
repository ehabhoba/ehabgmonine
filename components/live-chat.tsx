"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, User, Bot, Phone, Mail } from "lucide-react"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "مرحباً! أهلاً بك في وكالة ehabgm للتسويق الرقمي 👋",
      sender: "bot",
      time: "الآن",
    },
    {
      id: 2,
      text: "كيف يمكنني مساعدتك اليوم؟",
      sender: "bot",
      time: "الآن",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickReplies = ["أريد عرض أسعار", "خدمات السوشيال ميديا", "تصميم جرافيك", "إعلانات ممولة", "تطوير موقع"]

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      time: "الآن",
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "شكراً لك! سيتواصل معك أحد خبرائنا خلال دقائق. يمكنك أيضاً التواصل معنا مباشرة عبر الواتساب للحصول على رد فوري.",
        sender: "bot",
        time: "الآن",
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 2000)
  }

  const handleQuickReply = (reply: string) => {
    const userMessage = {
      id: messages.length + 1,
      text: reply,
      sender: "user",
      time: "الآن",
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      let botResponse = ""
      switch (reply) {
        case "أريد عرض أسعار":
          botResponse = "ممتاز! يمكنك مراجعة صفحة الأسعار أو التواصل معنا للحصول على عرض مخصص حسب احتياجاتك."
          break
        case "خدمات السوشيال ميديا":
          botResponse = "نقدم خدمات إدارة شاملة لجميع منصات التواصل الاجتماعي مع محتوى إبداعي وتفاعل مستمر."
          break
        default:
          botResponse = "سيتواصل معك أحد خبرائنا لمناقشة احتياجاتك بالتفصيل."
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        time: "الآن",
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg btn-animated"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white animate-pulse">متاح الآن</Badge>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 left-6 w-80 h-96 z-40 shadow-2xl notification-slide show">
          <CardHeader className="bg-primary text-white p-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <MessageCircle className="w-5 h-5" />
              دردشة مباشرة
              <Badge variant="secondary" className="mr-auto">
                متصل
              </Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.sender === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.sender === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      <span className="text-xs opacity-70">{message.time}</span>
                    </div>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex items-center gap-1">
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
              )}
            </div>

            {/* Quick Replies */}
            <div className="p-3 border-t">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply}
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

            {/* Message Input */}
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="اكتب رسالتك..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                  <Phone className="w-3 h-3" />
                  اتصال
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                  <Mail className="w-3 h-3" />
                  إيميل
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
