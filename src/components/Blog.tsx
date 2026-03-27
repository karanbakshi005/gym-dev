import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Essential Exercises for Building Functional Strength",
      excerpt: "Discover the movements that translate to real-world power and prevent common injuries...",
      category: "Training",
      author: "Coach Marcus",
      date: "Oct 12, 2023",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "The Truth About Post-Workout Protein Shakes",
      excerpt: "Is the 'anabolic window' real? We dive into the science of muscle recovery and nutrition...",
      category: "Nutrition",
      author: "Sarah Jenks",
      date: "Oct 10, 2023",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Mental Grit: How to Stay Motivated in Winter",
      excerpt: "When the temperature drops, so does motivation. Here is how to keep your discipline levels high...",
      category: "Mindset",
      author: "Dr. Elena",
      date: "Oct 08, 2023",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white" id="blog">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-blue-500 font-semibold tracking-wide uppercase">Our Blog</h2>
            <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
              Latest <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">Fitness</span> Insights
            </p>
          </div>
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
            View all articles <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col bg-slate-800/40 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <div className="flex items-center text-sm text-slate-400 mb-4 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-slate-300" />
                    </div>
                    <span className="text-sm font-medium text-slate-300">{post.author}</span>
                  </div>
                  <button className="text-blue-400 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / CTA Box */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-linear-to-br from-blue-600 to-slate-800 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold">Don't miss a beat.</h3>
            <p className="text-blue-100 mt-2">Get the latest training tips and gym updates sent to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-blue-200 w-full md:w-64"
            />
            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;