"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MusicModal from './MusicModal';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface MusicLink {
  platform: string;
  url: string;
}

interface MusicData {
  id: number;
  title: string;
  artist: string;
  thumbnail: string;
  type: string; //either youtube or external or hybrid
  embedId?: string;
  links?: MusicLink[];
  aiHint: string;
  year: number;
  genre: string;
}

const musicData: MusicData[] = [
  {
    id: 1,
    title: 'Ngehlelwa Umoya',
    artist: 'Jaiva Zimnike',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/ngehlelwa-umoya.jpg',
    type: 'youtube',
    embedId: 'Tsk4jCHtYZk', // Example YouTube video ID
    aiHint: 'ngehlelwa umoya',
    year: 2016,
    genre: 'Maskandi, Afro Gospel'
  },
  {
    id: 2,
    title: 'Isikhiye Sempilo',
    artist: 'Jaiva Zimnike',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/isikhiye-sempilo.jpg',
    type: 'youtube',
    embedId: '-oca8xbsZUU', // Example YouTube video ID
    aiHint: 'isikhiye sempilo',
    year: 2016,
    genre: 'Maskandi, Afro Gospel'
  },
  {
    id: 3,
    title: 'Now or Never',
    artist: 'DJ Chronic Style, Jaiva Zimnike',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/now-or-never.jpg',
    type: 'youtube',
    embedId: 'TUzltsVpRk0', // Example YouTube video ID
    aiHint: 'now or never',
    year: 2017,
    genre: 'Dance, House'
  },
  {
    id: 4,
    title: 'Move On',
    artist: 'Imasterz',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/move-on.png',
    type: 'external',
    links: [
      {
        platform: 'Smartlink',
        url: 'https://smartklix.com/smartlink/?id=574876b4&c=y'
      }
    ],
    aiHint: 'now or never',
    year: 2018,
    genre: 'Deep House, Dance, House'
  },
  {
    id: 5,
    title: 'As Long As I Live',
    artist: 'Dinkie',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/IMG-20210407-WA0000.jpg',
    type: 'youtube',
    embedId: 'YSIZVC-d7MA', // Example YouTube video ID
    aiHint: 'as long as I live song',
    year: 2019,
    genre: 'Jazz-Soul'
  },
  {
    id: 6,
    title: 'Wathi Uyosebenza',
    artist: 'Jaiva Zimnike',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/wathi-uyosebenza.jpeg',
    type: 'external',
    links: [
      {
        platform: 'Apple Music',
        url: 'https://music.apple.com/us/song/wathi-uyosebenza-feat-karin-kedem/1599291380'
      }
    ],
    aiHint: 'wathi uyosebenza',
    year: 2020,
    genre: 'Maskandi'
  },
  {
    id: 7,
    title: 'Summer Rain',
    artist: 'DJ Lation, Cristian I.G. Alvarez, Thee Exclusives',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/summer-rain.jpeg',
    type: 'external',
    links: [
      { platform: 'Songwhip', url: 'https://songwhip.com/djlation/summer-rain' }
    ],
    aiHint: 'summer rain',
    year: 2023,
    genre: 'Dance'
  },
  {
    id: 8,
    title: 'Sesbuyile',
    artist: 'Jaiva Zimnike, AmaAk47',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/Sesbuyile.jpg',
    type: 'external',
    links: [
      { platform: 'Spotify', url: 'https://open.spotify.com/track/3biyfoeDqMg9YSZOsWsFlg?si=QEHnjmFbQSGsGb8t1bhm5Q' },
    ],
    aiHint: 'sesbuyile',
    year: 2022,
    genre: 'Gqom, Kwaito Fusion'
  },
  {
    id: 9,
    title: 'Running',
    artist: 'DJ SoniqT, Sibah Musiq, LaMos Musiq',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/running.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/runnung-soniq-t-featuring-karin-kedemsibah-musiq-lamos-musiq' },
    ],
    embedId: "pe_qBzBedWE",
    aiHint: 'running',
    year: 2023,
    genre: 'Afro-Deep, House'
  },
  {
    id: 10,
    title: 'Life',
    artist: 'DJ SoniqT, DJ Coolio',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/life.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/life-soniq-t-dj-coolio-featuring-karin-kedem' },
    ],
    embedId: "KADP-HJd6jk",
    aiHint: 'running',
    year: 2023,
    genre: 'Afro-Deep, House, Kwaito-House'
  },
  {
    id: 11,
    title: 'On My Knees',
    artist: 'Frank Petros',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/on-my-knees.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Spotify', url: 'https://open.spotify.com/track/4Xq2gXG3w9tcgwVwQsHhkE?si=99ni4oLAQRCpy3H5J5CAxw' },
    ],
    embedId: "TfrrRNrUorM",
    aiHint: 'running',
    year: 2023,
    genre: 'Ballad'
  },
  {
    id: 12,
    title: 'Lollipops',
    artist: 'Dinkie, Tall Baby Mellow, Cristian I.G. Alvarez',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/lollipops.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/lollipops' },
    ],
    embedId: "-J2RX2P14Dw",
    aiHint: 'running',
    year: 2023,
    genre: 'Maskandi, Afro Gospel'
  },
  {
    id: 13,
    title: 'Masihlanganeni / Unite',
    artist: 'Songqongqo',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/unite.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/unite-masihlanganeni' },
    ],
    embedId: "WkVjHMJTTds",
    aiHint: 'running',
    year: 2024,
    genre: 'Maskandi, Afro Gospel'
  },
  {
    id: 14,
    title: 'Izimbali',
    artist: 'Chris Nino, Sibah Musiq',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/IMG-20241119-WA0008.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/izimbali' },
    ],
    embedId: "3APabGq7ZDk",
    aiHint: 'running',
    year: 2024,
    genre: 'Afro Soul'
  },
  {
    id: 15,
    title: 'Nothing Can Stop Us',
    artist: 'Blaq Kiid',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/nothing-can-stop-us.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/izimbali' },
    ],
    embedId: "b5vL57NihTU",
    aiHint: 'running',
    year: 2024,
    genre: 'Trap Soul'
  },
  {
    id: 16,
    title: 'More Life Less Rules',
    artist: 'Chris Nino',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/more-life-less-rules.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/more-life-chrsnino' },
    ],
    embedId: "0Ro8FpFuusg",
    aiHint: 'running',
    year: 2024,
    genre: 'Alternative Hip-Hop'
  },
  {
    id: 17,
    title: 'Magic Touch',
    artist: 'Chris Nino',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/magic-touch.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/magic-touch-chrsnino' },
      { platform: 'Ditto(alt)', url: 'https://ditto.fm/magic-touch-karin-kedem'}
    ],
    embedId: "FoniSVP7Od8",
    aiHint: 'running',
    year: 2024,
    genre: 'R&B, Electronic Fusion'
  },
  {
    id: 18,
    title: 'Dance All Night',
    artist: 'Sibah Musiq, Melsaw',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/dance-all-night.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://ditto.fm/dance-all-night-sibah-musiq' },
    ],
    embedId: "G3nZDO0b2eU",
    aiHint: 'running',
    year: 2024,
    genre: 'Amapiano, Groove'
  },
  {
    id: 19,
    title: 'Liphupho',
    artist: 'Lungza G',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/liphupho.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://soldistro.Ink.to/iKhweziLokusa!share' },
    ],
    embedId: "1fwn4fPUKJ4",
    aiHint: 'running',
    year: 2024,
    genre: 'Afrohouse, Ambient Chill'
  },
  {
    id: 20,
    title: 'Sthandwa Sami',
    artist: 'Maqhinga Hadebe',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/sthandwa-sami.jpg',
    type: 'hybrid',
    links: [
      { platform: 'Ditto', url: 'https://song.link/sthandwasami' },
    ],
    embedId: "rYK5EtERtRA",
    aiHint: 'running',
    year: 2025,
    genre: 'Maskandi, Afro Soul'
  },
  {
    id: 21,
    title: "I'm Next",
    artist: 'Dinkie',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/placeholder.png',
    type: 'youtube',
    embedId: "YWUmF%LJT-4",
    aiHint: 'running',
    year: 2025,
    genre: 'House, Pop Fusion'
  },
  {
    id: 22,
    title: "Prince",
    artist: 'Tsumba',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-10%20at%2009.52.41_0e07fb6b.jpg',
    type: 'hybrid',
    links: [
      { platform: "Ditto", url: "https://ditto.fm/prince-tsumba" }
    ],
    embedId: "bMp4r4HdSfI",
    aiHint: 'running',
    year: 2025,
    genre: 'House, Afro-Experimental, Alt-Hop'
  },
  {
    id: 23,
    title: "Yasho",
    artist: 'Sibah Musiq',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/yasho.jpg',
    type: 'youtube',
    embedId: "JVFwGEOZBss",
    aiHint: 'running',
    year: 2025,
    genre: 'Amapiano'
  },
  {
    id: 24,
    title: "Tanzen",
    artist: 'Fey M',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/tanzen.jpg',
    type: 'external',
    links: [
      { platform: "DistroKid", url: "https://distrokid.com/hyperfollow/feym1/tanzen-feat-karin-kedem-radio-edit" }
    ],
    aiHint: 'running',
    year: 2025,
    genre: 'Electro House, Global Dance'
  },
  {
    id: 25,
    title: "My Loved One",
    artist: 'Size 10',
    thumbnail: 'https://storage.googleapis.com/techfusion-alchemy-bucket/karin/my%20loved%20one.jpg',
    type: 'youtube',
    embedId: "2QH1eCWTDAQ",
    aiHint: 'my loved one',
    year: 2025,
    genre: 'Maskandi, Soul'
  },
];

const MusicGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<MusicData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterArtist, setFilterArtist] = useState('all');
  const [filterYear, setFilterYear] = useState('all');
  const [filterGenre, setFilterGenre]=useState('all');
  const [visibleSongsCount, setVisibleSongsCount] = useState(6);
  const sortedData: MusicData[]  = musicData.sort((a, b)=> b.id - a.id);
  const openModal = (song: MusicData) => {
    setSelectedSong(song);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSong(null);
    setIsModalOpen(false);
  };

  const filteredMusic = useMemo(() => {
    let filtered = sortedData;

    if (searchTerm) {
      filtered = filtered.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.genre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== 'all') {
      filtered = filtered.filter(song => song.type === filterType);
    }

    if (filterArtist !== 'all') {
      filtered = filtered.filter(song => song.artist.includes(filterArtist));
    }

    if (filterYear !== 'all') {
      filtered = filtered.filter(song => song.year === parseInt(filterYear));
    }
    if (filterGenre !== 'all'){
      filtered = filtered.filter(song => song.genre.includes(filterGenre));
    }

    return filtered;
  }, [searchTerm, filterType, filterArtist, filterYear, filterGenre]);

  const displayedMusic = filteredMusic.slice(0, visibleSongsCount);
  const handleSeeMore = () => {
    setVisibleSongsCount(prevCount => prevCount + 6);
  };

  // Get unique artists and years for filter options
  const uniqueArtists = useMemo(() => {
    const artists = new Set<string>();
    sortedData.forEach(song => {
      song.artist.split(', ').forEach(artist => artists.add(artist.trim()));
    });
    return ['all', ...Array.from(artists).sort()];
  }, []);

  const uniqueYears = useMemo(() => {
    const years = new Set<number>();
    sortedData.forEach(song => years.add(song.year));
    return ['all', ...Array.from(years).sort((a, b) => b - a).map(String)];
  }, []);

  const uniqueGenres = useMemo(() => {
    const genres = new Set<string>();
    sortedData.forEach(song => {
      song.genre.split(', ').forEach(genre => genres.add(genre.trim()));
    });
    return ['all', ...Array.from(genres).sort((a, b) => a.localeCompare(b))];
  }, [])

  return (
    <section id="music" className="py-16 sm:py-24">
      <h2 className="text-4xl sm:text-5xl font-headline font-bold text-center text-primary mb-16">Featured On</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search by title or artist..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleSongsCount(6); // Reset visible count on search
          }}
          className="w-full sm:w-1/3"
        />
        <Select
          value={filterType}
          onValueChange={(value) => {
            setFilterType(value);
            setVisibleSongsCount(6); // Reset visible count on filter change
          }}
        >
          <SelectTrigger className="w-full sm:w-1/4">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="youtube">YouTube</SelectItem>
            <SelectItem value="external">External Link</SelectItem>
            <SelectItem value="hybrid">Hybrid (YT + External)</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={filterArtist}
          onValueChange={(value) => {
            setFilterArtist(value);
            setVisibleSongsCount(6); // Reset visible count on filter change
          }}
        >
          <SelectTrigger className="w-full sm:w-1/4">
            <SelectValue placeholder="Filter by Artist" />
          </SelectTrigger>
          <SelectContent>
            {uniqueArtists.map(artist => (
              <SelectItem key={artist} value={artist}>{artist === 'all' ? 'All Artists' : artist}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={filterYear}
          onValueChange={(value) => {
            setFilterYear(value);
            setVisibleSongsCount(6); // Reset visible count on filter change
          }}
        >
          <SelectTrigger className="w-full sm:w-1/5">
            <SelectValue placeholder="Filter by Year" />
          </SelectTrigger>
          <SelectContent>
            {uniqueYears.map(year => (
              <SelectItem key={year} value={year}>{year === 'all' ? 'All Years' : year}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={filterGenre}
          onValueChange={(value) => {
            setFilterGenre(value);
            setVisibleSongsCount(6); // Reset visible count on filter change
          }}
        >
          <SelectTrigger className="w-full sm:w-1/5">
            <SelectValue placeholder="Filter by Genre" />
          </SelectTrigger>
          <SelectContent>
            {uniqueGenres.map(genre => (
              <SelectItem key={genre} value={genre}>{genre === 'all' ? 'All Genres' : genre}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
        {displayedMusic.map((song) => (
          <Card 
            key={song.id} 
            className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/30 bg-card/50 backdrop-blur-sm cursor-pointer"
            onClick={() => openModal(song)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <Image 
                  src={song.thumbnail} 
                  fill
                  style={{ objectFit: "cover" }}
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

      {filteredMusic.length > visibleSongsCount && (
        <div className="text-center mt-12">
          <Button onClick={handleSeeMore} variant="secondary">
            See More ({filteredMusic.length - visibleSongsCount} remaining)
          </Button>
        </div>
      )}

      <MusicModal isOpen={isModalOpen} onClose={closeModal} song={selectedSong} />
    </section>
  );
};

export default MusicGallery;