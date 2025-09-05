import "server-only"
import { cookies } from "next/headers"
import { createServerClient, type CookieOptions } from "@supabase/ssr"

export async function createClient() {
	const cookieStore = await cookies()

	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll()
				},
				setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
					try {
						for (const { name, value, options } of cookiesToSet) {
							cookieStore.set(name, value, options)
						}
					} catch {
						// ignore when called from a Server Component without mutable cookies
					}
				},
			},
		}
	)
}

