import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

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
            className="h-8 md:h-12"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-padel-darkBlue hover:text-padel-blue transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('screenshots')} 
            className="text-padel-darkBlue hover:text-padel-blue transition-colors"
          >
            Screenshots
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-padel-darkBlue hover:text-padel-blue transition-colors"
          >
            Contact
          </button>
          <Link to="/privacy" className="text-padel-darkBlue hover:text-padel-blue transition-colors">Privacy</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Button 
            size="sm"
            className="bg-padel-blue hover:bg-padel-darkBlue text-white"
            onClick={() => scrollToSection('hero')}
          >
            Download
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-padel-darkBlue hover:text-padel-blue transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Download Button */}
        <div className="hidden md:block">
          <Button 
            size="sm"
            className="bg-padel-blue hover:bg-padel-darkBlue text-white"
            onClick={() => scrollToSection('hero')}
          >
            Download App
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-padel-darkBlue hover:text-padel-blue transition-colors text-left py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('screenshots')} 
              className="text-padel-darkBlue hover:text-padel-blue transition-colors text-left py-2"
            >
              Screenshots
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-padel-darkBlue hover:text-padel-blue transition-colors text-left py-2"
            >
              Contact
            </button>
            <Link 
              to="/privacy" 
              className="text-padel-darkBlue hover:text-padel-blue transition-colors text-left py-2"
            >
              Privacy
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
