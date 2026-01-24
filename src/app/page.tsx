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
// -----------------------

// return (
//   // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//     <div>
//       {/*<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//       homepage
//     </main> */}
//       <main>homepage</main>
//     </div>
//   {/* </div> */}
// );
