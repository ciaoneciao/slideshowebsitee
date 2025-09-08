import HeroSection from '@/components/HeroSection';
import LatestDrops from '@/components/LatestDrops';
import AboutSection from '@/components/AboutSection';
import PartnersSection from '@/components/PartnersSection';
import SubscribeSection from '@/components/SubscribeSection';
import PastProjectsSection from '@/components/PastProjectsSection';
import LinksSection from '@/components/LinksSection';

export default function Home() {
  return (
    <main className="relative">
      {/* Scroll target for home navigation */}
      <div id="top" className="absolute top-0" />
      
      {/* Hero Section - Full viewport height */}
      <div className="relative z-10">
        <HeroSection />
      </div>
      
      {/* Latest Drops - Recent releases */}
      <div className="relative z-10">
        <LatestDrops />
      </div>
      
      {/* About Section - 65lanta story */}
      <div className="relative z-10">
        <AboutSection />
      </div>
      
      {/* Partners Section - Industry partnerships */}
      <div className="relative z-10">
        <PartnersSection />
      </div>
      
      {/* Subscribe Section - Beat service CTA */}
      <div className="relative z-10">
        <SubscribeSection />
      </div>
      
      {/* Past Projects - Portfolio showcase */}
      <div className="relative z-10">
        <PastProjectsSection />
      </div>
      
      {/* Links & Contact - Social links and contact info */}
      <div className="relative z-10">
        <LinksSection />
      </div>
    </main>
  );
}
