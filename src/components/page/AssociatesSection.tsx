// /components/AssociatesSection.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaGlobe, FaTiktok, FaEnvelope, FaAddressBook } from 'react-icons/fa';

interface Associate {
  id: number;
  name: string;
  role: string;
  category: 'Producer' | 'Engineer' | 'Songwriter' | 'Musician' | 'Vocalist';
  imageUrl: string;
  bio: string;
  links: {
    website?: string;
    email?: string;
    bookings?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    tiktok?: string;
  };
}

// Props for sub-components
interface AssociateCardProps {
    associate: Associate;
    onCardClick: (associate: Associate) => void;
  }
  interface AssociateModalProps {
    associate: Associate;
    onClose: () => void;
  }

// 2. --- STATIC DATA & HELPERS ---
// In a real app, this would come from a CMS.
const associatesData: Associate[] = [
  {
    id: 1,
    name: "Sibah Musiq - Ekhaya Classic Records",
    role: "Sound Engineer",
    category: "Engineer",
    imageUrl: "https://storage.googleapis.com/techfusion-alchemy-bucket/karin/Logo%20Ekhaya.jpg",
    bio: "",
    links: {
      email: "sibahmusiq@gmail.com",
      bookings: "ekhayaclassicrecords@gmail.com",
      instagram: "https://www.instagram.com/sibahmusiq/",
      facebook: "https://www.facebook.com/sbongseni.langa.3",
      tiktok: "https://www.tiktok.com/@sibahmusiq",
      twitter: "https://twitter.com/sibahmusiq"
    },
  }
];

// Map link keys to their corresponding icons for dynamic rendering.
const iconMap: { [key: string]: React.ReactNode } = {
    website: <FaGlobe size={18} />,
    instagram: <FaInstagram size={18} />,
    twitter: <FaTwitter size={18} />,
    facebook: <FaFacebook size={18} />,
    email: <FaEnvelope size={18} />,
    bookings: <FaAddressBook size={18} />,
    tiktok: <FaTiktok size={18} />,
  };
  

// 3. --- NEW: THE MODAL COMPONENT ---
const modalDropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { duration: 0.2, type: "spring" as const, damping: 25, stiffness: 500 } },
    exit: { y: "100vh", opacity: 0 },
  };
  
  const AssociateModal = ({ associate, onClose }: AssociateModalProps) => {
    return (
      <motion.div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={modalDropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative bg-neutral-900 text-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white z-10">
            X
          </button>
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src={associate.imageUrl} alt={associate.name} className="w-full h-full object-cover"/>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-1">{associate.name}</h2>
              <p className="text-lg text-indigo-400 font-medium mb-4">{associate.role}</p>
              <p className="text-neutral-300 mb-6">{associate.bio}</p>
              <div className="flex flex-col space-y-3">
                {Object.entries(associate.links).map(([key, url]) => (
                  url && (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-neutral-200 hover:text-white transition-colors group"
                    >
                      {iconMap[key]}
                      <span className="capitalize group-hover:underline">{key}</span>
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

// 4. --- THE ASSOCIATE CARD (SUB-COMPONENT) ---
// This is the interactive card for each collaborator.
const AssociateCard = ({ associate, onCardClick }: AssociateCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      onClick={() => onCardClick(associate)}
      className="relative aspect-[3/4] w-full overflow-hidden rounded-lg group"
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      <img
        src={associate.imageUrl}
        alt={associate.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute top-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm text-neutral-200">{associate.bio}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="text-2xl font-bold text-white">{associate.name}</h3>
        <p className="text-md font-light text-neutral-300">{associate.role}</p>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full p-4 bg-black/50 backdrop-blur-sm"
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
        transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center space-x-4">
          {Object.entries(associate.links).map(([key, url]) => (
            url && <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
              aria-label={`${associate.name}'s ${key}`}
            >
              {iconMap[key]}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// 4. --- THE MAIN COMPONENT ---
// This brings everything together: header, filters, and the grid.
const AssociatesSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedAssociate, setSelectedAssociate] = useState<Associate | null>(null);
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedAssociate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedAssociate]);

  const categories = ["All", ...new Set(associatesData.map(a => a.category))];

  const filteredAssociates = activeCategory === "All"
    ? associatesData
    : associatesData.filter(a => a.category === activeCategory);

  return (
    <section className="w-full min-h-screen p-4 sm:p-8 md:p-12" id="associates">
      <header className="text-center my-12 md:my-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-headline font-bold text-center text-primary mb-16"
        >
          Studio Wall
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-neutral-400 max-w-2xl mx-auto"
        >
          A curated showcase of the brilliant producers, engineers, and creatives I'm proud to have worked with.
        </motion.p>
      </header>

      <div className="flex justify-center flex-wrap gap-3 my-10">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 text-sm rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white
              ${activeCategory === category
                ? 'bg-white text-black font-semibold'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        <AnimatePresence>
          {filteredAssociates.map(associate => (
            <AssociateCard key={associate.id} associate={associate} onCardClick={setSelectedAssociate} />
          ))}
        </AnimatePresence>
      </motion.div>
      {/* NEW: Render the modal when an associate is selected */}
      <AnimatePresence>
        {selectedAssociate && (
          <AssociateModal 
            associate={selectedAssociate} 
            onClose={() => setSelectedAssociate(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
};

export default AssociatesSection;