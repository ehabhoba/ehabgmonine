import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "خطط النمو وزيادة المبيعات | ehabgm",
	description: "بناء خطط نمو عملية تعتمد على البيانات لزيادة المبيعات.",
}

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto px-4 py-24">
			<h1 className="text-3xl font-bold mb-4">خطط النمو وزيادة المبيعات</h1>
			<p className="text-muted-foreground max-w-2xl">تحليل القُمع التسويقي، تحسين التحويلات، وجدولة تجارب A/B.</p>
		</div>
	)
}

