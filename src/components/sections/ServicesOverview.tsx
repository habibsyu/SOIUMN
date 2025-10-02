import { Wrench, Palette, ShieldCheck } from 'lucide-react';

interface ServicesOverviewProps {
  darkMode: boolean;
}

export default function ServicesOverview({ darkMode }: ServicesOverviewProps) {
  const services = [
    {
      icon: Wrench,
      title: 'Gypsum Installation',
      description: 'Professional installation services for ceilings, walls, and partitions with precision and care.',
      features: ['Expert craftsmen', 'On-time delivery', 'Clean worksite'],
    },
    {
      icon: Palette,
      title: 'Interior Design Consultation',
      description: 'Custom design solutions tailored to your vision, combining aesthetics with functionality.',
      features: ['3D visualization', 'Material selection', 'Space planning'],
    },
    {
      icon: ShieldCheck,
      title: 'Maintenance & Repair',
      description: 'Comprehensive maintenance and repair services to keep your gypsum installations in perfect condition.',
      features: ['Quick response', 'Quality repairs', 'Warranty support'],
    },
  ];

  return (
    <section id="services" className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Services
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Comprehensive gypsum solutions from consultation to installation and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`p-8 rounded-xl ${
                darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
              } transition-all`}
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
              }`}>
                <service.icon className="text-gray-700" size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
