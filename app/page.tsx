import Hero from '@/components/home/hero';
import FeaturedCategories from '@/components/home/featured-categories';
import BestSellers from '@/components/home/best-sellers';
import Benefits from '@/components/home/benefits';
import Newsletter from '@/components/home/newsletter';
import Testimonials from '@/components/home/testimonials';
import LatestPosts from '@/components/home/latest-posts';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="space-y-16 md:space-y-24 py-8 md:py-16">
        <FeaturedCategories />
        <BestSellers />
        <Benefits />
        <Testimonials />
        <LatestPosts />
        <Newsletter />
      </div>
    </div>
  );
}