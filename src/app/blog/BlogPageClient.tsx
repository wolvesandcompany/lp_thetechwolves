"use client";

import { useState, useEffect } from 'react';
import { BlogPost } from '@/lib/blog/utils';
import { PostCard } from '@/components/PostCard';
import { BackgroundBeams } from '@/components/ui/background-beams';

interface BlogPageClientProps {
  posts: BlogPost[];
}

const BlogPageClient: React.FC<BlogPageClientProps> = ({ posts }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Animation on component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.tags.some(tag => 
        tag.toLowerCase().includes(selectedCategory.toLowerCase())
      ));
  
  const categories = ['all', 'AI', 'Automation', 'Digital Transformation', 'Business'];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 relative">
      {/* Background effects matching the main theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[40rem] h-[40rem] bg-teal-300/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-[30rem] h-[30rem] bg-teal-400/10 rounded-full blur-3xl" />
      </div>
      
      {/* Background beams for visual enhancement */}
      <BackgroundBeams className="opacity-30" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Page header with enhanced animations */}
          <header className={`text-center mb-16 pt-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
              Insights & <span className="text-teal-500">Expertise</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed mb-10">
              Discover expert insights on AI automation, digital transformation, and practical business solutions 
              to help your company thrive in the digital age.
            </p>
            
            {/* Interactive category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 border transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-teal-500 text-white border-teal-500 shadow-lg shadow-teal-500/25'
                      : 'bg-white dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-teal-300 hover:text-teal-600 dark:hover:text-teal-400'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                  {category === 'all' && (
                    <span className="ml-2 text-xs bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 px-2 py-1 rounded-full">
                      {posts.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Stats showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-500 mb-1">{posts.length}+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-500 mb-1">10k+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-500 mb-1">5+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Industries Covered</div>
              </div>
            </div>
          </header>

          {/* Blog posts grid with enhanced styling and filtering */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.slug}
                  className={`transform transition-all duration-700 ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150}ms` 
                  }}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 && selectedCategory !== 'all' ? (
            <div className="text-center py-20">
              <div className="bg-neutral-100 dark:bg-neutral-800/50 rounded-2xl p-12 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                  No posts found in "{selectedCategory}"
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Try selecting a different category or view all posts.
                </p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300"
                >
                  View All Posts
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-neutral-100 dark:bg-neutral-800/50 rounded-2xl p-12 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                  Coming Soon
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We're working on exciting new content. Check back soon!
                </p>
              </div>
            </div>
          )}

          {/* Enhanced CTA section matching the main theme */}
          <section className="mt-20 relative">
            {/* Background gradient for CTA */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-50 dark:from-teal-950/20 dark:via-neutral-950 dark:to-teal-950/20 rounded-3xl"></div>
            
            <div className="relative z-10 text-center px-8 py-16 lg:py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Ready to Transform Your <span className="text-teal-500">Business</span>?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
                Get expert guidance on implementing AI automation and digital transformation solutions.
                Start your journey to increased efficiency and growth today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Today
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                
                <a
                  href="/case-study"
                  className="inline-flex items-center px-8 py-4 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold rounded-full transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogPageClient;