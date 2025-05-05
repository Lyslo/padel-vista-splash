
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Features = () => {
  const features = [
    {
      id: "connect",
      title: "Connect & Play",
      description: "Find players near you, match with partners of your level, and challenge opponents.",
      icon: "👥"
    },
    {
      id: "book",
      title: "Easy Booking",
      description: "Book courts at your favorite venues with just a few taps.",
      icon: "📅"
    },
    {
      id: "track",
      title: "Track Progress",
      description: "Monitor your performance, see your stats, and improve your game.",
      icon: "📈"
    },
    {
      id: "tournaments",
      title: "Tournaments",
      description: "Join local tournaments, climb the rankings, and win prizes.",
      icon: "🏆"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            App Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed by padel players, for padel players. Everything you need to enjoy the sport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="feature-card rounded-xl p-6 border border-gray-100 bg-white shadow-sm"
            >
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
