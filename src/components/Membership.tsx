"use client";

import { CheckCircle2, Dumbbell, Zap, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const membershipData = [
  {
    title: "Basic",
    price: "39",
    description: "Perfect for those who want to train solo and stay fit.",
    icon: <Dumbbell className="w-10 h-10 text-blue-500" />,
    features: [
      "Access to gym floor 24/7",
      "Free initial orientation",
      "Locker room access",
      "Standard equipment",
    ],
    recommended: false,
  },
  {
    title: "Professional",
    price: "69",
    description: "The most popular choice for dedicated fitness enthusiasts.",
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Free fitness assessment",
      "Personalized workout plan",
      "Sauna & Steam room access",
    ],
    recommended: true,
  },
  {
    title: "Ultimate",
    price: "99",
    description: "For those who want the full elite athlete experience.",
    icon: <Crown className="w-10 h-10 text-yellow-500" />,
    features: [
      "Everything in Pro",
      "Weekly personal training",
      "Nutrition & Diet coaching",
      "Monthly body composition",
      "Complimentary guest passes",
    ],
    recommended: false,
  },
];

const Membership = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden" id="prices">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-blue-500 font-bold tracking-widest uppercase mb-2"
          >
            Membership
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-6xl font-black uppercase"
          >
            Crush Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Goals</span>
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membershipData.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className={`relative p-10 rounded-3xl border transition-all duration-500 group ${
                plan.recommended 
                ? "bg-slate-900 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105 z-10" 
                : "bg-slate-900/50 border-white/10 hover:border-blue-500/50"
              }`}
            >
              {/* Popular Tag */}
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-tighter">
                  Most Popular
                </div>
              )}

              {/* Icon & Title */}
              <div className="mb-8">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {plan.icon}
                </div>
                <h3 className="text-3xl font-black uppercase italic">{plan.title}</h3>
                <p className="text-slate-400 mt-2 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-black">$</span>
                <span className="text-6xl font-black">{plan.price}</span>
                <span className="text-slate-500 text-lg uppercase font-bold">/Month</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button 
                className={`w-full py-4 rounded-xl font-black uppercase tracking-wider transition-all duration-300 ${
                  plan.recommended 
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30" 
                  : "bg-white/10 hover:bg-white hover:text-black text-white"
                }`}
              >
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p 
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          className="text-center mt-12 text-slate-500 text-sm italic"
        >
          * Registration fee of $25 applies to all new memberships. Cancel anytime with 30 days notice.
        </motion.p>
      </div>
    </section>
  );
};

export default Membership;