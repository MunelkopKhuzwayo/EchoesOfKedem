"use client";

import {useRef, useState, useEffect, useCallback} from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '../ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const imageData = [
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.57.51_4f68c0f1.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.57.57_b7461050.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.57.51_4f68c0f1.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.57.57_b7461050.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.58.14_3478efef.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.58.34_1bdbae8c.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.58.34_b4e99901.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.58.57_0566c6cb.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.58.57_f27fa776.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.59.20_1d0a6143.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2022.59.20_66312338.jpg",
  "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/WhatsApp%20Image%202025-07-09%20at%2023.00.05_3c16a606.jpg"
]

const verseData = [
  {
    id: 1,
    lyric: "The Sounds of my Soul",
    songTitle: "Yasho",
  },
  {
    id: 2,
    lyric: "We are Swimming against the Stream",
    songTitle: "More Life Less Rules",
  },
  {
    id: 3,
    lyric: "Give me Snowflakes in Summer",
    songTitle: "Magic Touch",
  },
  {
    id: 4,
    lyric:  `No need to hide, No need to run, No need to cry, Life is a Song and there's Magic everywhere`,
    songTitle: "Life",
  },
  {
    id: 5,
    lyric: "Imfundo ibalulekile empilweni yomuntu",
    songTitle: "Ngehlelwa Umoya",
  },
];

// Helper to shuffle an array
const shuffleArray = (array: any[]) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};

const VerseHighlights = () => {
  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [randomizedImageUrls, setRandomizedImageUrls] = useState<string[]>([]);

  // Extract all image URLs from verseData
  const allImageUrls = useRef(imageData);

  useEffect(() => {
    // Initialize randomizedImageUrls with a shuffled version of all image URLs
    setRandomizedImageUrls(shuffleArray([...allImageUrls.current]));
  }, []); // Run only once on mount

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      // If the carousel loops back to the first item (index 0), reshuffle images
      // Embla carousel fires 'select' on initialization as well, so this will run once
      // to initially set the images, and then again when the loop completes.
      if (index === 0) {
        setRandomizedImageUrls(shuffleArray([...allImageUrls.current]));
      }
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect); // Also re-shuffle on re-initialization

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="verses" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <header className="text-center my-12 md:my-16">
        <h1 className="text-4xl sm:text-5xl font-headline font-bold text-center text-primary mb-16 relative z-20">Verse Highlights</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Handpicked lines from the songs that resonate most with me.</p> 
      </header>
      <Carousel
        setApi={setEmblaApi} // Use setApi to get the Embla API instance
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        onMouseEnter={() => plugin.current.stop}
        onMouseLeave={() => plugin.current.play}
        opts={{ loop: true }} // Ensure looping is enabled for "rotation"
      >
        <CarouselContent>
          {verseData.map((verse, index) => ( // Get index from map
            <CarouselItem key={verse.id}>
              <div className="relative w-full h-[500px] sm:h-[600px] flex items-center justify-center">
                {/* Background image */}
                <Image
                  src={randomizedImageUrls[index % randomizedImageUrls.length] || "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/placeholder.png"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  alt={`Background for ${verse.songTitle}`}
                  className="z-0 opacity-90 filter brightness-95"
                  priority
                />
            
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-4 z-30">
                  <button
                    className="bg-transparent text-white text-3xl hover:text-primary transition"
                    onClick={() => emblaApi?.scrollPrev()}
                  >
                    ◀
                  </button>
                  <button
                    className="bg-transparent text-white text-3xl hover:text-primary transition"
                    onClick={() => emblaApi?.scrollNext()}
                  >
                    ▶
                  </button>
                </div>
            
                {/* Quote content */}
                <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
                  <div className="w-full max-w-4xl bg-card/60 rounded-lg backdrop-blur-sm shadow-xl p-6 text-center">
                    <p className="text-3xl sm:text-4xl font-headline italic text-white text-primary-foreground leading-snug drop-shadow-md">
                      &ldquo;{verse.lyric}&rdquo;
                    </p>
                    <cite className="block mt-6 text-lg text-white text-primary-foreground font-semibold not-italic opacity-90">
                      &mdash; from &ldquo;{verse.songTitle}&rdquo;
                    </cite>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default VerseHighlights;