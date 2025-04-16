import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
export default function App() {
  const navLinks = [
    {text: "Home", href: "#home"},
    {text: "About", href: "#about"},
    {text: "Projects", href: "#projects"},
    {text: "Contact", href: "#contact"},
  ];
  const projects = [
    {title: "Radiant memories", description: "A cool project", link: "http://radiantmemories.great-site.net"},
    {title: "Hotel moonlight", description: "Another awesome project", link: "#"},
    {title: "Red-roof Hotel", description: "Another daami project", link: "#"},
  ];

  return (
    <>
      <Header title="Alex Portfolio" links={navLinks} />
      <Hero name="Alex kandel" role="Frontend Developer" />
      <About description="Hello! I'm a frontend developer with a genuine love for all things web. I'm constantly learning and exploring new technologies to build dynamic and engaging user experiences. My portfolio showcases a range of projects that demonstrate my skills in [mention a few key skills again]. I'm excited to connect and discuss how I can contribute to your next project!" />
      <Projects projects={projects} />
      <Contact email="Info@alexkandel.com.np" phone="9842852413" location="Bharatpur,Chitwan" />
      <Footer text="© 2025 Alex Kandel. All rights reserved." />
    </>
  );
}
