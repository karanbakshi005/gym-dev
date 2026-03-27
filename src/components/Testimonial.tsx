import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Member for 1 year",
      achievement: "Lost 25 lbs",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200",
      quote: "Joining this gym changed my life. The trainers didn't just give me a plan; they gave me the confidence to push past my limits every single day.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Member for 6 months",
      achievement: "Muscle Gain",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      quote: "The community here is unmatched. I've never felt more supported in my fitness journey. The Pro plan with group classes is a total game changer!",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Member for 2 years",
      achievement: "Athletic Performance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      quote: "The equipment is top-tier and the facility is always spotless. If you're serious about your training, this is the only place to be in the city.",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="testimonial">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5">
        <Quote size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase italic">Success Stories</h2>
          <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Real Results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Real Members</span>
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 flex flex-col items-start hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-slate-300 mb-8 italic leading-relaxed">
                "{review.quote}"
              </p>

              {/* User Info */}
              <div className="mt-auto flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 p-0.5"
                  />
                  {/* Result Badge */}
                  <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-[10px] font-bold px-2 py-1 rounded-md text-white shadow-lg">
                    {review.achievement}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-sm text-slate-500 italic">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Pilot / Google Review Style Footer */}
        <div className="mt-16 flex flex-col items-center justify-center border-t border-slate-800 pt-10">
          <p className="text-slate-400 mb-4 font-medium uppercase tracking-widest text-xs">Trusted by 500+ athletes</p>
          <div className="flex gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* You can put partner logos or "As seen on" here */}
            <span className="text-2xl font-black italic">FITNESS+</span>
            <span className="text-2xl font-black italic">GYM_RAT</span>
            <span className="text-2xl font-black italic">HEALTHLINE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;