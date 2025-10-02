import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      role: 'Homeowner',
      content: 'Exceptional service! The team transformed our living room with a stunning gypsum ceiling. Professional, punctual, and pristine work.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      role: 'Interior Designer',
      content: 'I recommend Soimun Gyson to all my clients. Their attention to detail and quality materials make every project a success.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Business Owner',
      content: 'They completed our office renovation ahead of schedule. The partition walls are soundproof and beautifully finished.',
      rating: 5,
    },
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            What Our Clients Say
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-8 rounded-xl ${
                darkMode ? 'bg-black hover:bg-gray-800' : 'bg-white hover:shadow-xl'
              } transition-all relative`}
            >
              <Quote className={`absolute top-6 right-6 ${darkMode ? 'text-gray-800' : 'text-gray-200'}`} size={40} />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} italic`}>
                "{testimonial.content}"
              </p>
              <div>
                <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {testimonial.name}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
