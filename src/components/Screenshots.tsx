
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Screenshots = () => {
  // Using newly uploaded app screenshots
  const screenshots = [
    {
      url: "/lovable-uploads/0703b0cc-49ab-4421-b435-505daf6e6aa6.png",
      title: "Organize tournaments",
      description: "Create and manage padel tournaments with your friends"
    },
    {
      url: "/lovable-uploads/1717ded0-fcd3-4ebe-8d1c-fe475bca756e.png",
      title: "Track Matches",
      description: "Keep track of matches and scores in real-time"
    },
    {
      url: "/lovable-uploads/d42afdab-ec1f-46fa-8304-1c8293fca49f.png",
      title: "Create fast",
      description: "Set up tournaments with custom rules and settings"
    },
    {
      url: "/lovable-uploads/e0242df6-2bfa-42de-8e28-a32c74e16e38.png",
      title: "Manage with ease",
      description: "Simple interface to manage all your padel activities"
    },
    {
      url: "/lovable-uploads/d7a9b512-7d03-4e7d-ab67-f5ff087e34cb.png",
      title: "Rank live",
      description: "View real-time player rankings and statistics"
    }
  ];
  
  return (
    <section id="screenshots" className="py-20 bg-padel-lightBlue">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-padel-darkBlue">
            App Screenshots
          </h2>
          <p className="text-lg text-padel-darkBlue/80 max-w-2xl mx-auto">
            Take a look at the beautiful interfaces and features of Padelicano.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="phone-mockup mb-6 rounded-3xl overflow-hidden shadow-xl w-full max-w-[280px]">
                <AspectRatio ratio={9/19.5}>
                  <img 
                    src={screenshot.url} 
                    alt={`Padelicano ${screenshot.title}`} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-padel-darkBlue">
                {screenshot.title}
              </h3>
              <p className="text-padel-darkBlue/70 text-center max-w-md">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
