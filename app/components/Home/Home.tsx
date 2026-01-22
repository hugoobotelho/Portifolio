'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      })
    }
    initAOS()

  }, [])

  return (
    <div className="overflow-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="services" className="scroll-mt-[10vh]">
        <Services />
      </section>

      <section id="resume" className="scroll-mt-[10vh]">
        <Resume />
      </section>

      <section id="works" className="scroll-mt-[10vh]">
        <Projects />
      </section>

      <section id="skills" className="scroll-mt-[10vh]">
        <Skills />
      </section>

      <section id="contact" className="scroll-mt-[10vh]">
        <Contact />
      </section>

    </div>
  )
}

export default Home