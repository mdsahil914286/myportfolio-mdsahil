import React from 'react'


const ProjectCard = ({title, description,image,tech}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover' />
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2 text-white'>{title}</h3>
            <p className='text-gray-400 mb-4'>{description}</p>
            <div>
                {tech.map((item, index) => (
                    <span key={index} className='text-sm text-purple-500 mr-2'>{item}</span>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
