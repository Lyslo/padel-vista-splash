
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

        <div className="mt-24">
          <Tabs defaultValue="dashboard" className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <TabsList className="inline-block">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="matches">Matches</TabsTrigger>
                <TabsTrigger value="profile">Player Profile</TabsTrigger>
                <TabsTrigger value="booking">Court Booking</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="dashboard" className="p-4 bg-padel-gray rounded-lg">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">Your Personalized Dashboard</h3>
                  <p className="text-gray-600 mb-4">
                    Keep track of your upcoming matches, recent activity, and performance stats all in one place.
                    The dashboard gives you a complete overview of your padel life.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Activity feed with friend updates
                    </li>
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Weekly performance summary
                    </li>
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Upcoming court reservations
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="phone-mockup">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Dashboard Screenshot" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="matches" className="p-4 bg-padel-gray rounded-lg">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">Match History & Stats</h3>
                  <p className="text-gray-600 mb-4">
                    Review your match history, analyze your performance, and see detailed statistics from all your games.
                    Identify strengths and areas for improvement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Win/loss record with visualization
                    </li>
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Point-by-point match analysis
                    </li>
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Performance trends over time
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="phone-mockup">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Matches Screenshot" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="profile" className="p-4 bg-padel-gray rounded-lg">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">Player Profile</h3>
                  <p className="text-gray-600 mb-4">
                    Create your player profile with your skills, playing style, and availability.
                    Connect with other players and build your padel network.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Skill level rating system
                    </li>
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Playing style preferences
                    </li>
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Availability calendar for matches
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="phone-mockup">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Profile Screenshot" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="booking" className="p-4 bg-padel-gray rounded-lg">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">Court Booking</h3>
                  <p className="text-gray-600 mb-4">
                    Find and book available courts at your preferred venues. 
                    See real-time availability and make reservations instantly.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Map view of nearby courts
                    </li>
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      Real-time availability checking
                    </li>
                    <li className="flex items-center">
                      <span className="bg-padel-green text-white p-1 rounded-full text-xs mr-2">✓</span>
                      One-click booking with payment
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="phone-mockup">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Booking Screenshot" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Features;
