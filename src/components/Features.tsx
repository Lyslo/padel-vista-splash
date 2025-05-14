
import { Card, CardContent } from "@/components/ui/card";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-padel-darkBlue">
            App Features
          </h2>
          <p className="text-lg text-padel-darkBlue/70 max-w-2xl mx-auto">
            Designed by padel players, for padel players. Everything you need to enjoy the sport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id}
              className="feature-card border-transparent shadow-sm hover:shadow-lg hover:border-padel-blue/20"
            >
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-padel-darkBlue">
                  {feature.title}
                </h3>
                <p className="text-padel-darkBlue/70">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
