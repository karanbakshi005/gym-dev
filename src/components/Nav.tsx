'use client';
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "class", offset: -80 },
  { name: "team", target: "team", offset: -0 },
  { name: "price", target: "price", offset: -40 },
  { name: "testimonial", target: "testimonial", offset: 0 },  
  { name: "blog", target: "blog", offset: 0 },  
  { name: "contact", target: "contact", offset: 0 },
];

type NavProps = {
  containerStyles: string;
};

const Nav = ({ containerStyles }: NavProps) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
            <ScrollLink
              offset={link.offset}
              to={link.target}
              smooth
              spy
              activeClass="active"
              className="cursor-pointer hover:text-brand transition-all"
              key={index}
            >
              {" "}
              {link.name}
            </ScrollLink>
        );
      })}
    </nav>
  );
};
export default Nav;

//below is another method
// const Nav = ({ containerStyles }: { containerStyles: string }) => {
//   return <nav className={`${containerStyles}`}>Nav</nav>;
// };
