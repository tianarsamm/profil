"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition = scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryItems = [
    {
      title: "Ready to Face the Challenge",
      description: "📸 A confident stance amidst the crowd, symbolizing readiness to take on challenges in the world of tech.",
      image: "/gallery/1.png",
    },
    {
      title: "Sunset Reflections by the Shore",
      description: "📸 A peaceful moment by the sea, reflecting on ideas and finding inspiration for meaningful design work.",
      image: "/gallery/2.png",
    },
    {
      title: "Focused and Responsible",
      description: "📸 Deep in concentration on the phone — a portrait of dedication and accountability in action.",
      image: "/gallery/3.png",
    },
    {
      title: "Representing with Confidence",
      description: "📸 A proud stance in a formal outfit — symbolizing responsibility and leadership as a campus representative.",
      image: "/gallery/4.png",
    },
    {
      title: "In Motion, Out of Focus",
      description: "📸 A blurry walk in the night — capturing the spontaneity and mystery of late-night thoughts.",
      image: "/gallery/5.png",
    },
    {
      title: "Coffee, Calm, and Strategy",
      description: "📸 A moment of deep thought at a café — where ideas brew along with the coffee.",
      image: "/gallery/6.png",
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#dc5341] font-semibold text-2xl mb-2">GALLERY</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          My Gallery
        </h2>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white shadow-lg text-black flex items-center justify-center hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white shadow-lg text-black flex items-center justify-center hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scrollable Gallery Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[300px] snap-center"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    onClick={() => setSelectedImage(item.image)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Close Button */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Preview"
                className="max-w-3xl max-h-[90vh] object-contain rounded-lg shadow-lg"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
