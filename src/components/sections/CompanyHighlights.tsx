import { Award, Users, TrendingUp, Shield } from 'lucide-react';

interface CompanyHighlightsProps {
  darkMode: boolean;
}

export default function CompanyHighlights({ darkMode }: CompanyHighlightsProps) {
  const highlights = [
    {
      icon: Award,
      value: '10+',
      label: 'Years Experience',
      description: 'Delivering excellence in gypsum solutions',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Trusted by homeowners and businesses',
    },
    {
      icon: TrendingUp,
      value: '1000+',
      label: 'Projects Completed',
      description: 'Residential and commercial installations',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Quality Guarantee',
      description: 'Premium materials and workmanship',
    },
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div
              key={item.label}
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
              } transition-all transform hover:-translate-y-1`}
            >
              <item.icon className="text-gray-700 mb-4" size={40} />
              <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {item.value}
              </div>
              <div className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {item.label}
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
