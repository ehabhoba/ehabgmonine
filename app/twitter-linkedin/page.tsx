import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "إدارة تويتر ولينكد إن | ehabgm",
	description: "خدمات إدارة حسابات تويتر ولينكد إن وبناء الحضور المهني للشركات.",
}

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto px-4 py-24">
			<h1 className="text-3xl font-bold mb-4">إدارة تويتر ولينكد إن</h1>
			<p className="text-muted-foreground max-w-2xl">صياغة المحتوى المهني، حملات Lead Gen، والتقارير الأسبوعية للأداء.</p>
		</div>
	)
}

