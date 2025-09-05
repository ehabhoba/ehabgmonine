-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE service_category AS ENUM (
  'website_design',
  'ecommerce', 
  'mobile_apps',
  'social_media',
  'seo',
  'paid_ads',
  'email_marketing',
  'content_marketing',
  'brand_identity',
  'marketing_consulting',
  'custom_solutions'
);

CREATE TYPE contact_status AS ENUM ('pending', 'contacted', 'completed', 'cancelled');

CREATE TYPE project_status AS ENUM ('pending', 'in_progress', 'review', 'completed', 'cancelled');

-- Users table (extends Supabase auth.users)
CREATE TABLE public.user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  company TEXT,
  website TEXT,
  bio TEXT,
  location TEXT,
  preferred_language TEXT DEFAULT 'ar',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services table
CREATE TABLE public.services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT NOT NULL,
  description_en TEXT,
  category service_category NOT NULL,
  price_from DECIMAL(10,2),
  price_to DECIMAL(10,2),
  features TEXT[] DEFAULT '{}',
  features_en TEXT[] DEFAULT '{}',
  image_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  delivery_time_days INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact forms table
CREATE TABLE public.contact_forms (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  service_category service_category,
  budget_range TEXT,
  preferred_contact_method TEXT DEFAULT 'email',
  status contact_status DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects table
CREATE TABLE public.projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  status project_status DEFAULT 'pending',
  budget DECIMAL(10,2),
  start_date DATE,
  due_date DATE,
  completion_date DATE,
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  notes TEXT,
  attachments TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE public.testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
  project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  company TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  comment_en TEXT,
  avatar_url TEXT,
  service_category service_category,
  is_featured BOOLEAN DEFAULT FALSE,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE public.blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  excerpt_en TEXT,
  content TEXT NOT NULL,
  content_en TEXT,
  featured_image TEXT,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletter subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  preferences JSONB DEFAULT '{}'
);

-- FAQ table
CREATE TABLE public.faqs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  question TEXT NOT NULL,
  question_en TEXT,
  answer TEXT NOT NULL,
  answer_en TEXT,
  category TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Website settings table
CREATE TABLE public.website_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_user_profiles_created_at ON public.user_profiles(created_at);
CREATE INDEX idx_services_category ON public.services(category);
CREATE INDEX idx_services_is_featured ON public.services(is_featured);
CREATE INDEX idx_contact_forms_status ON public.contact_forms(status);
CREATE INDEX idx_contact_forms_created_at ON public.contact_forms(created_at);
CREATE INDEX idx_projects_user_id ON public.projects(user_id);
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_testimonials_is_featured ON public.testimonials(is_featured);
CREATE INDEX idx_testimonials_is_approved ON public.testimonials(is_approved);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_is_published ON public.blog_posts(is_published);
CREATE INDEX idx_newsletter_subscribers_email ON public.newsletter_subscribers(email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- User profiles: Users can only view and edit their own profile
CREATE POLICY "Users can view own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Projects: Users can only view and manage their own projects
CREATE POLICY "Users can view own projects" ON public.projects
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own projects" ON public.projects
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own projects" ON public.projects
  FOR UPDATE USING (auth.uid() = user_id);

-- Public read access for certain tables
CREATE POLICY "Services are viewable by everyone" ON public.services
  FOR SELECT USING (is_active = true);

CREATE POLICY "Approved testimonials are viewable by everyone" ON public.testimonials
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Published blog posts are viewable by everyone" ON public.blog_posts
  FOR SELECT USING (is_published = true);

CREATE POLICY "FAQs are viewable by everyone" ON public.faqs
  FOR SELECT USING (is_active = true);

-- Contact forms: Anyone can insert, only admins can view
CREATE POLICY "Anyone can submit contact forms" ON public.contact_forms
  FOR INSERT WITH CHECK (true);

-- Functions and triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.services
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.contact_forms
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.testimonials
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.faqs
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.website_settings
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Insert initial data
INSERT INTO public.services (title, title_en, description, description_en, category, price_from, price_to, features, features_en, is_featured) VALUES
('تصميم المواقع الإلكترونية', 'Website Design', 'تصميم وتطوير مواقع إلكترونية احترافية ومتجاوبة مع جميع الأجهزة', 'Professional and responsive website design and development for all devices', 'website_design', 2000, 10000, ARRAY['تصميم متجاوب', 'تحسين SEO', 'لوحة تحكم', 'استضافة مجانية لسنة'], ARRAY['Responsive Design', 'SEO Optimization', 'Admin Panel', 'Free Hosting for 1 Year'], true),

('متاجر إلكترونية', 'E-commerce Stores', 'إنشاء متاجر إلكترونية متكاملة مع أنظمة الدفع والشحن', 'Complete e-commerce stores with payment and shipping systems', 'ecommerce', 5000, 25000, ARRAY['نظام دفع آمن', 'إدارة المخزون', 'تقارير المبيعات', 'دعم فني'], ARRAY['Secure Payment System', 'Inventory Management', 'Sales Reports', 'Technical Support'], true),

('إدارة السوشيال ميديا', 'Social Media Management', 'إدارة حسابات السوشيال ميديا وإنشاء محتوى جذاب', 'Social media account management and engaging content creation', 'social_media', 1500, 5000, ARRAY['إنشاء محتوى', 'جدولة المنشورات', 'تفاعل مع الجمهور', 'تقارير شهرية'], ARRAY['Content Creation', 'Post Scheduling', 'Audience Engagement', 'Monthly Reports'], true),

('تحسين محركات البحث SEO', 'SEO Optimization', 'تحسين ترتيب موقعك في محركات البحث وزيادة الزيارات', 'Improve your website ranking in search engines and increase traffic', 'seo', 1000, 3000, ARRAY['تحليل الكلمات المفتاحية', 'تحسين المحتوى', 'بناء الروابط', 'تقارير أداء'], ARRAY['Keyword Analysis', 'Content Optimization', 'Link Building', 'Performance Reports'], true);

INSERT INTO public.faqs (question, question_en, answer, answer_en, category, sort_order) VALUES
('ما هي خدمات التسويق الرقمي التي تقدمونها؟', 'What digital marketing services do you offer?', 'نقدم خدمات شاملة تشمل إدارة السوشيال ميديا، الإعلانات الممولة، تحسين محركات البحث، تصميم المواقع، والتسويق بالمحتوى', 'We offer comprehensive services including social media management, paid advertising, SEO, web design, and content marketing', 'services', 1),

('كم تستغرق مدة تنفيذ المشروع؟', 'How long does it take to complete a project?', 'تختلف مدة التنفيذ حسب نوع المشروع وتعقيده، لكن معظم المشاريع تتراوح بين أسبوعين إلى شهرين', 'Project duration varies based on type and complexity, but most projects range from 2 weeks to 2 months', 'timeline', 2),

('هل تقدمون دعم فني بعد التسليم؟', 'Do you provide technical support after delivery?', 'نعم، نقدم دعم فني مجاني لمدة 3 أشهر بعد التسليم، ودعم مدفوع للفترات الأطول', 'Yes, we provide free technical support for 3 months after delivery, and paid support for longer periods', 'support', 3);

INSERT INTO public.website_settings (key, value, description) VALUES
('company_name', 'ehabgm Digital Marketing Agency', 'Company name'),
('company_phone', '+201022679250', 'Company phone number'),
('company_email', 'info@ehabgm.online', 'Company email'),
('company_address', 'Helwan, Cairo, Egypt', 'Company address'),
('whatsapp_number', '+201022679250', 'WhatsApp contact number'),
('facebook_url', 'https://www.facebook.com/ehabgm', 'Facebook page URL'),
('instagram_url', 'https://www.instagram.com/ehabgm', 'Instagram profile URL'),
('linkedin_url', 'https://www.linkedin.com/company/ehabgm', 'LinkedIn company page URL');