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
import { ThemeProvider } from './providers/theme-provider';

const Home = () => (
  <ThemeProvider>
    <div className="bg-background text-primary">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <GitHubActivities />
      <Contact />
      <Footer />
    </div>
  </ThemeProvider>
);

export default Home;
