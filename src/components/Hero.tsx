import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const variants = ["americano", "mixicano", "mexicano"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVariant((prev) => (prev + 1) % variants.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-12 md:pt-36 md:pb-24 bg-padel-lightBlue">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-padel-darkBlue">
              <span className="block">The simple app for padel</span>
              <div className="h-[1.5em] overflow-hidden relative">
                <div className="animate-word-rotate absolute w-full text-center md:text-left">
                  {variants.map((variant, index) => (
                    <span 
                      key={variant} 
                      className={`bg-clip-text text-transparent bg-gradient-padel block ${
                        currentVariant === index ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-500`}
                      style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
                      aria-hidden={currentVariant !== index}
                    >
                      {variant}
                    </span>
                  ))}
                </div>
              </div>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-padel-darkBlue/80 mb-6 md:mb-8 md:pr-12">
              Quickly organize padel tournaments without dealing with subscriptions or complicated setups.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-sm mx-auto md:mx-0">
              <Button
                className="w-full h-11 md:h-12 px-6 md:px-8 bg-padel-blue hover:bg-padel-darkBlue text-white text-base md:text-lg"
                asChild
              >
                <a href="https://apps.apple.com/no/app/padelicano/id6745820501" target="_blank" rel="noopener noreferrer">
                  Download for iOS
                </a>
              </Button>
              
              <Button
                className="w-full h-11 md:h-12 px-6 md:px-8 bg-padel-yellow hover:bg-yellow-500 text-padel-darkBlue text-base md:text-lg"
              >
                Download for Android
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            <div className="phone-mockup animate-float max-w-[280px] sm:max-w-[300px] mx-auto">
              <img 
                src="/lovable-uploads/044b1d3d-6e22-454e-90dc-2ef3c429702e.png" 
                alt="Padelicano App Screenshot" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-36 md:h-36 bg-padel-yellow rounded-full -z-10 opacity-20"></div>
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-padel-blue rounded-full -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
