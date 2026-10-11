import React from 'react'
import MaskedHeading from './Maskheading'
import GlassNav from './GlassNav'
import ThemeToggle from './ThemeToggle'
import wave from './images/wave.png'
import './Navbar.css'

const Navbar = ({ isDark, onThemeChange }) => {
  const [showMenu, setShowMenu] = React.useState(false)
  const links = [
    ['Home', 'Home'],
    ['About', 'About'],
    ['Skills', 'Skills'],
    ['Projects', 'Projects'],
    ['Experience', 'experience'],
    ['Certificates', 'Certificates'],
    ['Contact', 'Contacts'],
  ]

  return (
    <nav className='fixed z-50 w-full px-4 py-3 md:px-6'>
      <div className='container mx-auto'>
        <GlassNav className='px-3 py-2 md:px-4'>
          <div className='flex w-full items-center justify-between gap-4'>
            <a
              href='#Home'
              aria-label='Sahil Shaikh home'
              className='shrink-0 transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400'
            >
              <MaskedHeading
                text='Sahil Shaikh'
                src={wave}
                className='w-full'
                style={{ width: '10rem' }}
                textScale={0.08}
                parallax={6}
                drift={4}
                reveal='fade'
                trigger='mount'
                align='left'
                weight={700}
                tracking={-0.03}
                lineHeight={1}
              />
            </a>
            <div className='hidden items-center gap-4 lg:flex xl:gap-5'>
              {links.map(([label, id]) => (
                <a key={id} href={`#${id}`} className='nav-link text-md'>
                  {label}
                </a>
              ))}
            </div>
            <ThemeToggle isDark={isDark} onToggle={onThemeChange} />
            <div className='relative lg:hidden'>
              <button
                type='button'
                aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={showMenu}
                className='cursor-pointer text-white transition-colors hover:text-purple-400 '
                onClick={() => setShowMenu(!showMenu)}
              >
                <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
            </div>
          </div>
        </GlassNav>
        {showMenu && (
          <div className='relative mt-2 lg:hidden'>
            <GlassNav radius={16} className='p-5'>
              <div className='flex min-w-48 flex-col items-center gap-4'>
                {links.map(([label, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className='nav-link'
                    onClick={() => setShowMenu(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </GlassNav>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
