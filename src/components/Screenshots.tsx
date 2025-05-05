
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = 2; // Number of screenshots - 1
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Images should be replaced with actual app screenshots
  const screenshots = [
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Match Finder",
      description: "Find and connect with players at your skill level"
    },
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Court Booking",
      description: "Book your favorite courts with real-time availability"
    },
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Player Stats",
      description: "Track your performance and see how you're improving"
    }
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };
  
  useEffect(() => {
    if (carouselRef.current) {
      const translateValue = -currentIndex * 100;
      carouselRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [currentIndex]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  return (
    <section id="screenshots" className="py-20 bg-padel-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            App Screenshots
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at the beautiful interfaces and features of Padelicano.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="carousel">
            <div 
              ref={carouselRef}
              className="carousel-inner"
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="carousel-item">
                  <div className="flex flex-col items-center">
                    <div className="phone-mockup mb-8">
                      <img 
                        src={screenshot.url} 
                        alt={`Screenshot ${index + 1}`} 
                        className="w-full h-auto"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {screenshot.title}
                    </h3>
                    <p className="text-gray-600 text-center max-w-md">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index 
                    ? 'bg-padel-green' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 bg-white shadow-md border-gray-200 z-10"
            aria-label="Previous screenshot"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 bg-white shadow-md border-gray-200 z-10"
            aria-label="Next screenshot"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
