export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI가 분석하는<br />
              <span className="text-blue-600">스마트한 반려동물 건강관리</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              혈액검사 PDF 업로드만으로 AI가 즉시 분석하여<br />
              맞춤형 건강 솔루션을 제공합니다
            </p>

            <div className="bg-blue-100 rounded-2xl px-6 py-4 inline-block mb-10">
              <p className="text-lg font-semibold text-blue-800">
                오래오래 - AI 반려동물 건강관리 서비스
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                무료 체험하기
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 border-2 border-blue-600">
                자세히 알아보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              오래오래가 특별한 이유
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 rounded-2xl hover:bg-gray-50">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">간편한 분석</h3>
              <p className="text-gray-600">PDF 업로드 한 번으로 전문적인 혈액검사 분석</p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:bg-gray-50">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI 정밀도</h3>
              <p className="text-gray-600">수의학 전문 지식 기반 정확한 결과 해석</p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:bg-gray-50">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">맞춤 케어</h3>
              <p className="text-gray-600">반려동물 개별 상태에 최적화된 관리 방법 제공</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            우리 아이 건강, 이제 더 쉽고 정확하게
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            지금 바로 오래오래와 함께 반려동물의 건강을 지켜주세요
          </p>
          
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100">
            지금 시작하기
          </button>
        </div>
      </section>
    </div>
  )
}