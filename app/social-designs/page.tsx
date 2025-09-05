import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "تصميمات سوشيال ميديا | ehabgm",
	description: "تصميم منشورات وإعلانات سوشيال ميديا باحترافية متوافقة مع الهوية البصرية.",
}

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto px-4 py-24">
			<h1 className="text-3xl font-bold mb-4">تصميمات سوشيال ميديا</h1>
			<p className="text-muted-foreground max-w-2xl">حزم تصميم شهرية، قوالب قابلة للتعديل، وسرعة تسليم عالية.</p>
		</div>
	)
}

