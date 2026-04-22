import React from 'react'

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
<div className='container mx-auto flex items-center justify-between'>
  <div >
    <a href='#' className='text-3xl font-bold text-white'>Sahil
        <span className='text-purple-500'>  SHAIKH</span>
        <div className='w-4 h-4 bg-purple-600 rounded-full ml-2'></div>
        </a>
  </div>
    <div className='hidden md:flex space-x-10'>
      <a href='#Home' className='text-white hover:text-purple-500  '>Home</a>
      <a href='#About' className='text-white hover:text-purple-500 '>About</a>
        <a href='#Skills' className='text-white hover:text-purple-500   '>Skills</a>
      <a href='#Projects' className='text-white hover:text-purple-500  '>Projects</a>
      <a href='#Contacts' className='text-white hover:text-purple-500   '>Contacts</a>
    </div>





</div>
{/* mobile menu */}
<div className='md:hidden relative   items-end justify-end flex'>
    {showMenu ? (
      <div className='absolute top-16 right-0 bg-dark-100 w-full flex flex-col items-center py-4 space-y-4 '>
        <a  href='#Home' className='relative text-white hover:text-purple-group transition duration-500 '>Home</a>
        <a href='#About' className='relative text-white hover:text-purple-group transition duration-500 '>About</a>
        <a href='#Projects' className= ' relative text-white hover:text-purple-group transition duration-500 '>Projects</a>
        <a  href='#Skills' className=' relative text-white hover:text-purple-group  transition duration-500'>Skills</a>
        <a  href='#Contact' className='relative text-white hover:text-purple-group  transition duration-500'>Contact</a>
      </div>
    ) : null}
    <button className='text-white focus:outline-none hover:text-purple-500 cursor-pointer  ' onClick={() => setShowMenu(!showMenu)}>
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
      </svg>
    </button>

</div>
    </nav>
  )
}

export default Navbar
