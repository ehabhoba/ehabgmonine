import { LoadingWithText } from '@/components/ui/loading-spinner'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <LoadingWithText 
        text="جاري التحميل..." 
        size="lg" 
        color="primary"
        className="text-center"
      />
    </div>
  )
}