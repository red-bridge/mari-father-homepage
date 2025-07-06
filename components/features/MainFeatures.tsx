'use client'

import { useState } from 'react'

export default function MainFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 0,
      title: '스마트 혈액검사 분석',
      subtitle: 'PDF 자동 데이터 추출 및 AI 분석',
      description: '복잡한 수치를 이해하기 쉬운 설명으로 변환',
      details: [
        '다양한 PDF 형식 지원',
        '정상/주의/위험 범위 자동 판별',
        '수의학 기준 정확한 해석',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 1,
      title: '건강 대시보드',
      subtitle: '반려동물별 건강 현황 통합 관리',
      description: '건강 상태 직관적 파악',
      details: [
        '시각화된 차트와 그래프',
        '시기별 건강 변화 트렌드 분석',
        '주요 지표 한눈에 모니터링',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '맞춤형 케어 가이드',
      subtitle: '개별 상황에 맞는 구체적 관리 방법 제안',
      description: '실행 가능한 건강관리 계획',
      details: [
        '영양 관리 권장사항',
        '운동량 조절 가이드',
        '정기검진 스케줄 알림',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '데이터 관리',
      subtitle: '체계적인 건강 기록 보관 및 활용',
      description: '언제든 필요한 건강 정보 접근',
      details: [
        '엑셀 파일 내보내기',
        '병원 방문용 리포트 생성',
        '안전한 클라우드 백업',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            주요 기능
          </h1>
          <p className="text-xl text-gray-600">
            오래오래가 제공하는 4가지 핵심 기능
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Feature Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`p-4 rounded-xl text-center transition-all ${
                  activeFeature === feature.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </button>
            ))}
          </div>

          {/* Feature Details */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`${activeFeature === feature.id ? 'block' : 'hidden'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-xl text-primary mb-4">
                      {feature.subtitle}
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-4">
                      {feature.details.map((detail, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <div className="text-primary scale-150">
                          {feature.icon}
                        </div>
                      </div>
                      <p className="text-gray-600 font-medium">
                        기능 스크린샷
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}