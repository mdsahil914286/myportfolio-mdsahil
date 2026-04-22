import React from 'react'
import { motion } from 'framer-motion' 
import bigimage2 from '../components/images/bigimage2.png' 

const About = () => {
  return (
  <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease:'easeout'}}
    viewport={{once: true}}
    id = 'About'
    className='py-20 bg-dark-200 text-white'
  >
    <div className='container mx-auto px-6 items-center'>
        {/* heading */}
      <h2 className='text-3xl md:text-5xl font-bold mb-4 text-center'>About
         <span className='text-purple-700'>Me</span> </h2>
      <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to 
        know me better! I'm a passionate web developer with a knack for creating stunning and functional websites.
      </p>
    
{/* img +  my journey */}
      <div className='flex-col md:flex-row flex items-center gap-20'>
       {/* img */}
       <div className='md:1/2 rounded-2xl overflow-hidden ml-20'>
     <motion.img
       initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.9, ease:'easeout'}}
    viewport={{once: false, amount:0.2}}
    className='w-500px h-500px object-cover rounded-2xl shadow-lg'
       src={bigimage2} alt='about me' />

     
       </div>
        {/* my journey */}
        < motion.div
           initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.9, ease:'easeout'}}
    viewport={{once: false, amount:0.2}} className='md:w-1/2'
     >
      <div className='rounded-2xl p-8'>
        <h3>My Journey</h3>
        <p className='text-gray-400'>
          I've been passionate about web development for several years now. My journey began with learning the fundamentals of HTML and CSS, and I've since expanded my skills to include JavaScript and modern frameworks like React.
        </p>
        <p className='text-gray-400 mt-4'>
          Along the way, I've worked on various projects, from simple landing pages to complex web applications. Each project has been a learning experience, allowing me to grow as a developer and refine my skills.
        </p>
       <p className='text-gray-400 mt-4'>
          I'm excited to continue this journey, exploring new technologies and taking on new challenges in the world of web development. Let's connect and see how we can collaborate on future projects!
        </p> 
         {/* cards 
         <div className=' grid-cols-1 md:grid-cols-2 gap-6'>
          {
            abInfo.map((data, index) => (
              <div key={index} className='bg-dark-300 rounded-2xl  p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
                <div className='text-purple-500 text-4xl'></div>
          
              </div>
            ))
          }
        </div>  */}
      </div>
      
        </motion.div>
      </div>
    </div>

  </motion.div>
  )
}

export default About

