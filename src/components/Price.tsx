import React from 'react';
import { CheckCircle2, Dumbbell, Zap, Crown } from 'lucide-react';

const Price = () => {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      icon: <Dumbbell className="w-8 h-8 text-blue-500" />,
      features: ['Access to gym floor', 'Basic locker room', '1 Complimentary orientation', 'Water station access'],
      recommended: false,
    },
    {
      name: 'Pro',
      price: '59',
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      features: ['Everything in Starter', 'Unlimited Group Classes', '24/7 Gym Access', 'Personalized Workout Plan', 'Sauna & Steam Room'],
      recommended: true,
    },
    {
      name: 'Ultimate',
      price: '99',
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      features: ['Everything in Pro', 'Weekly Personal Training', 'Nutrition Coaching', 'Free Guest Passes', 'Monthly Body Composition Scan'],
      recommended: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white" id="price">
      <div className="max-w-7xl mx-auto px-4 px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Strength</span>
          </p>
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
            No hidden fees. Flexible memberships designed to fit your fitness journey and goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:-translate-y-2 ${
                plan.recommended 
                ? 'bg-slate-800 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105 z-10' 
                : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'
              }`}
            >
              {plan.recommended && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-sm font-bold py-1 px-4 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div className="flex justify-between items-center mb-6">
                <div>
                  {plan.icon}
                  <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-slate-400 block text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-colors ${
                plan.recommended 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}>
                Join This Plan
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-12 text-slate-500 italic">
          * All plans include a 7-day money-back guarantee.
        </p>
      </div>
    </section>
  );
};

export default Price;