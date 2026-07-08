import React from 'react'
import { motion } from 'framer-motion'


const Skills = () => {
  return (
    <motion.div
      initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.9, ease:'ease-out'}}
    viewport={{once: false, amount:0.2}}
    id='Skills'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-center text-white'>My <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Skills</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Here are some of the technologies and tools I work with:</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* skill card */}
                <div className='bg-dark-200 rounded-lg p-6 text-center cursor-pointer transition-transform duration-300 hover:translate-y-2'>
                    <h3 className='text-xl font-semibold mb-4 text-white'>Frontend</h3>
                    <p className='text-gray-400'>
                 <div className='flex flex-wrap justify-center gap-6'>
                    <div className='flex flex-col items-center hover:border-cyan-400 cursor-pointer rounded-lg p-4 
   hover:bg-dark-300 
    border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
        caret-cyan-400 cursor-pointer '>
                         <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' alt='HTML' className='w-8 h-8 ' />
                         <p className='text-grey-400 mt-2 '>HTML</p>
                    </div>
                        <div className='flex flex-col items-center  rounded-lg p-4
                         hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                         <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' alt='CSS' className='w-8 h-8 ' />
                         <p className='text-grey-400 mt-2 '>CSS</p>
                    </div>
                   
                       <div className='flex flex-col items-center rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                         <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='JavaScript' className='w-8 h-8 ' />
                         <p className='text-grey-400 mt-2 '>JavaScript</p>
                    </div>
                       <div className='flex flex-col items-center rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                         <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='React' className='w-8 h-8 ' />
                         <p className='text-grey-400 mt-2 '>React</p>
                    </div>
                         <div className='flex flex-col items-center rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                         <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' alt='Tailwind CSS' className='w-8 h-8 ' />
                         <p className='text-grey-400 mt-2 '>Tailwind CSS</p>
                    </div>
                </div> 
                    
                </p>
                </div>
                {/* skill card */}
                <div className='bg-dark-200 rounded-lg p-6 text-center cursor-pointer transition-transform duration-300 hover:translate-y-2'>
                    <h3 className='text-xl font-semibold mb-4 text-white'>Backend</h3>
                    <p className='text-gray-400'>
                        <div className='flex flex-wrap justify-center gap-6'>

                                <div className='flex flex-col items-center  rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                         <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' alt='Node.js' className='w-8 h-8 ' />
                         <p className='text-grey-400 mt-2 '>Node.js</p>
                    </div>
                              <div className='flex flex-col items-center  rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                         <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' alt='Express.js' className='w-8 h-8 col bg-white outline-blue-300' />
                         <p className='text-grey-400 mt-2 '>Express.js</p>
                    </div>
                               <div className='flex flex-col items-center  rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                         <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' alt='MongoDB' className='w-8 h-8 ' />
                         <p className='text-grey-400 mt-2 '>MongoDB</p>
                    </div>
                             <div className='flex flex-col items-center  rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                         <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' alt='MySQL' className='w-8 h-8 ' />
                         <p className='text-grey-400 mt-2 '>MySQL</p>
                    </div>
                        </div>
                    
                        </p>
                </div>
                {/* skill card */}
                <div className='bg-dark-200 rounded-lg p-6 text-center cursor-pointer transition-transform duration-300 hover:translate-y-2'>
                    <h3 className='text-xl font-semibold mb-4 text-white'>Tools</h3>
                    <p className='text-gray-400'>
                         <div className='flex flex-wrap justify-center gap-6'>
                            <div className='flex flex-col items-center rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' alt='Git' className='w-8 h-8 ' />
                                <p className='text-grey-400 mt-2 '>Git</p>
                            </div>
                            <div className='flex flex-col items-center  rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
        caret-cyan-400 cursor-pointer'>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt='GitHub' className='w-8 h-8 bg-white ' />
                                <p className='text-grey-400 mt-2 '>GitHub</p>
                            </div>
                            <div className='flex flex-col items-center  rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' alt='Visual Studio Code' className='w-8 h-8 ' />
                                <p className='text-grey-400 mt-2 '>Visual Studio Code</p>
                            </div>
                            <div className='flex flex-col items-center  rounded-lg p-4 hover:bg-dark-300   border-2
    border-transparent
    outline-none
    transition-all
    duration-300  hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer'>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' alt='Postman' className='w-8 h-8 ' />
                                <p className='text-grey-400 mt-2 '>Postman</p>
                            </div>
                        </div> 
                    </p>
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
