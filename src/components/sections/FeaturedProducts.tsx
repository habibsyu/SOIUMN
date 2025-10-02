import { ArrowRight } from 'lucide-react';

interface FeaturedProductsProps {
  darkMode: boolean;
}

export default function FeaturedProducts({ darkMode }: FeaturedProductsProps) {
  const products = [
    {
      id: 1,
      name: 'Gypsum Ceiling Boards',
      category: 'Ceiling Solutions',
      image: 'https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-quality ceiling boards for modern interiors',
    },
    {
      id: 2,
      name: 'Partition Walls',
      category: 'Wall Systems',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Durable and soundproof partition solutions',
    },
    {
      id: 3,
      name: 'Decorative Cornices',
      category: 'Finishing Touches',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant decorative elements for sophisticated spaces',
    },
  ];

  return (
    <section id="products" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Products
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Explore our premium selection of gypsum products designed for durability, aesthetics, and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-xl overflow-hidden shadow-lg ${
                darkMode ? 'bg-black hover:bg-gray-800' : 'bg-white hover:shadow-xl'
              } transition-all transform hover:-translate-y-2`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gray-900/80 text-white text-xs rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {product.name}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {product.description}
                </p>
                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#products"
            className={`inline-block px-8 py-3 rounded-lg transition-all ${
              darkMode
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
