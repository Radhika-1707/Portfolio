import Hero from '../components/Hero'
import Header from '../components/Header'
import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
export default function Home() {
  return (

    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y z-0 
    overflow-y-scroll snap-mandatory overflow-x-hidden first-letter:
    scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-[#F7AB0A]/80
    '>
      <Head>
        <title>Radhika Portfolio</title>
      </Head>
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <Experience />

      </section>
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      <section id='contact'className='snap-start' >
        <Contact/>
      </section>
      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div  className='flex items-center justify-center'>
          <img
          className='w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
          src='/user.png' alt=''/>
        </div>
      </footer>
      </Link>
    </div>
  )
}
