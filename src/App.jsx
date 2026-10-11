import { useEffect, useState } from 'react'
import About from './components/About'
import Certificates from './components/Certificates'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Work from './components/Work'
import Particles from './components/Particles'

function App() {
  const [isDark, setIsDark] = useState(() => {
    return window.localStorage.getItem('portfolio-theme') !== 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', !isDark)
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className='relative isolate min-h-screen bg-dark-200'>
      <div className='pointer-events-none fixed inset-0 z-0' aria-hidden='true'>
        <Particles
          particleColors={isDark ? ['#ffffff'] : ['#111827']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className='relative z-10'>
        <Navbar isDark={isDark} onThemeChange={() => setIsDark(current => !current)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Work />
          <Certificates />
          <Contacts />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
