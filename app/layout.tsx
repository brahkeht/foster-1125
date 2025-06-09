import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { brandConfig } from "@/config/brand-config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${brandConfig.name} | Digital Security Agency`,
  description: brandConfig.description,
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          <Suspense fallback={<div className="min-h-screen bg-black" />}>{children}</Suspense>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
