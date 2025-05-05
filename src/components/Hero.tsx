
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-padel-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Ultimate App for 
              <span className="bg-clip-text text-transparent bg-gradient-padel block">
                Padel Enthusiasts
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:pr-12">
              Connect with players, book courts, track your progress, and become part of the fastest growing padel community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="w-full sm:w-auto h-12 px-8 bg-padel-green hover:bg-padel-darkGreen text-white text-lg"
              >
                Download for iOS
              </Button>
              
              <Button
                className="w-full sm:w-auto h-12 px-8 bg-padel-blue hover:bg-blue-600 text-white text-lg"
              >
                Download for Android
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="phone-mockup animate-float">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Padelicano App Screenshot" 
                className="w-full h-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-padel-green rounded-full -z-10 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-padel-blue rounded-full -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
