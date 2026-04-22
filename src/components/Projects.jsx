import React from 'react'
import { motion } from 'framer-motion'

function Project() {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.9, ease:'easeout'}}
    viewport={{once: false, amount:0.2}}
    id='Projects'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6' flex-col md:flex-row items-center justify-between>

            <h2 className='text-3xl font-bold text-purple-700 mb-10 text-center  '>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* project card */}
                 <div className='bg-dark-200 rounded-lg border-8 border-purple-500 p-6 cursor-pointer transition-transform duration-300 hover:translate-y-2'>
                    <h3 className='text-xl font-semibold mb-4 text-white'>Project 1</h3>
                    <p className='text-gray-400'>Description of the project goes here.</p>
                </div> 
                {/* {
                    // project card
                    Projects.map((project, index) => (
                      <projectCard key={index} {...project} />

                    ))
                } */}
              
                {/* project card */}
                <div className='bg-dark-200 rounded-lg border-8 border-purple-500  p-6 cursor-pointer transition-transform duration-300 hover:translate-y-2'>
                    <h3 className='text-xl font-semibold mb-4 text-white'>Project 2</h3>
                    <p className='text-gray-400'>Description of the project goes here.</p>
                </div>
                {/* project card */}
                <div className='bg-dark-200 rounded-lg border-8 border-purple-500 p-6 cursor-pointer transition-transform duration-300 hover:translate-y-2'>
                    <h3 className='text-xl font-semibold mb-4 text-white'>Project 3</h3>
                    <p className='text-gray-400'>Description of the project goes here.</p>
                </div>

            </div>

        </div>

    </motion.div>
  )
}

export default Project
