import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.div
      initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.9, ease:'easeout'}}
    viewport={{once: false, amount:0.2}}
    id='Skills'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-center text-white'>My <span className='text-purple-500'>Skills</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Here are some of the technologies and tools I work with:</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* skill card */}
                <div className='bg-dark-200 rounded-lg p-6 text-center cursor-pointer transition-transform duration-300 hover:translate-y-2'>
                    <h3 className='text-xl font-semibold mb-4 text-white'>Frontend</h3>
                    <p className='text-gray-400'>React, HTML, CSS, JavaScript, Tailwind CSS</p>
                </div>
                {/* skill card */}
                <div className='bg-dark-200 rounded-lg p-6 text-center cursor-pointer transition-transform duration-300 hover:translate-y-2'>
                    <h3 className='text-xl font-semibold mb-4 text-white'>Backend</h3>
                    <p className='text-gray-400'>Node.js, Express, MongoDB</p>
                </div>
                {/* skill card */}
                <div className='bg-dark-200 rounded-lg p-6 text-center cursor-pointer transition-transform duration-300 hover:translate-y-2'>
                    <h3 className='text-xl font-semibold mb-4 text-white'>Tools</h3>
                    <p className='text-gray-400'>Git, GitHub, VS Code, Postman</p>
                </div>


            </div>
        </div>
    </motion.div>
  )
}
//         </div>
      
//     </motion.div>
//   )
// }

export default Skills
