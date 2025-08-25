import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans_Arabic, Roboto } from "next/font/google"
import "./globals.css"

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-arabic",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"], // pick what you need
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-english",
})

export const metadata: Metadata = {
  title: "Founders Lab - Fast Modern Websites & Landing Pages",
  description:
    "We build fast and modern websites, products and landing pages for founders, startups, businesses and solo freelancers.",
  generator: "Founders Lab",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexArabic.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
