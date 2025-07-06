import type { Metadata } from 'next'
import { Lilita_One } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const lilitaOne = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lilita-one',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '오래오래 - AI 반려동물 건강관리 서비스 | Mari Father',
  description: 'AI가 분석하는 스마트한 반려동물 건강관리. 혈액검사 PDF 업로드만으로 AI가 즉시 분석하여 맞춤형 건강 솔루션을 제공합니다.',
  keywords: '반려동물, 펫헬스케어, 혈액검사, AI 분석, 건강관리, 펫테크',
  openGraph: {
    title: '오래오래 - AI 반려동물 건강관리 서비스',
    description: 'AI가 분석하는 스마트한 반려동물 건강관리',
    url: 'https://mari-father.com',
    siteName: 'Mari Father',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${lilitaOne.variable} min-h-screen bg-white flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}