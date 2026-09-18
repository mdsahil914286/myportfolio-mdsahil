import React from 'react'
import {motion} from 'framer-motion'


import profile from '../components/images/profile.png'
import resume1 from '../components/images/resume1.png'
// import {resume }from '../components/resume.pdf'
// import About from '../components/About'
import Particles from "./Particles";
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
     className='min-h-screen flex items-center pt-2- pb-16 bg-dark-200'
    
    >
         <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
     
      
    
        
           <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
            {/* left in side content */}
        <div className='md:w-1/2 md-10 '>






 <div className="flex items-center justify-center md:justify-start md:items-start mt-50">
      <h2 className="text-2xl sm:text-3xl md:text-5xl  font-bold text-white">
        I'm a{" "}
        <span
          ref={typedRef}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        ></span>
      </h2>
    </div>

{/* <p className="intro-subtitle"><span className="text-slider-items">Web Developer,Web Designer,Frontend Developer,Mobile App Developer</span><strong className="text-slider">Mobile App De</strong><span className="typed-cursor">|</span></p> */}



{/* <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'> Full Stack Developer</h2> */}
<p> I create stunning web experiences with Technologies <br></br>
    MERN Stack Developer | React.js | Node.js | Express.js | MongoDB | BCA Graduate 2026 |  MGM COLLEGE IT & MANAGEMENT ,PATNA.</p><br></br>
    <div>
        <a href='#Projects' className='px-6 py-3  border-purple-300 rounded-lg font-medium hover:bg-purple-500  duration-purple-300 mr-3 m-20px cursor-pointer shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-indigo-500/50'>view work</a>
        <a href='#Contacts' className='px-6 py-3 border-purple-500 rounded-lg font-medium hover:bg-purple-500  duration-purple-300 m-20px cursor-pointer shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-indigo-500/50'>Contact Me</a>
        
<button
  type="submit"
  onClick={downloadPDF}
  class="flex justify-center my-20  cursor-pointer gap-2 items-center  shadow-xl text-sm bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-md before:transition-all before:duration-700 before:hover:w-md before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 hover:text-gray-50 before:-z-10 before:aspect-square  px-4 py-2 overflow-hidden border-2 rounded-full group">
   <Download className="w-5 h-5" />
  Download Resume
  
 
</button>

    </div>

         </div>
{/* right in side contant */}
<div className='md:w-1/2 flex justify-center'>
<div className='relative w-64 h-64 md:-80 md:h-80'>
    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink  opacity-70'>
          <motion.img
          animate={{y:[0, -20, 0]}}
          transition={{duration: 4, repeat:Infinity, repeatType:"loop", ease:'easeInOut'}}
          className='relative rounded-full  
box-shadow: var(--shadow-xl);  opacity-100   mt-10 w-64 h-64 md:w-80 md:h-80 object-cover z-10 animation-float'
           src={profile} alt="profile"/>  

           

        
    </div>
</div>
</div>

         </div> 
      

    


    </motion.div>
  )
}

export default Hero
