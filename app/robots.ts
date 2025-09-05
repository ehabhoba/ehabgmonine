import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://ehabgm.online"
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/_next/", "/api/"]
		},
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	}
}

