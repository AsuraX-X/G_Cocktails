"use client";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import About from "@/components/Home/About";
import Art from "@/components/Home/Art";
import Cocktails from "@/components/Home/Cocktails";
import Hero from "@/components/Home/Hero";
import Menu from "@/components/Home/Menu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
