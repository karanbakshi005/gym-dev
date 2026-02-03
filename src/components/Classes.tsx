"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";

const classes = () => [
  {
    name: "body building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus libero incidunt tempora error mollitia molestias culpa dolorem pariatur?",
  },
  {
    name: "Cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus libero incidunt tempora error mollitia molestias culpa dolorem pariatur?",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus libero incidunt tempora error mollitia molestias culpa dolorem pariatur?",
  },

  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus libero incidunt tempora error mollitia molestias culpa dolorem pariatur?",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes().map(
          (
            item: { name: string; img: string; description: string },
            index: number,
          ) => {
            return (
              <div
                className="relative w-full h-75 lg:h-121.25 flex flex-col justify-center items-center"
                key={index}
              >
                <Image
                  src={item.img}
                  fill
                  className="object-cover"
                  alt="logo"
                />
                {/* text/btn */}
                <div className="z-30 max-w-95 text-center flex flex-col">
                  <motion.h3
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="h3 text-brand"
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-white"
                  >
                    {item.description}
                  </motion.p >
                  <motion.div
                   variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}>  
                    <CustomButton
                      containerStyle="w-[164px] h-[46px]"
                      text="Read more"
                    />
                  </motion.div>
                </div>
              </div>
            );
          },
        )}
      </motion.div>
    </section>
  );
};

export default Classes;
