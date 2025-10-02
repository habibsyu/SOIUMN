import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'hospitality', name: 'Hospitality' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Corporate Office',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Luxury Hotel Lobby',
      category: 'hospitality',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Contemporary Bedroom',
      category: 'residential',
      image: 'https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Restaurant Interior',
      category: 'hospitality',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Office Conference Room',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 7,
      title: 'Villa Master Suite',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      title: 'Retail Store',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 9,
      title: 'Hotel Suite',
      category: 'hospitality',
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const beforeAfter = [
    {
      id: 1,
      title: 'Living Room Transformation',
      before: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Office Renovation',
      before: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="gallery" className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        {/* Project Photos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Portfolio
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto mb-8`}>
              Explore our completed projects and see the quality of our work
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl overflow-hidden cursor-pointer group ${
                  darkMode ? 'bg-gray-900' : 'bg-gray-100'
                }`}
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">View Full Size</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before & After */}
        <div className={`py-16 rounded-2xl mb-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="px-4">
            <h3 className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Before & After Transformations
            </h3>
            <div className="space-y-12">
              {beforeAfter.map((item) => (
                <div key={item.id}>
                  <h4 className={`text-xl font-semibold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        BEFORE
                      </p>
                      <img
                        src={item.before}
                        alt={`${item.title} - Before`}
                        className="w-full h-80 object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        AFTER
                      </p>
                      <img
                        src={item.after}
                        alt={`${item.title} - After`}
                        className="w-full h-80 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Showcase */}
        <div className={`p-12 rounded-2xl text-center ${
          darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-gray-800 to-gray-900'
        } text-white`}>
          <Play className="mx-auto mb-4" size={64} />
          <h3 className="text-3xl font-bold mb-4">Watch Our Projects Come to Life</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            See time-lapse videos of our installation process and project walkthroughs
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all font-semibold flex items-center space-x-2 mx-auto">
            <Play size={20} />
            <span>View Video Gallery</span>
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
