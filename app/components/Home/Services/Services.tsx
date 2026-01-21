import React from 'react'
import ServicesCard from './ServicesCard'
import { FaGamepad, FaReact, FaServer } from 'react-icons/fa'
import { HiOutlineCode, HiOutlineDeviceMobile } from 'react-icons/hi'
import { MdPhoneAndroid } from 'react-icons/md'

const Services = () => {
    return (
        <div className='py-16 flex items-center flex-col'>
            <h1 className='text-white font-bold text-center text-2xl md:text-4xl xl:text-5xl'>
                What <span className='text-[#C4E860]'>I do?</span>
            </h1>
            <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center text-white'>
                The areas of development I focus on and the technologies I use to turn ideas into practical solutions.
            </h2>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20'>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
                    <ServicesCard Icon={HiOutlineCode} name="Frontend Development" description="Building responsive and accessible web interfaces using React, Next.js, TypeScript, Tailwind CSS and API integrations." />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" >
                    <ServicesCard Icon={HiOutlineDeviceMobile} name="Mobile Development" description="Developing mobile applications using React Native and Android development with Kotlin."/>
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200" >
                    <ServicesCard Icon={FaServer} name="Back-end & Systems" description="Experience with Java, Spring Boot and databases, focused on learning, integration and system logic." />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300" >
                    <ServicesCard Icon={FaGamepad} name="Game Development" description="Developing games using Unity and C#, focusing on game mechanics and interactivity." />
                </div>
            </div>
        </div>
    )
}

export default Services