import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "الأتمتة وتحسين العمليات | ehabgm",
	description: "أتمتة المهام المتكررة وربط الأنظمة لتحسين الكفاءة وخفض التكاليف.",
}

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto px-4 py-24">
			<h1 className="text-3xl font-bold mb-4">الأتمتة وتحسين العمليات</h1>
			<p className="text-muted-foreground max-w-2xl">أتمتة CRM ورسائل البريد وتكامل المنصات باستخدام Zapier و APIs.</p>
		</div>
	)
}

