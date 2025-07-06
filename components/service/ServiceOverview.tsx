export default function ServiceOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            오래오래 서비스
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI 기반 반려동물 혈액검사 분석 및 건강관리 서비스
          </p>
          
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                우리의 목표
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                반려동물과 가족이 오래오래 건강하게 함께할 수 있도록<br />
                전문적이고 정확한 건강관리 솔루션을 제공합니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI 분석</h3>
                <p className="text-sm text-gray-600">최신 AI 기술로 정확한 분석</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">간편한 사용</h3>
                <p className="text-sm text-gray-600">PDF 업로드만으로 OK</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">맞춤 케어</h3>
                <p className="text-sm text-gray-600">개별 맞춤형 건강 관리</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}