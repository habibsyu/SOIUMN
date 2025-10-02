import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className={`${darkMode ? 'bg-black text-white' : 'bg-gray-900 text-white'} py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SG</span>
              </div>
              <span className="text-xl font-bold">Soimun Gyson</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Spesialis produk gypsum dengan layanan pemasangan, desain interior, dan solusi material bangunan berkualitas tinggi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+62 123 4567 8900</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@soimungyson.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/soimungyson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/soimungyson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/soimungyson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Soimun Gyson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
