"use client"

import dynamic from "next/dynamic"

const LoadingScreen = dynamic(() => import("@/components/loading-screen"), { ssr: false })
const ScrollProgress = dynamic(() => import("@/components/scroll-progress"), { ssr: false })
const FloatingActions = dynamic(() => import("@/components/floating-actions"), { ssr: false })
const AIChatbot = dynamic(() => import("@/components/ai-chatbot"), { ssr: false })

export default function ClientComponents() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <FloatingActions />
      <AIChatbot />
    </>
  )
}
