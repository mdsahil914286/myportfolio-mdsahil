import React from 'react'
import {motion} from 'framer-motion'

import profile from '../components/images/profile.png'
// import About from '../components/About'


const Hero =() => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease:'easeout'}}
    viewport={{once: true}}
    id = 'Home'
    className='min-h-screen flex items-center pt-2- pb-16 bg-dark-200 '
    >

        <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
            {/* left in side content */}
       <div className='md:w-1/2 md-10 md:md-0'>
<h1 className='text-4xl md:text-6xl font-bold md-4'>
    Hi, I'm <span className='text-purple-500'>SAHIL SHAIKH</span>
</h1>
<h2 className='text-2xl md:text-4xl font--semibold mb-6 typewriter'> Full Stack Developer</h2>
<p> I create stunningweb experiences with teachnologies <br></br>
    and innovative design.</p><br></br>
    <div>
        <a href='#projects' className='px-6 py-3 outline-cyan-500 border-purple-300 rounded-lg font-medium hover:bg-purple-500 transition duration-purple-300 mr-3 m-20px'>view work</a>
        <a href='#Contact' className='px-6 py-3 border-purple-500 rounded-lg font-medium hover:bg-purple-500 transition duration-purple-300 m-20px'>Contact Me</a>
    </div>

         </div>
{/* right in side contant */}
<div className='md:w-1/2 flex justify-center'>
<div className='relative w-64 h-64 md:-80 md:h-80'>
    <div className='absolute inset-0 rounded-full `bg-gradient-to-r` from-purple-500 to-pink  opacity-70'>
          <motion.img
          animate={{y:[0, -20, 0]}}
          transition={{duration: 4, repeat:Infinity, repeatType:"loop", ease:'easeInOut'}}
          className='relative rounded-full bg-purple-700 
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
