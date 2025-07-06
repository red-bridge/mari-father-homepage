import ServiceOverview from '@/components/service/ServiceOverview'
import ServiceFeatures from '@/components/service/ServiceFeatures'
import WhyNeeded from '@/components/service/WhyNeeded'
import TargetAudience from '@/components/service/TargetAudience'

export default function ServicePage() {
  return (
    <>
      <ServiceOverview />
      <ServiceFeatures />
      <WhyNeeded />
      <TargetAudience />
    </>
  )
}