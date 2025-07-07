import Image from 'next/image';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const HeroSection = () => {
  return (
    <section className="relative text-center py-24 sm:py-40 min-h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://placehold.co/1600x900.png" 
          layout="fill" 
          objectFit="cover" 
          alt="Evocative portrait of Karin Kedem" 
          className="opacity-20"
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
          An echo in the static, a voice that weaves through melody and memory. Karin Kedem's features are whispers of soul, turning tracks into timeless stories.
        </p>
        <div className="flex justify-center items-center space-x-6 mt-8">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"><Instagram className="h-6 w-6" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"><TikTokIcon className="h-6 w-6" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"><Twitter className="h-6 w-6" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"><Youtube className="h-6 w-6" /></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;