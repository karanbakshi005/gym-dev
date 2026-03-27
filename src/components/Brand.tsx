import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Brand = () => {
  // Replace these with actual SVG or PNG logos of gym equipment brands
  const brands = [
    { name: "Rogue", logo: "ROGUE" },
    { name: "Hammer Strength", logo: "HAMMER" },
    { name: "Matrix", logo: "MATRIX" },
    { name: "Technogym", logo: "TECHNOGYM" },
    { name: "Eleiko", logo: "ELEIKO" },
  ];

  return (
    <section className="py-16 bg-slate-950 border-y border-slate-800" id="brand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Small Header */}
        <div className="flex items-center justify-center gap-2 mb-10 text-slate-500">
          <ShieldCheck className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
            Official Equipment Partners & Trusted By
          </span>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center group cursor-pointer"
            >
              {/* This is a placeholder for a logo. 
                  In a real app, replace the <span> with an <img> tag */}
              <div className="relative">
                <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-600 group-hover:text-white transition-all duration-300 transition-transform group-hover:scale-110 block">
                  {brand.logo}
                </span>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 blur-xl rounded-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Descriptive Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            We only use <span className="text-slate-300 font-medium">competition-grade equipment</span> to ensure our members have the safest and most effective workout experience possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brand;