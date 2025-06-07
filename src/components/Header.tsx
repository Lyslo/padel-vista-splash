import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/ed736cf4-ff63-43b3-9d14-d676be416304.png" 
            alt="Padelicano Logo" 
            className="h-10 md:h-12"
          />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/#features" className="text-padel-darkBlue hover:text-padel-blue transition-colors">Features</Link>
          <Link to="/#screenshots" className="text-padel-darkBlue hover:text-padel-blue transition-colors">Screenshots</Link>
          <Link to="/#download" className="text-padel-darkBlue hover:text-padel-blue transition-colors">Download</Link>
          <Link to="/privacy" className="text-padel-darkBlue hover:text-padel-blue transition-colors">Privacy</Link>
        </nav>
        
        <div>
          <Button 
            size="sm"
            className="bg-padel-blue hover:bg-padel-darkBlue text-white"
          >
            Download App
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
