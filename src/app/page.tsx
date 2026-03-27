import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Team from "@/components/Team";
import Membership from "@/components/Membership";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Brand from "@/components/Brand";
import Price from "@/components/Price";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Classes />
        <Team />
        <Membership />
        <Testimonial />
        <Price/>
        <Blog />  
        <Brand/>
      </main>
    </div>
  );
}


