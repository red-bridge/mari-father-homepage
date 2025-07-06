export default function TrustSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: '전문 수의학 지식 기반 AI 알고리즘',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      text: '안전한 데이터 보호 시스템',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      text: '언제 어디서나 모바일/웹 접근',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            믿을 수 있는 반려동물 건강 파트너
          </h2>

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-light text-primary rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-left">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
                  <p className="text-gray-600">데이터 보안</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                  <p className="text-gray-600">서비스 이용</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">30초</p>
                  <p className="text-gray-600">분석 시간</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}