import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+62 123 4567 8900', '+62 123 4567 8901'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@soimungyson.com', 'sales@soimungyson.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Jl. Contoh No. 123', 'Jakarta Selatan, DKI Jakarta 12345'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
    },
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get in Touch
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Have a project in mind? Contact us today for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <info.icon className="text-gray-700" size={24} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {info.title}
                </h3>
                {info.details.map((detail, index) => (
                  <p key={index} className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 p-8 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? 'bg-black border-gray-800 text-white focus:border-gray-600'
                        : 'bg-white border-gray-200 text-gray-900 focus:border-gray-400'
                    } focus:outline-none transition-colors`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? 'bg-black border-gray-800 text-white focus:border-gray-600'
                        : 'bg-white border-gray-200 text-gray-900 focus:border-gray-400'
                    } focus:outline-none transition-colors`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? 'bg-black border-gray-800 text-white focus:border-gray-600'
                        : 'bg-white border-gray-200 text-gray-900 focus:border-gray-400'
                    } focus:outline-none transition-colors`}
                    placeholder="+62 123 4567 8900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? 'bg-black border-gray-800 text-white focus:border-gray-600'
                        : 'bg-white border-gray-200 text-gray-900 focus:border-gray-400'
                    } focus:outline-none transition-colors`}
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="installation">Installation Service</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? 'bg-black border-gray-800 text-white focus:border-gray-600'
                      : 'bg-white border-gray-200 text-gray-900 focus:border-gray-400'
                  } focus:outline-none transition-colors resize-none`}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className={`rounded-xl overflow-hidden ${darkMode ? 'border border-gray-800' : 'shadow-lg'}`}>
          <div className="h-96 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65785499126!2d106.68942999999999!3d-6.229386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2s!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Soimun Gyson Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
