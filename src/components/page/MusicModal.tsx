import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface MusicLink {
  platform: string;
  url: string;
}

interface MusicData {
  id: number;
  title: string;
  artist: string;
  thumbnail: string;
  type: string; //either it's youtube or external
  embedId?: string;
  links?: MusicLink[];
  aiHint: string;
}

interface MusicModalProps {
  isOpen: boolean;
  onClose: () => void;
  song: MusicData | null;
}

const MusicModal: React.FC<MusicModalProps> = ({ isOpen, onClose, song }) => {
  if (!song) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] aspect-video w-full p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>{song.title}</DialogTitle>
          <DialogDescription>Listen to {song.title} by {song.artist}</DialogDescription>
        </DialogHeader>
        {
          song.type === 'youtube' && song.embedId ? (
            <div className="relative w-full h-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${song.embedId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : song.type === 'external' && song.links && song.links.length > 0 ? (
            <div className="p-6 flex flex-col justify-center items-center h-full">
              <h3 className="text-2xl font-headline font-semibold text-primary mb-4">Where to Listen: {song.title}</h3>
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {song.links.map((link, index) => (
                  <Button asChild key={index} variant="outline" className="w-full">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      Listen on {link.platform}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <p>No playable content available for this song, but you can still check out the artist!</p>
              <Button onClick={onClose} className="mt-4">Close</Button>
            </div>
          )
        }
      </DialogContent>
    </Dialog>
  );
};

export default MusicModal;