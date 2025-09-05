import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "إدارة تيك توك ويوتيوب | ehabgm",
	description: "إنشاء محتوى فيديو وإدارة قنوات تيك توك ويوتيوب مع خطط نمو أسبوعية.",
}

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto px-4 py-24">
			<h1 className="text-3xl font-bold mb-4">إدارة تيك توك ويوتيوب</h1>
			<p className="text-muted-foreground max-w-2xl">إستراتيجية فيديو، تقويم محتوى، تحسين العناوين والوصف والكلمات المفتاحية، وتحليل الأداء.</p>
		</div>
	)
}

