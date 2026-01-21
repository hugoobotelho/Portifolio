'use client'
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground'
import Link from 'next/link'
import { NavLinks } from '@/app/constants/constant'

const Hero = () => {
    return (
        <div className='relative flex items-center justify-center text-white h-screen overflow-hidden flex-col'>
            <ParticlesHero />
            <div className='relative z-10 flex flex-col items-center'>
                <Image src="/images/foto_hero.jpg" alt='heroImage' width={150} height={150} className='rounded-full border-8 border-[#112800aa]' data-aos="fade-up" />
                <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>Building modern web<br />
                    and mobile <span className='text-[#C4E860]'> applications.</span>
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="400" className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
                    Hi! I&apos;m Hugo - A passionate
                    <span className='font-bold text-[#C4E860]'>
                        <Typewriter options={{
                            strings: [
                                'Web Developer',
                                'Mobile Developer',
                                'Game Developer'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            wrapperClassName: 'pl-2',

                        }} />
                    </span>
                </h2>
                {/* button to works */}
                <a href={'#works'}> 
                    <button data-aos="fade-up" data-aos-delay="600" className='text-[#171D1D] mt-6 px-10 py-4 bg-[#C4E860] hover:bg-[#A0BC53] transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
                        <span className='text-[#171D1D]'>See my work</span>
                        <BsArrowRight className='w-5 h-5 ml-2 inline-block' />
                    </button>
                </a>

            </div>
        </div>
    )
}

export default Hero