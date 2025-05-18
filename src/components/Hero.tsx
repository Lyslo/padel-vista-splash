
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const variants = ["americano", "mexicano", "mixicano"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVariant((prev) => (prev + 1) % variants.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-padel-lightBlue">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-padel-darkBlue">
              The simple app for padel 
              <div className="h-[1.5em] overflow-hidden">
                <div className="animate-word-rotate">
                  {variants.map((variant, index) => (
                    <span 
                      key={variant} 
                      className={`bg-clip-text text-transparent bg-gradient-padel block ${
                        currentVariant === index ? 'opacity-100' : 'opacity-0'
                      } absolute transition-opacity duration-500`}
                      aria-hidden={currentVariant !== index}
                    >
                      {variant}
                    </span>
                  ))}
                </div>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-padel block">
                tournaments
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-padel-darkBlue/80 mb-8 md:pr-12">
              Connect with players, book courts, track your progress, and become part of the fastest growing padel community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="w-full sm:w-auto h-12 px-8 bg-padel-blue hover:bg-padel-darkBlue text-white text-lg"
              >
                Download for iOS
              </Button>
              
              <Button
                className="w-full sm:w-auto h-12 px-8 bg-padel-yellow hover:bg-yellow-500 text-padel-darkBlue text-lg"
              >
                Download for Android
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="phone-mockup animate-float max-w-[300px] mx-auto">
              <img 
                src="/lovable-uploads/044b1d3d-6e22-454e-90dc-2ef3c429702e.png" 
                alt="Padelicano App Screenshot" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-padel-yellow rounded-full -z-10 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-padel-blue rounded-full -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
