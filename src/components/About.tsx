"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Et accusantium veniam itaque est delectus cumque expedita nihil molestiae perferendis natus",
  },
  {
    icon: <IoIosPricetag />,
    title: "excellent price",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Et accusantium veniam itaque est delectus cumque expedita nihil molestiae perferendis natus",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equiment",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Et accusantium veniam itaque est delectus cumque expedita nihil molestiae perferendis natus",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-150 mx-auto text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ducimus eaque minus laborum impedit illo molestias quis
            reprehenderit modi, rerum in rem, voluptatum accusantium quia.
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                className="flex items-center flex-col justify-center gap-4 border p-10"
                key={index}
              >
                <div className="text-4xl bg-primary-300 text-white w-20 h-20 rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <h4 className="h4 text-brand">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
