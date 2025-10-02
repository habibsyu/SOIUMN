import { ArrowRight, Phone } from 'lucide-react';

interface CallToActionProps {
  darkMode: boolean;
}

export default function CallToAction({ darkMode }: CallToActionProps) {
  return (
    <section className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`rounded-2xl overflow-hidden ${
          darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-gray-800 to-gray-900'
        } text-white`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-12">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Get a free consultation and quote for your project. Our team is ready to bring your vision to life with premium gypsum solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center space-x-2 font-semibold"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight size={20} />
                </a>
                <a
                  href="tel:+621234567890"
                  className="px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>
            <div className="h-full hidden lg:block">
              <img
                src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Contact us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
