import React from 'react';
import Image from 'next/image'

const verseData = [
  {
    id: 1,
    lyric: "I'm running, running, chasing the rhythm.",
    songTitle: "Running"
  },
  {
    id: 2,
    lyric: "Warte nicht auf deine träume. Laufen so schnell du kannst.(Don't wait for your dreams, run towards them!)",
    songTitle: "Now or Never"
  },
  {
    id: 3,
    lyric: "Life is a Song. And there's Magic Everywhere.",
    songTitle: "Life"
  }
];

const VerseHighlights = () => {
  return (
    <section id="verses" className="py-16 sm:py-24">
      <h2 className="text-4xl sm:text-5xl font-headline font-bold text-center text-primary mb-16">Verse Highlights</h2>
      <div className="relative overflow-hidden">
        <Image
          src="https://storage.googleapis.com/techfusion-alchemy-bucket/karin/Screenshot_7-7-2025_4717_www.instagram.com.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Evocative portrait of Karin Kedem"
          className="z-0 opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
        {/* Make this content relative and layered above the image */}
        <div className="relative z-20 space-y-16 max-w-3xl mx-auto">
          {verseData.map((verse) => (
            <blockquote key={verse.id} className="text-center">
              <p className="text-2xl sm:text-3xl font-headline italic text-foreground/80 leading-loose">
                &ldquo;{verse.lyric}&rdquo;
              </p>
              <cite className="block mt-4 text-md text-muted-foreground not-italic">
                &mdash; from &ldquo;{verse.songTitle}&rdquo;
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerseHighlights;