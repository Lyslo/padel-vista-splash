import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      id: "tournaments",
      title: "Tournament Types",
      description: "Create and manage americano, mexicano, and mixicano tournaments with ease. Perfect for any group size.",
      icon: "🏆"
    },
    {
      id: "smart-benching",
      title: "Smart Benching",
      description: "Our intelligent benching system ensures fair play and optimal court time for all players.",
      icon: "⚖️"
    },
    {
      id: "live-scoring",
      title: "Live Scoreboard",
      description: "Real-time score updates as matches progress. Keep everyone informed and engaged.",
      icon: "📊"
    },
    {
      id: "flexible",
      title: "Flexible Setup",
      description: "Adapt to any number of players. Perfect for casual games or organized tournaments.",
      icon: "🔄"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-padel-darkBlue">
            Tournament Management Made Simple
          </h2>
          <p className="text-lg text-padel-darkBlue/70 max-w-2xl mx-auto">
            The perfect companion for organizing and managing padel tournaments of any size.
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
