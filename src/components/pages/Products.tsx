import { useState } from 'react';
import { Download, Check } from 'lucide-react';

interface ProductsProps {
  darkMode: boolean;
}

export default function Products({ darkMode }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'ceiling', name: 'Ceiling Solutions' },
    { id: 'walls', name: 'Wall Systems' },
    { id: 'decorative', name: 'Decorative Elements' },
  ];

  const products = [
    {
      id: 1,
      name: 'Standard Gypsum Board',
      category: 'ceiling',
      image: 'https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-quality standard gypsum boards for ceilings and walls',
      features: ['Fire resistant', 'Easy installation', 'Smooth finish', 'Cost-effective'],
    },
    {
      id: 2,
      name: 'Moisture-Resistant Board',
      category: 'walls',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ideal for high-humidity areas like bathrooms and kitchens',
      features: ['Water resistant', 'Mold prevention', 'Durable', 'Long-lasting'],
    },
    {
      id: 3,
      name: 'Acoustic Ceiling Tiles',
      category: 'ceiling',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Superior sound absorption for offices and commercial spaces',
      features: ['Sound dampening', 'Professional look', 'Easy maintenance', 'Various designs'],
    },
    {
      id: 4,
      name: 'Decorative Cornices',
      category: 'decorative',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant finishing touches for sophisticated interiors',
      features: ['Premium designs', 'Easy to paint', 'Lightweight', 'Customizable'],
    },
    {
      id: 5,
      name: 'Partition System',
      category: 'walls',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete partition solutions for flexible space division',
      features: ['Soundproof', 'Quick installation', 'Strong structure', 'Reusable'],
    },
    {
      id: 6,
      name: 'Decorative Panels',
      category: 'decorative',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Artistic wall panels for unique interior statements',
      features: ['3D designs', 'Modern patterns', 'Easy installation', 'Paintable'],
    },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products-detail" className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Product Catalog
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto mb-8`}>
            Premium gypsum products for every application
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-xl overflow-hidden ${
                darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-50 hover:shadow-xl'
              } transition-all`}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {product.name}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Check size={16} className="text-green-500 flex-shrink-0" />
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Catalog */}
        <div className={`p-12 rounded-xl text-center ${
          darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-gray-800 to-gray-900'
        } text-white`}>
          <Download className="mx-auto mb-4" size={48} />
          <h3 className="text-3xl font-bold mb-4">Download Our Complete Catalog</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get detailed specifications, pricing, and installation guides for all our products
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all font-semibold">
            Download PDF Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
