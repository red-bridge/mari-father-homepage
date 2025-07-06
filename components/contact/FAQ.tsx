'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: '어떤 형식의 혈액검사 PDF를 지원하나요?',
      answer: '대부분의 동물병원에서 발행하는 표준 혈액검사 PDF를 지원합니다. 주요 검사 장비 및 병원 양식을 지원하며, 지속적으로 호환성을 확대하고 있습니다.',
    },
    {
      question: '분석 결과는 얼마나 정확한가요?',
      answer: '수의학 전문 지식 기반 AI로 높은 정확도를 자랑하지만, 수의사 진료를 대체하지는 않습니다. 참고 자료로 활용하시고, 정확한 진단과 치료는 반드시 수의사와 상담하세요.',
    },
    {
      question: '개인정보는 안전하게 보호되나요?',
      answer: '개인정보보호법을 완전히 준수하며, 모든 데이터는 256bit 암호화로 안전하게 보호됩니다. 업로드된 파일과 분석 결과는 안전한 클라우드 서버에 저장됩니다.',
    },
    {
      question: '모바일에서도 사용할 수 있나요?',
      answer: '네, 모바일 웹과 앱에서 모두 이용 가능합니다. 반응형 웹 디자인으로 어떤 기기에서든 편리하게 사용할 수 있습니다.',
    },
    {
      question: '비용은 얼마인가요?',
      answer: '기본 분석은 무료로 제공되며, 추가 기능은 합리적인 요금으로 이용할 수 있습니다. 자세한 요금제는 서비스 페이지에서 확인하실 수 있습니다.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-lg text-gray-600">
              오래오래 서비스에 대해 자주 묻는 질문들입니다
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-primary text-white rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4">
                더 궁금한 점이 있으신가요?
              </h3>
              <p className="text-primary-light mb-6">
                위에서 답을 찾지 못하셨다면 직접 문의해 주세요
              </p>
              <a
                href="mailto:support@mari-father.com"
                className="inline-block bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                support@mari-father.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}