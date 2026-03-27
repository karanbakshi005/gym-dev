"use client";

import { Link as ScrollLink } from "react-scroll";

interface NavLink {
  name: string;
  target: string;
  offset: number;
}

const links: NavLink[] = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "class", offset: -80 },
  { name: "team", target: "team", offset: 0 },
  { name: "prices", target: "prices", offset: -40 }, // Changed to 'prices' to match Membership ID
  { name: "testimonial", target: "testimonial", offset: 0 },
  { name: "blog", target: "blog", offset: 0 },
  { name: "brand", target: "brand", offset: 0 },
  { name: "contact", target: "contact", offset: 0 },
];

type NavProps = {
  containerStyles: string;
};

const Nav = ({ containerStyles }: NavProps) => {
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <ScrollLink
          key={index}
          to={link.target}
          offset={link.offset}
          smooth={true}
          spy={true}
          activeClass="active"
          className="cursor-pointer capitalize font-medium transition-all hover:text-blue-500"
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default Nav;