"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"

type SupabaseUser = {
	email?: string | null
	user_metadata?: { full_name?: string; avatar_url?: string }
}

export default function AuthButton() {
	const [user, setUser] = useState<SupabaseUser | null>(null)
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const supabase = createClient()

	useEffect(() => {
		let mounted = true
		async function load() {
			try {
				const { data } = await supabase.auth.getSession()
				if (!mounted) return
				setUser(data.session?.user ?? null)
			} finally {
				if (mounted) setLoading(false)
			}
		}
		load()
		const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user ?? null)
			router.refresh()
		})
		return () => {
			mounted = false
			sub.subscription.unsubscribe()
		}
	}, [router, supabase])

	const signOut = async () => {
		await supabase.auth.signOut()
		router.push("/")
		router.refresh()
	}

	if (loading) return null

	if (!user) {
		return (
			<Button variant="outline" asChild>
				<Link href="/auth/login">تسجيل الدخول</Link>
			</Button>
		)
	}

	return (
		<div className="flex items-center gap-2">
			<span className="text-sm text-muted-foreground hidden md:inline">
				{user.user_metadata?.full_name || user.email}
			</span>
			<Button variant="ghost" onClick={signOut}>تسجيل الخروج</Button>
		</div>
	)
}

