
// import react from 'react'
//  import Hero from  '../components/Hero'
//  import About from '../components/About'
//   import Projects from '../components/Projects'
//     import Skills from '../components/Skills'
//     import Work from '../components/Work'
//     import Certificates from '../components/Certificates'
//    import Contacts from '../components/Contacts'
// import Footer from '../components/Footer'
// // import Certificates from '../components/Certificates'


 


// const Home = () => {
//   return (
//     <div>
//         <Hero />  
//         <About />
//          <Skills /> 
//         <Projects />
//         <Work />
//         <Certificates />
//          <Contacts /> 
//          <Footer />
        
      
//     </div>
//   )
// }

// export default Home

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const services = [
  {
    number: '01',
    title: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    title: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    title: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    title: 'Branding',
    description:
      'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    title: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

const projectData = [
  {
    id: '01',
    title: 'Nextlevel Studio',
    category: 'Client',
    leftTop: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    leftBottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    right: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    id: '02',
    title: 'Aura Brand Identity',
    category: 'Personal',
    leftTop: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    leftBottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    right: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    id: '03',
    title: 'Solaris Digital',
    category: 'Client',
    leftTop: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    leftBottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    right: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
]

function Magnet({ children, padding = 150, strength = 3, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const handleMove = (event) => {
      const bounds = node.getBoundingClientRect()
      const offsetX = event.clientX - (bounds.left + bounds.width / 2)
      const offsetY = event.clientY - (bounds.top + bounds.height / 2)
      const distance = Math.hypot(offsetX, offsetY)

      if (distance <= padding) {
        targetX = (offsetX / (bounds.width / 2)) * strength
        targetY = (offsetY / (bounds.height / 2)) * strength
      } else {
        targetX = 0
        targetY = 0
      }
    }

    const handleLeave = () => {
      targetX = 0
      targetY = 0
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.15
      currentY += (targetY - currentY) * 0.15
      node.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
    node.addEventListener('pointermove', handleMove)
    node.addEventListener('pointerleave', handleLeave)

    return () => {
      node.removeEventListener('pointermove', handleMove)
      node.removeEventListener('pointerleave', handleLeave)
    }
  }, [padding, strength])

  return <div ref={ref} {...props}>{children}</div>
}

function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function AnimatedText({ text, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const chars = [...text].map((char, index) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.opacity = '0.2'
      span.style.position = 'relative'
      span.style.display = 'inline-block'
      span.style.transition = 'opacity 0.45s ease'
      span.setAttribute('data-index', String(index))
      node.appendChild(span)
    })

    const onScroll = () => {
      const rect = node.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
      chars.forEach((char, index) => {
        const local = (index / Math.max(1, chars.length - 1))
        const opacity = Math.min(1, Math.max(0.2, (progress - local * 0.8) / 0.5 + 0.2))
        char.style.opacity = String(opacity)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [text])

  return <p ref={ref} className={className} />
}

function ContactButton() {
  return (
    <a
      href='#Contact'
      className='inline-flex items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-[0_4px_12px_rgba(119,33,177,0.45)] transition-opacity duration-200 hover:opacity-90 sm:px-10 sm:py-3.5 md:px-12 md:py-4 md:text-sm'
      style={{ boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset, 0 0 0 2px rgba(255,255,255,0.8) inset' }}
    >
      Contact Me
    </a>
  )
}

function LiveProjectButton() {
  return (
    <button className='inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base'>
      Live Project
      <ArrowUpRight className='h-4 w-4' />
    </button>
  )
}

function Home() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const animateMarquee = () => {
      const section = sectionRef.current
      if (!section) return
      const rows = section.querySelectorAll('[data-marquee-row]')
      const offset = (window.scrollY - (section.offsetTop - window.innerHeight)) * 0.3
      rows.forEach((row, index) => {
        const direction = index === 0 ? 1 : -1
        const x = direction * (offset - 200)
        row.style.transform = `translate3d(${x}px, 0, 0)`
      })
    }

    animateMarquee()
    window.addEventListener('scroll', animateMarquee, { passive: true })
    return () => window.removeEventListener('scroll', animateMarquee)
  }, [])

  return (
    <div className='overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]' style={{ fontFamily: 'Kanit, sans-serif' }}>
      <div className='mx-auto max-w-[1920px]'>
        <header className='relative h-screen overflow-hidden bg-[#0C0C0C]'>
          <nav className='flex items-center justify-between px-6 pt-6 text-[#D7E2EA] md:px-10 md:pt-8'>
            <FadeIn delay={0} duration={0.75} y={-20} className='w-full'>
              <div className='flex w-full items-center justify-between'>
                <div className='hidden md:block'>
                  <a href='#About' className='text-sm font-medium uppercase tracking-[0.2em] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]'>About</a>
                </div>
                <div className='hidden md:block'>
                  <a href='#Price' className='text-sm font-medium uppercase tracking-[0.2em] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]'>Price</a>
                </div>
                <div className='hidden md:block'>
                  <a href='#Projects' className='text-sm font-medium uppercase tracking-[0.2em] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]'>Projects</a>
                </div>
                <div className='hidden md:block'>
                  <a href='#Contact' className='text-sm font-medium uppercase tracking-[0.2em] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]'>Contact</a>
                </div>
              </div>
            </FadeIn>
          </nav>

          <div className='relative z-10 flex h-[calc(100vh-4rem)] flex-col'>
            <FadeIn delay={0.15} duration={0.8} y={40} className='px-4 sm:px-6 md:px-10'>
              <h1 className='hero-heading mt-6 w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-[-0.06em] sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]'>Hi, i&apos;m jack</h1>
            </FadeIn>

            <div className='mt-auto flex items-end justify-between gap-6 px-4 pb-7 sm:px-6 sm:pb-8 md:px-10 md:pb-10'>
              <FadeIn delay={0.35} duration={0.8} y={20} className='max-w-[160px] text-[#D7E2EA] uppercase leading-snug tracking-[0.14em] sm:max-w-[220px] md:max-w-[260px]'>
                <p className='text-[clamp(0.75rem,1.4vw,1.5rem)] font-light'>a 3d creator driven by crafting striking and unforgettable projects</p>
              </FadeIn>

              <FadeIn delay={0.5} duration={0.8} y={20}>
                <ContactButton />
              </FadeIn>
            </div>
          </div>

          <div className='pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0'>
            <FadeIn delay={0.6} duration={0.9} y={30} className='pointer-events-auto'>
              <Magnet className='block' padding={150} strength={3}>
                <img
                  src='https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'
                  alt='Jack portrait'
                  className='w-[280px] object-cover sm:w-[360px] md:w-[440px] lg:w-[520px]'
                />
              </Magnet>
            </FadeIn>
          </div>
        </header>

        <section ref={sectionRef} className='bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40'>
          <div className='space-y-3 overflow-hidden'>
            {[0, 1].map((rowIndex) => {
              const rowImages = [...marqueeImages].slice(rowIndex === 0 ? 0 : 11, rowIndex === 0 ? 11 : 21)
              const repeated = [...rowImages, ...rowImages, ...rowImages]
              return (
                <div
                  key={rowIndex}
                  data-marquee-row
                  className='flex w-max gap-3 will-change-transform'
                  style={{ transform: 'translate3d(0,0,0)' }}
                >
                  {repeated.map((src, index) => (
                    <img
                      key={`${rowIndex}-${index}`}
                      src={src}
                      alt='Portfolio preview'
                      loading='lazy'
                      className='h-[270px] w-[420px] rounded-2xl object-cover'
                    />
                  ))}
                </div>
              )
            })}
          </div>
        </section>

        <section className='relative min-h-screen bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10'>
          <FadeIn delay={0.1} duration={0.9} x={-80} className='absolute left-[1%] top-[4%] sm:left-[2%] md:left-[4%]'>
            <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png' alt='Moon icon' className='w-[120px] sm:w-[160px] md:w-[210px]' />
          </FadeIn>
          <FadeIn delay={0.25} duration={0.9} x={-80} className='absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]'>
            <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png' alt='3D object' className='w-[100px] sm:w-[140px] md:w-[180px]' />
          </FadeIn>
          <FadeIn delay={0.15} duration={0.9} x={80} className='absolute right-[1%] top-[4%] sm:right-[2%] md:right-[4%]'>
            <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png' alt='Lego icon' className='w-[120px] sm:w-[160px] md:w-[210px]' />
          </FadeIn>
          <FadeIn delay={0.3} duration={0.9} x={80} className='absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]'>
            <img src='https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png' alt='3D group' className='w-[130px] sm:w-[170px] md:w-[220px]' />
          </FadeIn>

          <div className='relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16'>
            <FadeIn delay={0} duration={0.8} y={40}>
              <h2 className='hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-[-0.06em]'>About me</h2>
            </FadeIn>

            <div className='flex max-w-[560px] flex-col items-center justify-center text-center'>
              <AnimatedText
                text='With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let&apos;s build something incredible together!'
                className='text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]'
              />
            </div>

            <FadeIn delay={0.1} duration={0.8} y={20}>
              <ContactButton />
            </FadeIn>
          </div>
        </section>

        <section className='rounded-t-[40px] bg-[#FFFFFF] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32'>
          <h2 className='mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-[-0.06em] text-[#0C0C0C] sm:mb-20 md:mb-28'>Services</h2>
          <div className='mx-auto max-w-5xl'>
            {services.map((service, index) => (
              <FadeIn key={service.number} delay={index * 0.1} duration={0.7} y={20} className='border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12'>
                <div className='flex flex-col gap-4 sm:gap-6 md:flex-row md:items-start md:gap-8'>
                  <div className='text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C]'>{service.number}</div>
                  <div className='flex-1'>
                    <h3 className='text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase text-[#0C0C0C]'>{service.title}</h3>
                    <p className='mt-2 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C] opacity-60'>{service.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className='relative -mt-10 z-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-16 pt-8 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10'>
          <h2 className='hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-[-0.06em]'>Project</h2>
          <div className='mt-8 space-y-8'>
            {projectData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className='sticky top-24 mx-auto h-[85vh] w-full max-w-[1600px] rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:top-32 md:rounded-[60px] md:p-8'
                style={{ top: `${index * 28}px` }}
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex items-center gap-4'>
                    <span className='text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#D7E2EA]'>{project.id}</span>
                    <span className='text-sm font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/70'>{project.category}</span>
                  </div>
                  <div className='flex items-center gap-4'>
                    <span className='text-[clamp(1rem,2vw,2.1rem)] font-medium uppercase text-[#D7E2EA]'>{project.title}</span>
                    <LiveProjectButton />
                  </div>
                </div>

                <div className='mt-6 grid gap-4 md:grid-cols-[40%_60%]'>
                  <div className='flex flex-col gap-4'>
                    <img src={project.leftTop} alt={`${project.title} 1`} className='h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]' />
                    <img src={project.leftBottom} alt={`${project.title} 2`} className='h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]' />
                  </div>
                  <img src={project.right} alt={`${project.title} full`} className='h-full min-h-[260px] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]' />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
