import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "تصميم بروفايل الشركات | ehabgm",
	description: "بروفايل احترافي يعكس هوية شركتك ويعرض خدماتك وإنجازاتك.",
}

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto px-4 py-24">
			<h1 className="text-3xl font-bold mb-4">تصميم بروفايل الشركات</h1>
			<p className="text-muted-foreground max-w-2xl">تصميم ملفات تعريف الشركات بالعربية والإنجليزية للطباعة والنسخة الرقمية.</p>
		</div>
	)
}

