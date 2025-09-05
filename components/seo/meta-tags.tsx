import Head from 'next/head'

interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'service'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export default function MetaTags({
  title = "ehabgm - وكالة التسويق الرقمي في حلوان، القاهرة",
  description = "وكالة ehabgm للتسويق الرقمي في حلوان، القاهرة. خدمات التصميم الجرافيكي، إدارة السوشيال ميديا، الإعلانات الممولة، تطوير المواقع، وتحسين محركات البحث SEO.",
  keywords = "تسويق رقمي حلوان، تصميم جرافيك القاهرة، إعلانات ممولة، سوشيال ميديا، تطوير مواقع، SEO مصر، وكالة تسويق حلوان، ehabgm، فيسبوك، انستجرام، تيك توك، يوتيوب، إيهاب محمد",
  image = "https://i.postimg.cc/TYyK2Rtv/logo.png",
  url = "https://ehabgm.online",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "إيهاب محمد",
  section,
  tags = []
}: MetaTagsProps) {
  const fullTitle = title.includes('ehabgm') ? title : `${title} | ehabgm`
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Arabic" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="ehabgm Digital Marketing" />
      <meta property="og:locale" content="ar_EG" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content={author} />
          {section && <meta property="article:section" content={section} />}
          {tags.length > 0 && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="EG-C" />
      <meta name="geo.placename" content="Helwan, Cairo" />
      <meta name="geo.position" content="29.8500;31.3333" />
      <meta name="ICBM" content="29.8500, 31.3333" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#3B82F6" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="https://i.postimg.cc/TYyK2Rtv/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://i.postimg.cc/TYyK2Rtv/logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://i.postimg.cc/TYyK2Rtv/logo.png" />
      <link rel="shortcut icon" href="https://i.postimg.cc/TYyK2Rtv/logo.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://i.postimg.cc" />
    </Head>
  )
}