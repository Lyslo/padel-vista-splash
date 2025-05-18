
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-padel-lightBlue">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-padel-darkBlue">
              The Ultimate App for 
              <span className="bg-clip-text text-transparent bg-gradient-padel block">
                Padel Enthusiasts
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
            <div className="iphone-mockup animate-float max-w-[280px] mx-auto">
              <div className="relative">
                {/* iPhone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-20"></div>
                
                {/* iPhone frame */}
                <div className="relative rounded-[40px] overflow-hidden border-[12px] border-gray-800 shadow-2xl">
                  <img 
                    src="/lovable-uploads/1717ded0-fcd3-4ebe-8d1c-fe475bca756e.png" 
                    alt="Padelicano Track Matches Screenshot" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white rounded-full opacity-80 z-20"></div>
              </div>
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
