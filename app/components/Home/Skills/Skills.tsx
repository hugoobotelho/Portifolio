'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FaCode, FaJava } from 'react-icons/fa'
import { SiAndroidstudio, SiFigma, SiGit, SiGithub, SiJavascript, SiKotlin, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript, SiUnity } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const skills = [
  // Core Frontend
  { name: 'JavaScript', icon: <SiJavascript />, percentage: 91 },
  { name: 'TypeScript', icon: <SiTypescript />, percentage: 90 },
  { name: 'React', icon: <SiReact />, percentage: 95 },
  { name: 'Next.js', icon: <SiNextdotjs />, percentage: 89 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, percentage: 92 },

  // Mobile
  { name: 'React Native', icon: <SiReact />, percentage: 90 },
  { name: 'Kotlin', icon: <SiKotlin />, percentage: 93 },
  { name: 'Android Studio', icon: <SiAndroidstudio />, percentage: 92 },

  // Backend & Databases
  { name: 'Node.js', icon: <SiNodedotjs />, percentage: 88 },
  { name: 'Java', icon: <FaJava />, percentage: 97 },
  { name: 'PostgreSQL', icon: <SiPostgresql />, percentage: 87 },
  { name: 'MySQL', icon: <SiMysql />, percentage: 85 },

  // Game Development
  { name: 'Unity', icon: <SiUnity />, percentage: 90 },
  { name: 'C#', icon: <FaCode />, percentage: 88 },

  // Tools
  { name: 'Git', icon: <SiGit />, percentage: 91 },
  { name: 'GitHub', icon: <SiGithub />, percentage: 88 },
  { name: 'Figma', icon: <SiFigma />, percentage: 94 }
]

const Skills = () => {

    const t = useTranslations("SkillPage")
    return (
        <div className='text-white py-16'>
            <h1 className='text-white font-bold text-center text-2xl md:text-4xl xl:text-5xl'>
                {t("title")} <span className='text-[#C4E860]'>{t("titleSpan")}</span>
            </h1>
            <div className='flex flex-wrap gap-6 justify-center mt-16'>
                {skills.map((skil, i) => {
                    return <Tilt key={skil.name} scale={1.5} transitionSpeed={300}>
                        <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i*10}
                         className='bg-[#15461645] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                            <div className='text-5xl mb-4 text-gray-300'>{skil.icon}</div>
                            <p className='text-2xl font-semibold'>{skil.percentage}%</p>
                            <p className='text-[#C4FBA2] mt-1'>{skil.name}%</p>
                        </div>
                    </Tilt>
                })}

            </div>
        </div>
    )
}

export default Skills