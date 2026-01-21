import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaFlask, FaGamepad, FaGraduationCap, FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'

const Resume = () => {
    return (
        <div className='pt-20 pb-16'>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                {/* WORK PART */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        My Work <span className='text-[#C4E860]'>Experience</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                        <ResumeCard Icon={FaFlask} role="Undergraduate Research Project" description='Worked on the development and maintenance of an educational Android application using Kotlin, focused on supporting children&apos;s literacy. Implemented new features, fixed bugs and collaborated with research-oriented development.'/>
                        <ResumeCard Icon={FaReact} role="Academic & Personal Projects" description='Developed web and mobile applications using React, Next.js, React Native and TypeScript. Focused on responsive design, API integration, accessibility and user experience.'/>
                        <ResumeCard Icon={FaGamepad} role="Game Development Projects" description='Developed games using Unity and C#, exploring game mechanics, physics, animations, UI and interactive feedback through academic and personal projects.'/>
                    </div>
                </div>
                {/* EDUCATION PART */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        My <span className='text-[#C4E860]'>Education</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                        <ResumeCard Icon={FaGraduationCap} role="Bachelor's Degree in Computer Science" date="2022.2 – 2026.2 (In progress)" description='Undergraduate student at the Universidade Estadual do Sudoeste da Bahia (UESB), with a solid foundation in programming logic, data structures and object-oriented programming. Experience with academic projects in web, mobile, backend and game development.'/>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Resume