import Image from 'next/image';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
);

const musicData = [
  {
    id: 1,
    title: 'Midnight Bloom',
    artist: 'Orion\'s Belt',
    thumbnail: 'https://placehold.co/600x600.png',
    url: '#',
    aiHint: 'abstract nebula'
  },
  {
    id: 2,
    title: 'Faded Gold',
    artist: 'The Alchemists',
    thumbnail: 'https://placehold.co/600x600.png',
    url: '#',
    aiHint: 'liquid gold'
  },
  {
    id: 3,
    title: 'Dusk Hymn',
    artist: 'Lunaire',
    thumbnail: 'https://placehold.co/600x600.png',
    url: '#',
    aiHint: 'sunset horizon'
  },
  {
    id: 4,
    title: 'Velvet Echo',
    artist: 'Slow Tides',
    thumbnail: 'https://placehold.co/600x600.png',
    url: '#',
    aiHint: 'red velvet'
  },
  {
    id: 5,
    title: 'Porcelain Heart',
    artist: 'Glass Animals',
    thumbnail: 'https://placehold.co/600x600.png',
    url: '#',
    aiHint: 'cracked porcelain'
  },
  {
    id: 6,
    title: 'Teal Dreams',
    artist: 'Somber Sun',
    thumbnail: 'https://placehold.co/600x600.png',
    url: '#',
    aiHint: 'teal watercolor'
  },
];

const verseData = [
  {
    id: 1,
    lyric: "We paint our stories on the canvas of the night sky.",
    songTitle: "Midnight Bloom"
  },
  {
    id: 2,
    lyric: "A memory traced in the silence between heartbeats.",
    songTitle: "Velvet Echo"
  },
  {
    id: 3,
    lyric: "Chasing the sun until our shadows merge as one.",
    songTitle: "Dusk Hymn"
  }
];

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto flex justify-between items-center p-4">
             <a href="#" className="font-headline text-2xl font-bold text-primary">Kedem Echoes</a>
             <nav className="hidden md:flex items-center space-x-6">
                <a href="#music" className="text-sm font-medium hover:text-primary transition-colors">Music</a>
                <a href="#verses" className="text-sm font-medium hover:text-primary transition-colors">Verses</a>
                <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
             </nav>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
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

          {/* Music Gallery */}
          <section id="music" className="py-16 sm:py-24">
            <h2 className="text-4xl sm:text-5xl font-headline font-bold text-center text-primary mb-16">Featured On</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
              {musicData.map((song) => (
                <Card key={song.id} className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/30 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image 
                        src={song.thumbnail} 
                        layout="fill" 
                        objectFit="cover" 
                        alt={song.title} 
                        className="transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={song.aiHint}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-headline font-semibold text-primary">{song.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">with {song.artist}</p>
                      <Button asChild variant="link" className="px-0 mt-4 text-accent-foreground group-hover:text-primary">
                        <a href={song.url} target="_blank" rel="noopener noreferrer">
                          Listen Now
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-16 sm:my-24 bg-border/20" />

          {/* Verse Highlights */}
          <section id="verses" className="py-16 sm:py-24">
            <h2 className="text-4xl sm:text-5xl font-headline font-bold text-center text-primary mb-16">Verse Highlights</h2>
            <div className="space-y-16 max-w-3xl mx-auto">
              {verseData.map((verse) => (
                <blockquote key={verse.id} className="text-center">
                  <p className="text-2xl sm:text-3xl font-headline italic text-foreground/80 leading-loose">
                    &ldquo;{verse.lyric}&rdquo;
                  </p>
                  <cite className="block mt-4 text-md text-muted-foreground not-italic">&mdash; from &ldquo;{verse.songTitle}&rdquo;</cite>
                </blockquote>
              ))}
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer id="contact" className="text-center py-12 mt-16 border-t border-border/20">
          <h3 className="font-headline text-2xl text-primary">Get in Touch</h3>
          <p className="text-muted-foreground mt-2 mb-4">For bookings and inquiries, please reach out.</p>
          <a href="mailto:contact@karinkedem.com" className="text-accent-foreground font-semibold hover:underline underline-offset-4">
            contact@karinkedem.com
          </a>
          <p className="text-sm text-muted-foreground/60 mt-8">&copy; {new Date().getFullYear()} Kedem Echoes. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
