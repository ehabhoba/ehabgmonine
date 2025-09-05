import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export const metadata = {
	title: "الملف الشخصي",
	description: "بيانات حسابك في ehabgm"
}

export default async function ProfilePage() {
	const supabase = await createClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect("/auth/login?next=/profile")
	}

	return (
		<div className="min-h-screen container mx-auto px-4 py-24">
			<h1 className="text-2xl font-bold mb-4">الملف الشخصي</h1>
			<div className="space-y-2 text-sm">
				<div><span className="text-muted-foreground">الاسم:</span> {user.user_metadata?.full_name || "غير متوفر"}</div>
				<div><span className="text-muted-foreground">البريد الإلكتروني:</span> {user.email}</div>
			</div>
		</div>
	)
}

