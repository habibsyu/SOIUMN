import { Target, Eye, Award, Users } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const certifications = [
    'ISO 9001:2015 Certified',
    'Green Building Certified',
    'Safety Excellence Award 2024',
    'Best Contractor Award 2023',
  ];

  const team = [
    {
      name: 'Ir. Soimun',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ahmad Wijaya',
      role: 'Chief Operations Officer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Dewi Lestari',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        {/* Company History */}
        <div className="mb-20">
          <h2 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Soimun Gyson
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Founded in 2014, Soimun Gyson has become Indonesia's leading specialist in premium gypsum solutions.
                Our journey began with a simple mission: to transform spaces through innovative design and superior craftsmanship.
              </p>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Over the past decade, we've completed more than 1,000 projects across residential, commercial,
                and institutional sectors. Our commitment to excellence has earned us the trust of homeowners,
                designers, and developers throughout the region.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Today, we continue to push boundaries with cutting-edge techniques, sustainable materials,
                and a team of highly skilled professionals dedicated to bringing your vision to life.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Soimun Gyson"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className={`p-8 rounded-xl ${darkMode ? 'bg-black' : 'bg-white'} shadow-lg`}>
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
              darkMode ? 'bg-gray-900' : 'bg-gray-100'
            }`}>
              <Target className="text-gray-700" size={32} />
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Mission
            </h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              To deliver exceptional gypsum solutions that combine aesthetic beauty with functional excellence,
              while maintaining the highest standards of quality, safety, and customer satisfaction.
            </p>
          </div>
          <div className={`p-8 rounded-xl ${darkMode ? 'bg-black' : 'bg-white'} shadow-lg`}>
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
              darkMode ? 'bg-gray-900' : 'bg-gray-100'
            }`}>
              <Eye className="text-gray-700" size={32} />
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Vision
            </h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              To be the most trusted and innovative gypsum solutions provider in Southeast Asia,
              recognized for our commitment to excellence, sustainability, and customer-centric approach.
            </p>
          </div>
        </div>

        {/* Team Introduction */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Users className={`mx-auto mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} size={48} />
            <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Meet Our Leadership Team
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className={`rounded-xl overflow-hidden ${
                  darkMode ? 'bg-black hover:bg-gray-800' : 'bg-white hover:shadow-xl'
                } transition-all`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {member.name}
                  </h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className={`p-12 rounded-xl ${darkMode ? 'bg-black' : 'bg-white'} shadow-lg`}>
          <div className="text-center mb-8">
            <Award className={`mx-auto mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} size={48} />
            <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Certifications & Awards
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Recognized for excellence and quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert}
                className={`p-6 rounded-lg text-center ${
                  darkMode ? 'bg-gray-900' : 'bg-gray-50'
                }`}
              >
                <Award className={`mx-auto mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} size={32} />
                <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
