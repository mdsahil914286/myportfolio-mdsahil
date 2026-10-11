import React from 'react'
import {motion} from 'framer-motion'
import './Hero.css'

import profile from '../components/images/profile.png'
// import {resume }from '../components/resume.pdf'
// import About from '../components/About'
import { useEffect, useRef } from "react";
import {Download} from 'lucide-react';
import Typed from "typed.js";


const Hero =() => {
    const typedRef = useRef(null);


    useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        "Web Designer",
        "Frontend Developer",
        "Problem Solver",
      ],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

    const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/resume1.png";
    link.download = "/resume1.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease:'ease-out'}}
    viewport={{once: true}}
    id = 'Home'
     className='relative flex min-h-screen items-center overflow-hidden bg-transparent px-4 pb-12 pt-24 sm:px-6 md:px-8'
    >
           <div className='container relative z-10 mx-auto flex w-full flex-col items-center justify-between gap-10 md:flex-row md:gap-8'>
            {/* left in side content */}
        <div className='w-full min-w-0 md:w-1/2'>






 <div className="mb-6 flex items-center justify-center md:justify-start">
      <h2 className="flex max-w-full flex-wrap items-center justify-center gap-x-2 text-center text-2xl font-bold text-white sm:text-3xl md:justify-start md:text-left md:text-5xl">
        I'm a
        <span
          ref={typedRef}
          className="max-w-full break-words bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        ></span>
      </h2>
    </div>

{/* <p className="intro-subtitle"><span className="text-slider-items">Web Developer,Web Designer,Frontend Developer,Mobile App Developer</span><strong className="text-slider">Mobile App De</strong><span className="typed-cursor">|</span></p> */}



{/* <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'> Full Stack Developer</h2> */}
<p className="break-words text-center text-sm leading-relaxed text-white/80 md:text-left sm:text-base">I create stunning web experiences with technologies. MERN Stack Developer | React.js | Node.js | Express.js | MongoDB | BCA Graduate 2026 | MGM College IT &amp; Management, Patna.</p>
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
        <a href="#Projects" className="hero-cta" aria-label="View work">
          <span className="hero-cta__surface">
            <span className="hero-cta__words" aria-hidden="true">
              {'View work'.split('').map((character, index) => (
                <span
                  className="hero-cta__character"
                  data-label={character === ' ' ? '\u00a0' : character}
                  key={`${character}-${index}`}
                  style={{ '--char-index': index }}
                >
                  {character === ' ' ? '\u00a0' : character}
                </span>
              ))}
            </span>
            <svg
              className="hero-cta__icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
        <a href='#Contacts' className='rounded-lg border border-purple-500 px-5 py-3 text-center font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 sm:px-6'>Contact Me</a>
        
<button
  type="button"
  onClick={downloadPDF}
  className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-50 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 shadow-xl transition-colors hover:bg-blue-500 hover:text-white">
   <Download className="w-5 h-5" />
  Download Resume
  
 
</button>

    </div>

         </div>
{/* right in side contant */}
<div className='flex w-full justify-center md:w-1/2'>
<div className='relative mt-4 h-56 w-56 sm:h-64 sm:w-64 md:mt-0 md:h-80 md:w-80'>
    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink opacity-70'>
          <motion.img
          animate={{y:[0, -20, 0]}}
          transition={{duration: 4, repeat:Infinity, repeatType:"loop", ease:'easeInOut'}}
          className='relative z-10 mt-3 h-full w-full rounded-full object-cover opacity-100 shadow-xl'
           src={profile} alt="profile"/>  

           

        
    </div>
</div>
</div>

         </div> 
      

    


    </motion.div>
  )
}

export default Hero
