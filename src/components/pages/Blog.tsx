import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogProps {
  darkMode: boolean;
}

export default function Blog({ darkMode }: BlogProps) {
  const posts = [
    {
      id: 1,
      title: '10 Gypsum Ceiling Design Ideas for Modern Homes',
      excerpt: 'Discover the latest trends in gypsum ceiling designs that can transform your living space into a contemporary masterpiece.',
      category: 'Tips & Tutorials',
      date: '2025-09-28',
      author: 'Dewi Lestari',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'The Benefits of Gypsum Board for Sound Insulation',
      excerpt: 'Learn how gypsum boards can significantly improve the acoustic performance of your home or office space.',
      category: 'Industry News',
      date: '2025-09-25',
      author: 'Ahmad Wijaya',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Gypsum vs Traditional Plaster: Making the Right Choice',
      excerpt: 'A comprehensive comparison to help you decide which material is best suited for your construction project.',
      category: 'Articles',
      date: '2025-09-20',
      author: 'Ir. Soimun',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'How to Maintain Your Gypsum Ceiling: Expert Tips',
      excerpt: 'Essential maintenance guidelines to keep your gypsum installations looking pristine for years to come.',
      category: 'Tips & Tutorials',
      date: '2025-09-15',
      author: 'Dewi Lestari',
      image: 'https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Sustainable Building with Gypsum Products',
      excerpt: 'Exploring how gypsum materials contribute to eco-friendly and sustainable construction practices.',
      category: 'Industry News',
      date: '2025-09-10',
      author: 'Ahmad Wijaya',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Top 5 Gypsum Partition Wall Ideas for Open Offices',
      excerpt: 'Creative partition solutions that enhance privacy while maintaining an open and collaborative workspace.',
      category: 'Articles',
      date: '2025-09-05',
      author: 'Ir. Soimun',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = ['All', 'Articles', 'Tips & Tutorials', 'Industry News'];

  return (
    <section id="blog" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Latest from Our Blog
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto mb-8`}>
            Expert insights, tips, and industry news about gypsum solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-lg transition-all ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className={`rounded-2xl overflow-hidden mb-12 ${
          darkMode ? 'bg-black hover:bg-gray-800' : 'bg-white hover:shadow-xl'
        } transition-all`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-96 lg:h-auto">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full">
                  {posts[0].category}
                </span>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Featured</span>
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {posts[0].title}
              </h3>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {posts[0].excerpt}
              </p>
              <div className={`flex items-center space-x-6 mb-6 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{posts[0].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{new Date(posts[0].date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                <span>Read More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <div
              key={post.id}
              className={`rounded-xl overflow-hidden ${
                darkMode ? 'bg-black hover:bg-gray-800' : 'bg-white hover:shadow-xl'
              } transition-all`}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full inline-block mb-4">
                  {post.category}
                </span>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                  {post.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                  {post.excerpt}
                </p>
                <div className={`flex items-center justify-between text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  <div className="flex items-center space-x-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
