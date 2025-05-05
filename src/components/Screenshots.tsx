
const Screenshots = () => {
  // Single screenshot without carousel
  const screenshot = {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Intuitive Interface",
    description: "Experience our beautifully designed app built for padel players of all levels"
  };
  
  return (
    <section id="screenshots" className="py-20 bg-padel-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            App Screenshots
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at the beautiful interfaces and features of Padelicano.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <div className="phone-mockup mb-8">
              <img 
                src={screenshot.url} 
                alt="App Screenshot" 
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {screenshot.title}
            </h3>
            <p className="text-gray-600 text-center max-w-md">
              {screenshot.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
