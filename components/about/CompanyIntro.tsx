export default function CompanyIntro() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-logo text-gray-900 mb-6">
            Mari Father
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            펫테크 전문 기업
          </p>
          
          <div className="bg-white rounded-3xl p-10 shadow-lg mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">회사명</h3>
                <p className="text-gray-600 mb-4">Mari Father (마리파더)</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">업종</h3>
                <p className="text-gray-600 mb-4">펫테크 전문 기업</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">핵심사업</h3>
                <p className="text-gray-600 mb-4">AI 기반 반려동물 건강관리 서비스</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">대표 서비스</h3>
                <p className="text-gray-600">오래오래 - AI 반려동물 건강관리 플랫폼</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Mari Father는 최신 AI 기술과 수의학 전문 지식을 결합하여<br />
                반려동물의 건강관리를 혁신하는 펫테크 전문 기업입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}