import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            우리 아이 건강, 이제 더 쉽고 정확하게
          </h2>
          <p className="text-xl text-primary-light mb-10">
            지금 바로 오래오래와 함께 반려동물의 건강을 지켜주세요
          </p>
          
          <Link
            href="/service"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
          >
            지금 시작하기
          </Link>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>무료 체험 가능</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>신용카드 불필요</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>즉시 분석 시작</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}