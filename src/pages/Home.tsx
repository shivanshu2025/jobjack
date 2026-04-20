import HeroSection from '../components/HeroSection';
import CompanyLogos from '../components/CompanyLogos';
import CategorySection from '../components/CategorySection';
import FeaturedJobs from '../components/FeaturedJobs';
import RecentJobsSection from '../components/RecentJobsSection';
import InfoSection from '../components/InfoSection';
import BannerSection from '../components/BannerSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyLogos />
      <CategorySection />
      <FeaturedJobs />
      <RecentJobsSection />
      <InfoSection />
      <BannerSection />
      <TestimonialsSection />
    </>
  );
}
