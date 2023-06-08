import Hero from '../components/Hero'
import Header from '../components/Header'
import Head from 'next/head'
import About from '../components/About'
export default function Home() {
  return (

    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y z-0 snap-mandatory overflow-scroll'>
      <Head>
        <title>Radhika Portfolio</title>
      </Head>
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About/>
      </section>
      {/* Experience */}
      {/* Skill */}
      {/* Project */}
      {/* Contact me */}
    </div>
  )
}
