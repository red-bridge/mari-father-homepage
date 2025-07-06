export default function TechnicalExcellence() {
  const technicalFeatures = [
    {
      title: 'AI 엔진',
      description: '최신 GPT 기술 활용',
      details: '수의학 전문 지식으로 학습된 AI 모델이 정확한 분석을 제공합니다',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: '보안',
      description: '개인정보보호법 완전 준수',
      details: '모든 데이터는 암호화되어 안전하게 보호됩니다',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: '정확도',
      description: '지속적인 학습으로 분석 정확도 향상',
      details: '최신 수의학 연구 결과를 반영하여 지속적으로 업데이트됩니다',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: '호환성',
      description: '다양한 병원 검사 양식 지원',
      details: '국내 대부분의 동물병원 혈액검사 결과를 분석할 수 있습니다',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
  ]

  const stats = [
    { number: '99.8%', label: '정확도' },
    { number: '30초', label: '분석 시간' },
    { number: '24/7', label: '서비스 가동' },
    { number: '256bit', label: '암호화' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            기술적 우수성
          </h2>
          <p className="text-lg text-gray-600">
            최첨단 기술로 만들어진 신뢰할 수 있는 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {technicalFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-light text-primary rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {feature.description}
                  </p>
                  <p className="text-gray-600">
                    {feature.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-3xl p-10 text-white">
          <h3 className="text-2xl font-bold text-center mb-10">
            숫자로 보는 오래오래
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}