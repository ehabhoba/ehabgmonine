'use client'

import { useAuth } from './auth-provider'
import { Button } from '@/components/ui/button'
import { User, LogOut, LogIn } from 'lucide-react'
import { useState } from 'react'

export function AuthButton() {
  const { user, loading, signInWithGoogle, signOut } = useAuth()
  const [isSigningIn, setIsSigningIn] = useState(false)

  const handleSignIn = async () => {
    setIsSigningIn(true)
    try {
      await signInWithGoogle()
    } finally {
      setIsSigningIn(false)
    }
  }

  if (loading) {
    return (
      <Button disabled className="flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        جاري التحميل...
      </Button>
    )
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 text-sm">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">
            {user.user_metadata?.full_name || user.email}
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={signOut}
          className="flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          تسجيل الخروج
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={handleSignIn}
      disabled={isSigningIn}
      className="flex items-center gap-2"
    >
      {isSigningIn ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <LogIn className="w-4 h-4" />
      )}
      {isSigningIn ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
    </Button>
  )
}