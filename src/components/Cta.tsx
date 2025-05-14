
import { Button } from '@/components/ui/button';

const Cta = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-padel-blue to-padel-darkBlue text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Padel Experience?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of players who are already using Padelicano to improve their game and connect with the community.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button
              size="lg"
              className="bg-white text-padel-darkBlue hover:bg-gray-100 h-14"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 12.5c0-1.58-.4-2.98-1.04-4.12L21 3h-5.6l-3.35 5.89-1.56-5.88H5l3 11.09 1.58 5.89H15l2.5-7.49z"/>
                <path d="M17.5 12.5c0 .39-.04.77-.13 1.14L15 21h5.6l-3.19-8.5c.08-.38.09-.64.09-.98z"/>
              </svg>
              Download for iOS
            </Button>
            
            <Button
              size="lg"
              className="bg-padel-yellow text-padel-darkBlue hover:bg-yellow-500 h-14"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.77 5.12L12 10.89 6.23 5.12C7.28 4.41 8.58 4 9.99 4c1.41 0 2.72.41 3.78 1.12z"/>
                <path d="M5.12 6.23L10.89 12 5.12 17.77C4.41 16.72 4 15.41 4 14.01c0-1.41.4-2.72 1.12-3.78z"/>
                <path d="M5.12 17.77l5.77-5.77 5.77 5.77c-1.06.71-2.37 1.12-3.77 1.12-1.4 0-2.7-.41-3.77-1.12z"/>
                <path d="M18.88 17.77c.71-1.06 1.12-2.36 1.12-3.76 0-1.4-.42-2.7-1.12-3.76l-5.77 5.77 5.77 5.77z"/>
              </svg>
              Download for Android
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-6">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">10k+</span>
              <span className="text-sm text-white/80">Users</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">500+</span>
              <span className="text-sm text-white/80">Courts</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">4.8</span>
              <span className="text-sm text-white/80">App Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
