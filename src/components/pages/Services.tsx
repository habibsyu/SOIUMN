import { Wrench, Palette, ShieldCheck, Clock, Users, CheckCircle } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  const services = [
    {
      icon: Wrench,
      title: 'Gypsum Installation',
      description: 'Professional installation services with expert craftsmen',
      details: [
        'Ceiling installations',
        'Wall partitions',
        'Structural reinforcement',
        'Finishing and painting',
      ],
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Palette,
      title: 'Interior Design Consultation',
      description: 'Custom design solutions tailored to your vision',
      details: [
        '3D visualization',
        'Material selection guidance',
        'Space planning optimization',
        'Color and texture consultation',
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: ShieldCheck,
      title: 'Maintenance & Repair',
      description: 'Keep your installations in perfect condition',
      details: [
        'Regular maintenance checks',
        'Damage repair services',
        'Surface refinishing',
        'Warranty support',
      ],
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial meeting to understand your requirements and vision',
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Create detailed plans and 3D visualizations',
    },
    {
      step: '03',
      title: 'Material Selection',
      description: 'Choose the right materials for your project',
    },
    {
      step: '04',
      title: 'Installation',
      description: 'Professional installation by our expert team',
    },
    {
      step: '05',
      title: 'Quality Check',
      description: 'Thorough inspection and final touches',
    },
    {
      step: '06',
      title: 'Handover',
      description: 'Project completion and warranty documentation',
    },
  ];

  const benefits = [
    { icon: Clock, text: 'Fast turnaround time' },
    { icon: Users, text: 'Experienced professionals' },
    { icon: CheckCircle, text: 'Quality guaranteed' },
    { icon: ShieldCheck, text: 'Comprehensive warranty' },
  ];

  return (
    <section id="services-detail" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Comprehensive Gypsum Services
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            From consultation to completion, we handle every aspect of your project
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-16 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                  darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                }`}>
                  <service.icon className="text-gray-700" size={32} />
                </div>
                <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className={`py-16 px-8 rounded-2xl mb-16 ${darkMode ? 'bg-black' : 'bg-white'}`}>
          <h3 className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className={`text-5xl font-bold mb-4 ${darkMode ? 'text-gray-800' : 'text-gray-200'}`}>
                  {step.step}
                </div>
                <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h4>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.text}
              className={`p-6 rounded-xl text-center ${
                darkMode ? 'bg-black hover:bg-gray-800' : 'bg-white hover:shadow-lg'
              } transition-all`}
            >
              <benefit.icon className={`mx-auto mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} size={40} />
              <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
