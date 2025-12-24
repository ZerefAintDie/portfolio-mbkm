'use client';

// import { headers } from "next/headers";
// import Image from "next/image";
import Snowfall from "react-snowfall";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Magang from "./components/magang";
import Profile from "./components/profil";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Snowfall color="#ffffff"/>
      <Navbar />
      <Hero />
      <Magang />
      <Snowfall color="#ffffff"/>
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}
