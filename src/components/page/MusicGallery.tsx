import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

const MusicGallery = () => {
  return (
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
  );
};

export default MusicGallery;