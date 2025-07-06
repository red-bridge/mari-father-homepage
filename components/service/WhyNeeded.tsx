export default function WhyNeeded() {
  const problems = [
    {
      icon: '😵',
      text: '복잡한 혈액검사 수치',
    },
    {
      icon: '🤔',
      text: '이해하기 어려운 의료 용어',
    },
    {
      icon: '⏰',
      text: '수의사 상담 시간 부족',
    },
  ]

  const solutions = [
    {
      icon: '🤖',
      text: 'AI가 쉽고 정확하게 해석',
    },
    {
      icon: '📊',
      text: '실행 가능한 조치 방안 제공',
    },
    {
      icon: '💡',
      text: '24시간 즉시 분석 가능',
    },
  ]

  const results = [
    {
      title: '조기 발견',
      description: '질병의 조기 발견으로 치료 성공률 향상',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: '예방 중심',
      description: '사전 예방으로 건강한 삶 유지',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: '의료비 절약',
      description: '조기 관리로 장기적 의료비 절감',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            왜 오래오래가 필요한가요?
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Problem → Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-red-900 mb-6">문제점</h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-3xl">{problem.icon}</span>
                    <p className="text-gray-700">{problem.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6">해결책</h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-3xl">{solution.icon}</span>
                    <p className="text-gray-700">{solution.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-center text-neutral-dark mb-10">
              오래오래를 통한 결과
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {result.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {result.title}
                  </h4>
                  <p className="text-gray-600">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}