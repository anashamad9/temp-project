"use client"

import type React from "react"
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactType: "build",
    projectType: "",
    designStyle: "",
    message: "",
    note: "",
  })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const langFromUrl = urlParams.get("lang") as "en" | "ar" | null
    const savedLanguage = localStorage.getItem("language") as "en" | "ar" | null

    if (langFromUrl && (langFromUrl === "en" || langFromUrl === "ar")) {
      setLanguage(langFromUrl)
      localStorage.setItem("language", langFromUrl)
    } else if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (newLanguage: "en" | "ar") => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const serviceId = "service_h1dauj2"
      const templateId = "template_ju5isj8"
      const publicKey = "tR0-f0jzNG_9TBofW"

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        contactType: formData.contactType === "build" ? "Build a Project" : "General Inquiry",
        request_details:
          formData.contactType === "build"
            ? `Project Type: ${formData.projectType || "Not specified"}
Design Style: ${formData.designStyle || "Not specified"}
Additional Notes: ${formData.note || "None"}`
            : `Message: ${formData.message}`,
        project_type: formData.projectType || "N/A",
        design_style: formData.designStyle || "N/A",
        message: formData.contactType === "other" ? formData.message : formData.note,
        to_name: "Founders Lab Team",
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        contactType: "build",
        projectType: "",
        designStyle: "",
        message: "",
        note: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "Let's discuss your next project",
      description:
        "Ready to bring your vision to life? We'd love to hear about your project and explore how we can help you achieve your goals.",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        contactType: "What can we help you with?",
        contactOptions: {
          build: "Build a project",
          other: "Contact for something else",
        },
        projectType: "Project Type",
        projectOptions: {
          personal: "Personal Website",
          mvp: "MVP",
          fullProduct: "Full Product Development",
          landing: "Landing Page",
          blog: "Blog",
          store: "Store",
          else: "Something else",
        },
        designStyle: "Design Style",
        styleOptions: {
          modern: "Modern",
          minimal: "Minimal",
          classic: "Classic",
          dontKnow: "I don't know",
        },
        message: "Message",
        note: "Additional Notes",
        submit: isLoading ? "Sending..." : "Send Message",
        success: "Message sent successfully! We'll get back to you soon.",
        error: "Failed to send message. Please try again.",
      },
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "دعنا نناقش مشروعك القادم",
      description: "مستعد لتحويل رؤيتك إلى واقع؟ نحن نحب أن نسمع عن مشروعك ونستكشف كيف يمكننا مساعدتك في تحقيق أهدافك.",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        contactType: "كيف يمكننا مساعدتك؟",
        contactOptions: {
          build: "بناء مشروع",
          other: "التواصل لشيء آخر",
        },
        projectType: "نوع المشروع",
        projectOptions: {
          personal: "موقع شخصي",
          mvp: "منتج أولي",
          fullProduct: "تطوير منتج كامل",
          landing: "صفحة هبوط",
          blog: "مدونة",
          store: "متجر",
          else: "شيء آخر",
        },
        designStyle: "نمط التصميم",
        styleOptions: {
          modern: "عصري",
          minimal: "بسيط",
          classic: "كلاسيكي",
          dontKnow: "لا أعرف",
        },
        message: "الرسالة",
        note: "ملاحظات إضافية",
        submit: isLoading ? "جاري الإرسال..." : "إرسال الرسالة",
        success: "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.",
        error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      },
    },
  }

  const currentContent = content[language]

  return (
    <div
      className={`min-h-screen ${language === "ar" ? "font-arabic" : "font-sans"}`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Navbar language={language} onLanguageChange={handleLanguageChange} />

      <main className="pb-16 px-8 sm:px-12 lg:px-16 pt-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">{currentContent.title}</h1>

            <p className="text-sm text-muted-foreground max-w-xl mx-auto">{currentContent.description}</p>
          </div>

          {/* Contact Section */}
          <div className="border border-border/40 rounded-xl overflow-hidden bg-background max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 min-h-[320px]">
              {/* Form Section */}
              <div className="lg:col-span-3 p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      {currentContent.form.name}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full shadow-none focus:border-border/80 ring-0 outline-none focus:ring-0 focus:outline-none focus-visible:ring-0"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        {currentContent.form.email}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full shadow-none focus:border-border/80 ring-0 outline-none focus:ring-0 focus:outline-none focus-visible:ring-0"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        {currentContent.form.phone}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full shadow-none focus:border-border/80 ring-0 outline-none focus:ring-0 focus:outline-none focus-visible:ring-0"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">{currentContent.form.contactType}</Label>
                    <RadioGroup
                      value={formData.contactType}
                      onValueChange={(value) => handleSelectChange("contactType", value)}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="build" id="build" />
                        <Label htmlFor="build" className="text-sm cursor-pointer">
                          {currentContent.form.contactOptions.build}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="text-sm cursor-pointer">
                          {currentContent.form.contactOptions.other}
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.contactType === "build" && (
                    <>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">{currentContent.form.projectType}</Label>
                        <Select onValueChange={(value) => handleSelectChange("projectType", value)}>
                          <SelectTrigger className="w-full shadow-none focus:border-border/80 ring-0 outline-none focus:ring-0 focus:outline-none focus-visible:ring-0">
                            <SelectValue placeholder={language === "ar" ? "اختر نوع المشروع" : "Select project type"} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal">{currentContent.form.projectOptions.personal}</SelectItem>
                            <SelectItem value="mvp">{currentContent.form.projectOptions.mvp}</SelectItem>
                            <SelectItem value="fullProduct">
                              {currentContent.form.projectOptions.fullProduct}
                            </SelectItem>
                            <SelectItem value="landing">{currentContent.form.projectOptions.landing}</SelectItem>
                            <SelectItem value="blog">{currentContent.form.projectOptions.blog}</SelectItem>
                            <SelectItem value="store">{currentContent.form.projectOptions.store}</SelectItem>
                            <SelectItem value="else">{currentContent.form.projectOptions.else}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">{currentContent.form.designStyle}</Label>
                        <Select onValueChange={(value) => handleSelectChange("designStyle", value)}>
                          <SelectTrigger className="w-full shadow-none focus:border-border/80 ring-0 outline-none focus:ring-0 focus:outline-none focus-visible:ring-0">
                            <SelectValue placeholder={language === "ar" ? "اختر نمط التصميم" : "Select design style"} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="modern">{currentContent.form.styleOptions.modern}</SelectItem>
                            <SelectItem value="minimal">{currentContent.form.styleOptions.minimal}</SelectItem>
                            <SelectItem value="classic">{currentContent.form.styleOptions.classic}</SelectItem>
                            <SelectItem value="dontKnow">{currentContent.form.styleOptions.dontKnow}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="note" className="text-sm font-medium">
                          {currentContent.form.note}
                        </Label>
                        <Textarea
                          id="note"
                          name="note"
                          value={formData.note}
                          onChange={handleInputChange}
                          className="w-full min-h-[80px] resize-none shadow-none focus:border-border/80 ring-0 outline-none focus:ring-0 focus:outline-none focus-visible:ring-0"
                          placeholder={language === "ar" ? "أي ملاحظات إضافية..." : "Any additional notes..."}
                        />
                      </div>
                    </>
                  )}

                  {formData.contactType === "other" && (
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        {currentContent.form.message}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full min-h-[120px] resize-none shadow-none focus:border-border/80 ring-0 outline-none focus:ring-0 focus:outline-none focus-visible:ring-0"
                        required
                      />
                    </div>
                  )}

                  {submitStatus === "success" && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm">
                      {currentContent.form.success}
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
                      {currentContent.form.error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isLoading}
                  >
                    {currentContent.form.submit}
                  </Button>
                </form>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1711136314731-8c3fe1831672?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D"
                  alt={language === "ar" ? "فن رقمي" : "Digital Art"}
                  className="w-full h-full object-cover object-center"
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
