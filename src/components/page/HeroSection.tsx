import Image from 'next/image';
import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const HeroSection = () => {
  return (
    <section className="relative text-center py-24 sm:py-40 min-h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://storage.googleapis.com/techfusion-alchemy-bucket/karin/Screenshot_7-7-2025_4633_www.instagram.com.jpeg" 
          layout="fill" 
          objectFit="cover" 
          alt="Evocative portrait of Karin Kedem" 
          className="opacity-40"
          data-ai-hint="musician portrait"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-headline font-bold text-primary tracking-tight">
          Karin Kedem
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Timeless. Colourful. Cultured.
        </p>
        <div className="flex justify-center items-center space-x-6 mt-8">
          <a href="https://www.instagram.com/karinkhalina/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"><Instagram className="h-6 w-6" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"><TikTokIcon className="h-6 w-6" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"><Twitter className="h-6 w-6" /></a>
          <a href="https://www.youtube.com/@karinkhalinakedem749" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"><Youtube className="h-6 w-6" /></a>
          <a href="https://www.facebook.com/profile.php?id=100011322781548" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"><Facebook className="h-6 w-6" /></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;