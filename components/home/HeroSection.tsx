import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI가 분석하는<br />
            <span className="text-primary">스마트한 반려동물 건강관리</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            혈액검사 PDF 업로드만으로 AI가 즉시 분석하여<br className="hidden md:block" />
            맞춤형 건강 솔루션을 제공합니다
          </p>

          <div className="bg-primary-light rounded-2xl px-6 py-4 inline-block mb-10">
            <p className="text-lg font-semibold text-neutral-dark">
              오래오래 - AI 반려동물 건강관리 서비스
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#get-started"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg"
            >
              무료 체험하기
            </Link>
            <Link
              href="/service"
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-primary"
            >
              자세히 알아보기
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-light rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-warning rounded-full opacity-20 blur-xl"></div>
    </section>
  )
}