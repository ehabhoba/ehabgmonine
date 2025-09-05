"use client"
import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"


function LoginInner() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const searchParams = useSearchParams()
	const next = searchParams.get("next") ?? "/"
	const supabase = createClient()

	const loginWithGoogle = async () => {
		try {
			setLoading(true)
			setError(null)
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: {
					redirectTo: `${window.location.origin}/auth/callback${next ? `?next=${encodeURIComponent(next)}` : ""}`,
				},
			})
			if (error) throw error
		} catch (e: any) {
			setError(e?.message ?? "فشل تسجيل الدخول. حاول مرة أخرى.")
			setLoading(false)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center p-6">
			<div className="w-full max-w-sm">
				<h1 className="text-2xl font-bold mb-2">تسجيل الدخول</h1>
				<p className="text-muted-foreground mb-6">سجل الدخول باستخدام حساب جوجل</p>
				{error && <div className="mb-4 text-sm text-red-600">{error}</div>}
				<Button className="w-full" onClick={loginWithGoogle} disabled={loading}>
					{loading ? "جارٍ التحويل..." : "تسجيل الدخول بواسطة Google"}
				</Button>
			</div>
		</div>
	)
}

export default function LoginPage() {
	return (
		<Suspense fallback={<div className="min-h-screen grid place-items-center">Loading...</div>}>
			<LoginInner />
		</Suspense>
	)
}

