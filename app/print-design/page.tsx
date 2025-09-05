import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "تصميم المطبوعات والإعلانات | ehabgm",
	description: "تصميم بروشورات، فلاير، لافتات، وبنرات مطبوعة باحترافية.",
}

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto px-4 py-24">
			<h1 className="text-3xl font-bold mb-4">تصميم المطبوعات والإعلانات</h1>
			<p className="text-muted-foreground max-w-2xl">تصميم عالي الجودة للطباعة مع مراعاة المقاسات والدقة والألوان.</p>
		</div>
	)
}

