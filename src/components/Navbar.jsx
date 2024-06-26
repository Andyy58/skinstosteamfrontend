import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Routes, Route, useNavigate } from "react-router-dom";
// Hide on scroll later

const Navbar = () => {
  const navLinks = [
    { label: "Home", link: "/" },
    { label: "Charts", link: "/charts" },
    { label: "About", link: "/about" },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between items-center pt-5 relative w-full">
      <div className="absolute w-[500px] h-[500px] paleviolet-layer-blur z-0 left-72 rounded-full bottom-[20%]"></div>
      <div className="absolute w-[400px] h-[400px] top-[320%] left-[68em] rounded-full lightblue-layer-blur z-0"></div>
      <div className="flex flex-row items-center font-bold flex-1 text-[20pt] ml-48">
        <img src="/top-upSpy logo.png" className="w-[49pt]"></img>
        <h2 className="w-fit cursor-pointer" onClick={() => navigate("/")}>
          Top-up Spy
        </h2>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-10">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.index}
            onClick={() => navigate(navLink.link)}
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
