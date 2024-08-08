// import Image from "next/image";
// <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />

// export default function Home() {
  
// }


import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GitHubActivities from './components/GitHubActivities';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <GitHubActivities />
    <Contact />
    <Footer />
  </>
);

export default Home;
