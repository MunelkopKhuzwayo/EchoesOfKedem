import { Separator } from '@/components/ui/separator';
import Header from '@/components/page/Header';
import HeroSection from '@/components/page/HeroSection';
import MusicGallery from '@/components/page/MusicGallery';
import VerseHighlights from '@/components/page/VerseHighlights';
import Footer from '@/components/page/Footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <MusicGallery />
          <Separator className="my-16 sm:my-24 bg-border/20" />
          <VerseHighlights />
        </main>
        <Footer />
      </div>
    </div>
  );
}
