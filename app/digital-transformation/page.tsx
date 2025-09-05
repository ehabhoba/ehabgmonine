import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "التحول الرقمي للشركات | ehabgm",
	description: "خارطة طريق للتحول الرقمي ودمج الأدوات السحابية والأتمتة.",
}

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto px-4 py-24">
			<h1 className="text-3xl font-bold mb-4">التحول الرقمي للشركات</h1>
			<p className="text-muted-foreground max-w-2xl">تقييم جاهزية التحول، اختيار الأدوات، وخطط التنفيذ والتدريب.</p>
		</div>
	)
}

