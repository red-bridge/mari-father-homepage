export default function ContactInfo() {
  const contacts = [
    {
      title: '서비스 이용 문의',
      email: 'support@mari-father.com',
      description: '서비스 사용법, 기술 지원',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: '사업 제휴 문의',
      email: 'business@mari-father.com',
      description: '사업 제휴, 미디어 문의',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            문의하기
          </h1>
          <p className="text-xl text-gray-600">
            궁금한 점이 있으시면 언제든지 연락해 주세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Website Info */}
          <div className="text-center mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-4.97 0-9-4.03-9-9s4.03-9 9-9" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">웹사이트</h2>
              <p className="text-lg text-primary font-semibold">mari-father.com</p>
            </div>
          </div>

          {/* Contact Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {contact.title}
                  </h3>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-lg text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    {contact.email}
                  </a>
                  <p className="text-gray-600 mt-3">
                    {contact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Guide */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              문의 유형별 안내
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">서비스 관련</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 서비스 이용 방법</li>
                  <li>• 기술적 문제</li>
                  <li>• 계정 관련 문의</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">사업 관련</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 파트너십 제안</li>
                  <li>• 미디어 문의</li>
                  <li>• 투자 관련</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}