"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, Mail, Phone } from "lucide-react"

export default function MakeMoneyPage() {
  const [language, setLanguage] = useState("en")
  const [projectAmount, setProjectAmount] = useState("")
  const [commission, setCommission] = useState(0)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"
    setLanguage(savedLanguage)
  }, [])

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const handleAmountChange = (value: string) => {
    setProjectAmount(value)
    const amount = Number.parseFloat(value) || 0
    setCommission(amount * 0.25)
  }

  const content = {
    en: {
      title: "Make Money with Referrals",
      description:
        "Know other founders, businesses, freelancers, or solo entrepreneurs who need modern websites? Refer them to Founders Lab and earn a 25% commission on every successful project. It's that simple - help others grow their digital presence while earning money for yourself.",
      calculatorTitle: "Commission Calculator",
      projectAmountLabel: "Project Amount ($)",
      commissionLabel: "Your Commission (25%)",
      contactTitle: "Get Started Today",
      contactDescription: "Ready to start earning? Contact us to learn more about our referral program.",
      email: "hello@founderslab.com",
      phone: "+962795874662",
    },
    ar: {
      title: "اربح المال من خلال الترشيح",
      description:
        "هل تعرف مؤسسين أو أصحاب أعمال أو مستقلين أو رواد أعمال فرديين يحتاجون إلى مواقع ويب حديثة؟ رشحهم إلى فاوندرز لاب واحصل على عمولة 25% على كل مشروع ناجح. الأمر بهذه البساطة - ساعد الآخرين على تنمية حضورهم الرقمي بينما تكسب المال لنفسك.",
      calculatorTitle: "حاسبة العمولة",
      projectAmountLabel: "مبلغ المشروع ($)",
      commissionLabel: "عمولتك (25%)",
      contactTitle: "ابدأ اليوم",
      contactDescription: "مستعد لبدء كسب المال؟ اتصل بنا لمعرفة المزيد عن برنامج الترشيح الخاص بنا.",
      email: "hello@founderslab.com",
      phone: "+962795874662",
    },
  }

  const currentContent = content[language as keyof typeof content]

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar language={language} onLanguageChange={handleLanguageChange} />

      <main className="pb-16 px-8 sm:px-12 lg:px-16 pt-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Box */}
          <div className="border border-border/40 rounded-xl overflow-hidden bg-background">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              {/* Content Section */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{currentContent.title}</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">{currentContent.description}</p>
                  </div>

                  {/* Commission Calculator */}
                  <div className="space-y-6 p-6 border border-border/20 rounded-lg bg-muted/20">
                    <div className="flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold text-foreground">{currentContent.calculatorTitle}</h2>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="amount" className="text-sm font-medium">
                          {currentContent.projectAmountLabel}
                        </Label>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0"
                          value={projectAmount}
                          onChange={(e) => handleAmountChange(e.target.value)}
                          className="text-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">{currentContent.commissionLabel}</Label>
                        <div className="text-2xl font-bold text-primary">${commission.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">{currentContent.contactTitle}</h3>
                    <p className="text-muted-foreground">{currentContent.contactDescription}</p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <a
                          href={`mailto:${currentContent.email}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {currentContent.email}
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <a
                          href={`tel:${currentContent.phone}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {currentContent.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative">
                <img
                  src="https://bst.icons8.com/wp-content/uploads/old-uploads/2019/06/digital-illustration-brian-edward-miller-3-1024x768.webp"
                  alt={language === "ar" ? "رسم توضيحي رقمي للأعمال" : "Digital business illustration"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  )
}
