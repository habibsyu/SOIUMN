import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className={`pt-32 pb-20 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Premium Gypsum Solutions for Modern Spaces
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Transform your interior with expert gypsum installation, innovative designs, and high-quality materials.
            </p>
            <div className="space-y-3">
              {['Professional Installation', 'Custom Design Services', '10+ Years Experience'].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#products"
                className={`px-8 py-4 rounded-lg transition-all flex items-center justify-center ${
                  darkMode
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                View Products
              </a>
            </div>
          </div>
          <div className="relative">
            <div className={`rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'border border-gray-800' : ''}`}>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern interior with gypsum ceiling"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className={`absolute -bottom-6 -left-6 p-6 rounded-xl shadow-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1000+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
