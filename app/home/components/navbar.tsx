'use client';

import { Home, Info, List, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Główna', icon: <Home size={18} />, href: '#' },
    { name: 'Oferty', icon: <List size={18} />, onClick: () => router.push('/offers') },
    { name: 'O nas', icon: <Info size={18} />, href: '#about' },
    { name: 'Kontakt', icon: <Phone size={18} />, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Home className="text-white" size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Rent<span className="text-blue-500">Guard</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              
              <button
                key={index}
                onClick={link.onClick}
                 className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-500 ${scrolled ? 'text-gray-600' : 'text-white'}`}
              >
                
                {link.name}
              </button>
            ))}

             <nav className="flex gap-4">
      {/* {navLinks.map((link, index) => {
        const isActive = pathname === link.path;

        return (
          <button
            key={index}
            onClick={() => router.push(link.path)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition
              ${isActive 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            {link.icon}
            {link.name}
          </button>
        );
      })} */}
    </nav>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
              Dodaj Ofertę
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={scrolled ? 'text-gray-900' : 'text-white'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name
                }
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  {link.icon}
                  {link.name}
                </div>
              </a>
            ))}
            <div className="p-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">
                Zaloguj się
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>

  );
}

export default Navbar;