import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";

const Screenshots = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const screenshots = [
    {
      url: "./lovable-uploads/0703b0cc-49ab-4421-b435-505daf6e6aa6.png",
      title: "Tournament Creation",
      description: "Create americano, mexicano, or mixicano tournaments in seconds"
    },
    {
      url: "./lovable-uploads/1717ded0-fcd3-4ebe-8d1c-fe475bca756e.png",
      title: "Live Scoring",
      description: "Update scores in real-time and keep everyone in the loop"
    },
    {
      url: "./lovable-uploads/d42afdab-ec1f-46fa-8304-1c8293fca49f.png",
      title: "Smart Benching",
      description: "Our intelligent system ensures fair play for all"
    },
    {
      url: "./lovable-uploads/e0242df6-2bfa-42de-8e28-a32c74e16e38.png",
      title: "Player Management",
      description: "Handle any number of players with ease"
    },
    {
      url: "./lovable-uploads/d7a9b512-7d03-4e7d-ab67-f5ff087e34cb.png",
      title: "Live Rankings",
      description: "Watch the tournament standings update in real-time"
    }
  ];
  
  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-padel-darkBlue">
            See Padelicano in Action
          </h2>
          <p className="text-lg text-padel-darkBlue/80 max-w-2xl mx-auto">
            Experience the simplicity of tournament management
          </p>
        </div>
        
        <div className="relative">
          {/* Screenshot Gallery */}
          <div className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className="flex-none w-[280px] cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <AspectRatio ratio={9/19.5}>
                      <img 
                        src={screenshot.url} 
                        alt={`Padelicano ${screenshot.title}`} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Preview Text */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-padel-darkBlue">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-padel-darkBlue/70 max-w-md mx-auto">
              {screenshots[activeIndex].description}
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-padel-blue w-4' : 'bg-padel-blue/30'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
