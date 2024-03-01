import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Routes, Route, useNavigate } from "react-router-dom";
// Hide on scroll later

const Navbar = () => {
  const navLinks = [
    { label: "Charts", link: "/charts" },
    { label: "Navlink", link: "/" },
    { label: "About", link: "/about" },
  ];

  return (
    <div className="flex flex-row items-center pt-5 fixed w-full z-50">
      <div className="flex flex-row items-center font-bold cursor-pointer flex-1 text-[20pt] pl-48">
        <img src="/top-upSpy logo.png" className="w-[49pt]"></img>
        <h2>Top-up Spy</h2>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.index}
            className={`font-bold cursor-pointer text-[18pt] ${
              index === navLinks.length - 1 ? "mr-52" : "mr-20"
            }`}
          >
            <p>{navLink.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
