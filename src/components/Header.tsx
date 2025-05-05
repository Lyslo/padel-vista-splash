
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/74161e07-ce9c-4a54-9ced-30ba6dacaeb5.png" 
            alt="Padelicano Logo" 
            className="h-10 md:h-12"
          />
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-padel-dark hover:text-padel-green transition-colors">Features</a>
          <a href="#screenshots" className="text-padel-dark hover:text-padel-green transition-colors">Screenshots</a>
          <a href="#download" className="text-padel-dark hover:text-padel-green transition-colors">Download</a>
        </nav>
        
        <div className="flex space-x-3">
          <Button 
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex border-padel-green text-padel-green hover:bg-padel-green hover:text-white"
          >
            Log In
          </Button>
          
          <Button 
            size="sm"
            className="bg-padel-green hover:bg-padel-darkGreen text-white"
          >
            Download App
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
