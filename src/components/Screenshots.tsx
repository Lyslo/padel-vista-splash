
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Screenshots = () => {
  // Using one of the uploaded app screenshots
  const screenshots = [
    {
      url: "/lovable-uploads/38029222-4f66-4881-8c26-7d0cc37a0a8f.png",
      title: "Organize Tournaments",
      description: "Create and manage padel tournaments with your friends"
    },
    {
      url: "/lovable-uploads/531ebf9c-8d08-4356-b8be-70cef3a8d494.png",
      title: "Track Matches",
      description: "Keep track of matches and scores in real-time"
    },
    {
      url: "/lovable-uploads/1f816fe4-d612-4797-b7f0-9b34b8f41882.png",
      title: "Create Tournaments",
      description: "Set up tournaments with custom rules and settings"
    },
    {
      url: "/lovable-uploads/512e5c07-6e7d-4856-8ad5-4e9eae05ce7d.png",
      title: "Manage with Ease",
      description: "Simple interface to manage all your padel activities"
    },
    {
      url: "/lovable-uploads/235cfc94-3a27-47c8-a2ae-68064c9870cf.png",
      title: "Live Rankings",
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
