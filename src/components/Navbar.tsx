'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Latest', href: '#latest-drops' },
  { name: 'About', href: '#about' },
  { name: 'Partners', href: '#partners' },
  { name: 'Subscribe', href: '#subscribe' },
  { name: 'Projects', href: '#past-projects' },
  { name: 'Connect', href: '#links' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href === '#home' ? '#top' : href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark/90 backdrop-blur-lg border-b border-steel/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding container-width">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold gradient-accent hover-glitch"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              65LANTA
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-silver hover:text-glitch-green transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-silver hover:text-glitch-green transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? '0%' : '100%'
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-80 bg-dark/95 backdrop-blur-lg z-40 md:hidden border-l border-steel/20"
      >
        <div className="pt-20 px-6">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 20
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="block w-full text-left text-silver hover:text-glitch-green transition-colors duration-300 text-lg uppercase tracking-wider font-medium py-2"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20
            }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mt-12"
          >
            <a
              href="https://whop.com/subscribe-to-send-beats/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Subscribe Now
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  );
} 