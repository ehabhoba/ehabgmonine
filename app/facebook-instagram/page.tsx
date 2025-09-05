import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "إدارة فيسبوك وانستجرام | ehabgm",
	description: "خدمات إدارة وإعلانات فيسبوك وانستجرام باحترافية لزيادة الوصول والمبيعات.",
}

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto px-4 py-24">
			<h1 className="text-3xl font-bold mb-4">إدارة فيسبوك وانستجرام</h1>
			<p className="text-muted-foreground max-w-2xl">باقات إدارة المحتوى والإعلانات، إنشاء الاستراتيجيات، تصميم منشورات وبنرات، وتحليل النتائج شهرياً.</p>
		</div>
	)
}

