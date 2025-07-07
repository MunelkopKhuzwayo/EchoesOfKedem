"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MusicModal from './MusicModal';
import { useState } from 'react';

interface MusicLink {
  platform: string;
  url: string;
}

interface MusicData {
  id: number;
  title: string;
  artist: string;
  thumbnail: string;
  type: string; //either youtube or external
  embedId?: string;
  links?: MusicLink[];
  aiHint: string;
  year: number;
}

const musicData: MusicData[] = [
  {
    id: 1,
    title: 'Ngehlelwa Umoya',
    artist: 'Jaiva Zimnike',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'youtube',
    embedId: 'Tsk4jCHtYZk', // Example YouTube video ID
    aiHint: 'ngehlelwa umoya',
    year: 2016
  },
  {
    id: 2,
    title: 'Isikhiye Sempilo',
    artist: 'Jaiva Zimnike',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'youtube',
    embedId: '-oca8xbsZUU', // Example YouTube video ID
    aiHint: 'isikhiye sempilo',
    year: 2016
  },
  {
    id: 3,
    title: 'Now or Never',
    artist: 'DJ Chronic Style, Jaiva Zimnike',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'youtube',
    embedId: 'R5EaAZ5656c', // Example YouTube video ID
    aiHint: 'now or never',
    year: 2016
  },
  {
    id: 4,
    title: 'Move On',
    artist: 'Imasterz',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'external',
    links: [
      {
        platform: 'Smartlink',
        url: 'https://smartklix.com/smartlink/?id=574876b4&c=y'
      }
    ],
    aiHint: 'now or never',
    year: 2016
  },
  {
    id: 5,
    title: 'As Long As I Live',
    artist: 'Dinkie',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'youtube',
    embedId: 'YSIZVC-d7MA', // Example YouTube video ID
    aiHint: 'as long as I live song',
    year: 2016
  },
  {
    id: 6,
    title: 'Wathi Uyosebenza',
    artist: 'Jaiva Zimnike',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'external',
    links: [
      {
        platform: 'Apple Music',
        url: 'https://music.apple.com/us/song/wathi-uyosebenza-feat-karin-kedem/1599291380'
      }
    ],
    aiHint: 'wathi uyosebenza',
    year: 2016
  },
  {
    id: 7,
    title: 'Summer Rain',
    artist: 'DJ Lation, Cristian I.G. Alvarez, Thee Exclusives',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'external',
    links: [
      { platform: 'Songwhip', url: 'https://songwhip.com/djlation/summer-rain' },
      { platform: 'FFM', url: 'https://ffm.to/7mp4z3x' }
    ],
    aiHint: 'summer rain',
    year: 2016
  },
  {
    id: 7,
    title: 'Summer Rain',
    artist: 'DJ Lation, Cristian I.G. Alvarez, Thee Exclusives',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'external',
    links: [
      { platform: 'Songwhip', url: 'https://songwhip.com/djlation/summer-rain' },
      { platform: 'FFM', url: 'https://ffm.to/7mp4z3x' }
    ],
    aiHint: 'summer rain',
    year: 2016
  },
  {
    id: 8,
    title: 'Sesbuyile',
    artist: 'Jaiva Zimnike, AmaAk47',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'external',
    links: [
      { platform: 'Spotify', url: 'https://open.spotify.com/track/3biyfoeDqMg9YSZOsWsFlg?si=QEHnjmFbQSGsGb8t1bhm5Q' },
    ],
    aiHint: 'sesbuyile',
    year: 2016
  },
  {
    id: 9,
    title: 'Running',
    artist: 'DJ SoniqT, Sibah Musiq, LaMos Musiq',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/runnung-soniq-t-featuring-karin-kedemsibah-musiq-lamos-musiq' },
    ],
    embedId: "pe_qBzBedWE",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 10,
    title: 'Life',
    artist: 'DJ SoniqT, DJ Coolio',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/life-soniq-t-dj-coolio-featuring-karin-kedem' },
    ],
    embedId: "KADP-HJd6jk",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 11,
    title: 'On My Knees',
    artist: 'Frank Petros',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Spotify', url: 'https://open.spotify.com/track/4Xq2gXG3w9tcgwVwQsHhkE?si=99ni4oLAQRCpy3H5J5CAxw' },
    ],
    embedId: "TfrrRNrUorM",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 12,
    title: 'Lollipops',
    artist: 'inkie, Tall Baby Mellow, Cristian I.G. Alvarez',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/lollipops' },
    ],
    embedId: "-J2RX2P14Dw",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 13,
    title: 'Masihlanganeni / Unite',
    artist: 'Songqongqo',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/unite-masihlanganeni' },
    ],
    embedId: "WkVjHMJTTds",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 14,
    title: 'Izimbali',
    artist: 'Chrs Nino, Sibah Music',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/izimbali' },
    ],
    embedId: "3APabGq7ZDk",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 15,
    title: 'Nothing Can Stop Us',
    artist: 'Blaq Kiid',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/izimbali' },
    ],
    embedId: "b5vL57NihTU",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 16,
    title: 'More Life Less Rules',
    artist: 'Chrs Nino',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/more-life-chrsnino' },
    ],
    embedId: "0Ro8FpFuusg",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 17,
    title: 'Magic Touch',
    artist: 'Chrs Nino',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/magic-touch-chrsnino' },
      { platform: 'Ditto(alt)', url: 'https://ditto.fm/magic-touch-karin-kedem'}
    ],
    embedId: "FoniSVP7Od8",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 18,
    title: 'Dance All Night',
    artist: 'Sibah Music, Melsaw',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/dance-all-night-sibah-musiq' },
    ],
    embedId: "G3nZDO0b2eU",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 19,
    title: 'Liphupho',
    artist: 'Lungza G',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://soldistro.Ink.to/iKhweziLokusa!share' },
    ],
    embedId: "1fwn4fPUKJ4",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 20,
    title: 'Sthandwa Sami',
    artist: 'Maqhinga Hadebe',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://song.link/sthandwasami' },
    ],
    embedId: "rYK5EtERtRA",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 21,
    title: "I'm Next",
    artist: 'Dinkie',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'youtube',
    embedId: "YWUmF%LJT-4",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 22,
    title: "Prince",
    artist: 'Tsumba',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'hybrid',
    links: [
      { platform: "Ditto", url: "https://ditto.fm/prince-tsumba" }
    ],
    embedId: "bMp4r4HdSfI",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 23,
    title: "Yasho",
    artist: 'Sibah Musiq',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'youtube',
    embedId: "JVFwGEOZBss",
    aiHint: 'running',
    year: 2016
  },
  {
    id: 24,
    title: "Tanzen",
    artist: 'Fey M',
    thumbnail: 'https://placehold.co/600x600.png',
    type: 'youtube',
    links: [
      { platform: "DistroKid", url: "https://distrokid.com/hyperfollow/feym1/tanzen-feat-karin-kedem-radio-edit" }
    ],
    embedId: "JVFwGEOZBss",
    aiHint: 'running',
    year: 2016
  },
];

const MusicGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<MusicData | null>(null);

  const openModal = (song: MusicData) => {
    setSelectedSong(song);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSong(null);
    setIsModalOpen(false);
  };

  return (
    <section id="music" className="py-16 sm:py-24">
      <h2 className="text-4xl sm:text-5xl font-headline font-bold text-center text-primary mb-16">Featured On</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
        {musicData.map((song) => (
          <Card 
            key={song.id} 
            className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/30 bg-card/50 backdrop-blur-sm cursor-pointer"
            onClick={() => openModal(song)}
          >
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
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a onClick={(e) => { e.stopPropagation(); openModal(song); }}>
                    Listen Now
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <MusicModal isOpen={isModalOpen} onClose={closeModal} song={selectedSong} />
    </section>
  );
};

export default MusicGallery;