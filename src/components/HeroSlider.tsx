"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Components
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

// 1. Content Data
const slideData = [
  {
    img: "/assets/img/hero/bg-1.jpg", 
    title: "Where Hard",
    titlePrimary: "Work Meets Success",
    description: "Push your limits and achieve the body you've always wanted with our expert trainers and world-class facility.",
  },
  {
    img: "/assets/img/hero/bg-2.jpg", 
    title: "Train Harder",
    titlePrimary: "Live Better",
    description: "Join our community of fitness enthusiasts and transform your life through disciplined training and nutrition.",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, EffectFade]}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="h-[80vh] lg:h-screen w-full"
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          
          {/* Background Image Container */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            {/* Dark Overlay - Favors the right side slightly for better text contrast */}
            <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-l lg:from-black/70 lg:to-transparent" />
          </div>

          {/* Content Section - Forced to the RIGHT */}
          <div className="container mx-auto h-full flex items-center justify-end px-6 lg:px-12 z-10 relative">
            <div className="flex flex-col items-end text-right max-w-[900px]">
              
              {/* Animated Heading - Fading in from the right */}
              <motion.h1
                variants={fadeIn("left", 0.4)} // Changed to "left" so it slides in from the right
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] mb-6"
              >
                <span>{slide.title}</span> <br />
                <span className="text-blue-500">{slide.titlePrimary}</span>
              </motion.h1>

              {/* Animated Paragraph */}
              <motion.p
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="text-white italic text-base md:text-lg lg:max-w-[550px] mb-10"
              >
                {slide.description}
              </motion.p>

              {/* Animated Button */}
              <motion.div
                variants={fadeIn("left", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                <CustomButton
                  text="Get started"
                  containerStyle="w-[180px] h-[58px] md:w-[196px] md:h-[62px]"
                />
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Navigation Buttons - Positioned at the bottom left for desktop to balance the UI */}
      <SwiperNavButtons
        containerStyles="absolute bottom-10 left-0 right-0 lg:left-20 lg:right-auto z-50 flex justify-center lg:justify-start gap-2"
        btnStyles="border border-blue-500 text-white w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex justify-center items-center hover:bg-blue-500 transition-all duration-300 backdrop-blur-sm"
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;