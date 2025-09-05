export const metadata = {
	title: "خطأ في تسجيل الدخول",
	description: "حدث خطأ أثناء معالجة تسجيل الدخول عبر جوجل."
}

export default function AuthCodeErrorPage() {
	return (
		<div className="min-h-screen flex items-center justify-center p-6">
			<div className="max-w-md w-full text-center">
				<h1 className="text-2xl font-bold mb-2">تعذر إكمال تسجيل الدخول</h1>
				<p className="text-muted-foreground mb-6">يرجى المحاولة مرة أخرى أو التواصل معنا للمساعدة.</p>
				<a href="/auth/login" className="underline text-primary">العودة لصفحة الدخول</a>
			</div>
		</div>
	)
}

