import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Box, Eye, Users, Building2, Briefcase, User } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  language: "en" | "ar"
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      badge: "Let's build your tech together",
      badgeExtra: "in less than a week",
      headline: "We Build Fast and Modern Websites, Products and Landing Pages",
      headlineExtra: "- From 0 to 1",
      description: (
        <>

<div className="mt-3 flex flex-wrap gap-1.5">
            {["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Supabase", "Stripe", "SEO"].map((t) => (
              <span key={t} className="px-2 py-1 text-xs border rounded-full text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        
    
          {/* primary hero line */}
          <span>
            For{" "}
            <span className=" mt-3 inline-flex items-center gap-1">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center transform hover:scale-105 transition-transform duration-200"
                style={{ background: `linear-gradient(135deg, #5654D4 0%, #4a47c4 100%)` }}
              >
                <Users className="h-3 w-3 text-white drop-shadow-sm" />
              </div>
              <span className="font-medium text-foreground">founders</span>
            </span>
            ,{" "}
            <span className="inline-flex items-center gap-1">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center transform hover:scale-105 transition-transform duration-200"
                style={{ background: `linear-gradient(135deg, #0088FF 0%, #0077e6 100%)` }}
              >
                <Building2 className="h-3 w-3 text-white drop-shadow-sm" />
              </div>
              <span className="font-medium text-foreground">startups</span>
            </span>
            ,{" "}
            <span className="inline-flex items-center gap-1">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center transform hover:scale-105 transition-transform duration-200"
                style={{ background: `linear-gradient(135deg, #FF9F0A 0%, #e68f00 100%)` }}
              >
                <Briefcase className="h-3 w-3 text-white drop-shadow-sm" />
              </div>
              <span className="font-medium text-foreground">businesses</span>
            </span>{" "}
            and solo{" "}
            <span className="inline-flex items-center gap-1">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center transform hover:scale-105 transition-transform duration-200"
                style={{ background: `linear-gradient(135deg, #1DBF73 0%, #19a863 100%)` }}
              >
                <User className="h-3 w-3 text-white drop-shadow-sm" />
              </div>
              <span className="font-medium text-foreground">freelancers</span>
            </span>
            — ready to launch fast and own their tech, without{" "}
            <span className="line-through text-muted-foreground/60">old WordPress designs</span>,{" "}
            <span className="line-through text-muted-foreground/60">Webflow & Framer subscriptions</span>, or{" "}
            <span className="line-through text-muted-foreground/60">boring used templates</span>, but a custom designed website, product, or landing page that is fast, secure, and modern. Own the full code from day one with a one-time payment only.
            
          </span>

          

          

          
        </>
      ),
      primaryButton: "Build with us",
      secondaryButton: "Founders Lab Work",
      lovedBy: "50+",
      lovedByText: "Founders Loves Our Work - Trusted by founders across Jordan, KSA, and the UAE",
    },
    ar: {
      badge: "لنبني تقنيتك معاً",
      badgeExtra: "في أقل من أسبوع",
      headline: "نبني مواقع ومنتجات وصفحات هبوط سريعة وحديثة",
      headlineExtra: "- من 0 إلى 1",
      description: (
        <>


        <div className="mt-3 flex flex-wrap gap-1.5">
            {["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Supabase", "Stripe", "SEO"].map((t) => (
              <span key={t} className="px-2 py-1 text-xs border rounded-full text-foreground/80">
                {t}
              </span>
            ))}
          </div>
          {/* السطر الأساسي */}
          <span>
            لـ{" "}
            <span className="mt-3 inline-flex items-center gap-1">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center transform hover:scale-105 transition-transform duration-200"
                style={{ background: `linear-gradient(135deg, #5654D4 0%, #4a47c4 100%)` }}
              >
                <Users className="h-3 w-3 text-white drop-shadow-sm" />
              </div>
              <span className="font-medium text-foreground">المؤسسين</span>
            </span>{" "}
            و{" "}
            <span className="inline-flex items-center gap-1">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center transform hover:scale-105 transition-transform duration-200"
                style={{ background: `linear-gradient(135deg, #0088FF 0%, #0077e6 100%)` }}
              >
                <Building2 className="h-3 w-3 text-white drop-shadow-sm" />
              </div>
              <span className="font-medium text-foreground">الشركات الناشئة</span>
            </span>{" "}
            و{" "}
            <span className="inline-flex items-center gap-1">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center transform hover:scale-105 transition-transform duration-200"
                style={{ background: `linear-gradient(135deg, #FF9F0A 0%, #e68f00 100%)` }}
              >
                <Briefcase className="h-3 w-3 text-white drop-shadow-sm" />
              </div>
              <span className="font-medium text-foreground">الأعمال</span>
            </span>{" "}
            و{" "}
            <span className="inline-flex items-center gap-1">
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center transform hover:scale-105 transition-transform duration-200"
                style={{ background: `linear-gradient(135deg, #1DBF73 0%, #19a863 100%)` }}
              >
                <User className="h-3 w-3 text-white drop-shadow-sm" />
              </div>
              <span className="font-medium text-foreground">المستقلين</span>
            </span>{" "}
            — جاهزون لإطلاق منتجك أو موقعك بسرعة ودقة عالية، بدون{" "}
            <span className="line-through text-muted-foreground/60">تصاميم ووردبريس القديمة</span> أو{" "}
            <span className="line-through text-muted-foreground/60">اشتراكات Webflow و Framer</span> أو{" "}
            <span className="line-through text-muted-foreground/60">القوالب المكررة المملة</span>، بل موقع، منتج تقني أو صفحة هبوط مصممة خصيصًا لك، سريعة، آمنة، وعصرية. امتلك الكود كاملًا من اليوم الأول مع دفع لمرة واحدة فقط.
          
          </span>

          

          
        </>
      ),
      primaryButton: "ابني معنا",
      secondaryButton: "أعمال فاوندرز لاب",
      lovedBy: "50+",
      lovedByText: "مؤسس أحبوا أعمالنا - موثوق من مؤسسين في الأردن والسعودية والإمارات.",
    },
  }

  return (
    <section
      className={`py-16 sm:py-8 ${language === "ar" ? "font-arabic" : "font-english"}`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-36">
        <div className={`w-full ${language === "ar" ? "flex justify-start" : ""}`}>
          <div className={`max-w-3xl ${language === "ar" ? "text-right" : "text-left"}`}>
            <div className={`mb-6 flex ${language === "ar" ? "justify-start" : "justify-start"}`}>
              <Badge
                variant="outline"
                className="text-xs px-2.5 py-1 bg-transparent border border-border/50 transition-all duration-300 hover:border-border cursor-default flex items-center gap-2 w-fit rounded-xl"
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="hidden sm:inline">
                  {content[language].badge} — {content[language].badgeExtra}
                </span>
                <span className="sm:hidden">{content[language].badge}</span>
              </Badge>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground leading-tight mb-5">
              {content[language].headline}{" "}
              <span className="text-muted-foreground/40">{content[language].headlineExtra}</span>
            </h1>

            {/* switched from <p> to <div> to allow blocks (chips, paragraphs) while keeping hero styles */}
            <div
              className={`text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed max-w-2xl ${
                language === "ar" ? "text-right mr-0 ml-auto" : "text-left"
              }`}
            >
              {content[language].description}
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-3 items-stretch sm:items-start mb-7 ${
                language === "ar" ? "sm:justify-start" : ""
              }`}
            >
              <Link href={`/contact?lang=${language}`}>
                <Button className="w-full sm:w-auto text-sm px-5 py-2.5 flex items-center justify-center gap-2 rounded-lg">
                  <Box className="h-4 w-4" />
                  {content[language].primaryButton}
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-sm px-5 py-2.5 !bg-white !text-black hover:!bg-white/90 border rounded-lg flex items-center justify-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  {content[language].secondaryButton}
                </Button>
              </Link>
            </div>

            <div className={`flex items-center gap-3`}>
              <div className={`flex items-center ${language === "ar" ? "space-x-reverse -space-x-2" : "-space-x-2"}`}>
                <img
                  src="/founders/founder-1.png"
                  alt="Founder 1"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                />
                <img
                  src="/founders/founder-2.png"
                  alt="Founder 2"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                />
                <img
                  src="/founders/founder-3.png"
                  alt="Founder 3"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">{content[language].lovedBy}</span>{" "}
                <span className="text-muted-foreground">
                  {language === "en" ? "Founders Loves Our Work - Trusted by founders across Jordan, KSA, and the UAE" : content[language].lovedByText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
