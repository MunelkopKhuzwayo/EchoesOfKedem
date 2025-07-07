import React from 'react';

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

const VerseHighlights = () => {
  return (
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
  );
};

export default VerseHighlights;