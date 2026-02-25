import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Williams",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aspernatur cum totam saepe corporis placeat neque labore veritatis perferendis nemo.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://Youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aspernatur cum totam saepe corporis placeat neque labore veritatis perferendis nemo.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://Youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Lauren",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aspernatur cum totam saepe corporis placeat neque labore veritatis perferendis nemo.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://Youtube.com" },
    ],
  },
    {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aspernatur cum totam saepe corporis placeat neque labore veritatis perferendis nemo.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://Youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="h2 text-center mb-6">Our trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerData.map((trainer, index) => {
            return (
              <div key={index}>
                <div className="relative w-[320px] h-90 mx-auto mb-4">
                  <Image src={trainer.image} fill  alt=''/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;


