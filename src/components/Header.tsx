import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-black/95 text-white' : 'bg-white/95 text-black'
    } backdrop-blur-sm shadow-lg`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SG</span>
            </div>
            <span className="text-xl font-bold">Soimun Gyson</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors hover:text-gray-500 ${
                  darkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA and Dark Mode Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-t pt-4`}>
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block py-2 transition-colors ${
                  darkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg text-center hover:from-gray-600 hover:to-gray-800 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
