import React from 'react'
import { motion } from 'framer-motion'
import project1 from '../components/images/project1.png'


function Project() {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.9, ease:'ease-out'}}
    viewport={{once: false, amount:0.2}}
    id='Projects'
    className='py-20 bg-dark-200'
    >
       <div className='container mx-auto px-6'>
        <h2 className='text-3xl  font-bold flex justify-center mb-12 gap-3'>My
           <span className='font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'> Projects</span>
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-dark-300 p-6 rounded-lg shadow-lg'>
            <img src={project1} alt='Project 1' className='mb-4 rounded-lg' />
            <h3 className='text-xl font-semibold text-white mb-4'>Project 1</h3>
            <p className='text-gray-400'>Description of Project 1.</p>
          </div>
          <div className='bg-dark-300 p-6 rounded-lg shadow-lg'>
            {/* <img src={project2} alt='Project 2' className='mb-4 rounded-lg' /> */}
            <h3 className='text-xl font-semibold text-white mb-4'>Project 2</h3>
            <p className='text-gray-400'>Description of Project 2.</p>
          </div>
          <div className='bg-dark-300 p-6 rounded-lg shadow-lg'>
            {/* <img src={project3} alt='Project 3' className='mb-4 rounded-lg' /> */}
            <h3 className='text-xl font-semibold text-white mb-4'>Project 3</h3>
            <p className='text-gray-400'>Description of Project 3.</p>
          </div>

        

        </div>

       </div>

        
            

              

    </motion.div>
  )
}

export default Project
