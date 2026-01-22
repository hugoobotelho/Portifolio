"use client"
import { NavLinks } from '@/app/[locale]/constants/constant'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'
import LanguageSelect from './LanguageSelect'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {

    const t = useTranslations('NavBar');


    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const sections = document.querySelectorAll('section')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                threshold: 0.25, // 25% da section visível
            }
        )

        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true)
            else setNavBg(false)
        }

        window.addEventListener("scroll", handler)

        return () => window.removeEventListener("scroll", handler)
    }, [])

    return (
        <div className={`transition-all ${navBg ? 'bg-[#171D1Dd9] shadow-md' : 'fixed'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
                {/* Logo */}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                        <FaCode className='w-5 h-5 text-black' />
                    </div>
                    <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>HUGO</h1>
                </div>
                {/* NavLinks */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {NavLinks.map((link) => {
                        return (<Link key={link.id} href={link.url} className={`text-base  ${activeSection === link.section
                                ? 'text-[#C4E860]'
                                : 'text-white hover:text-[#C4E860]'
                            } font-medium transition-all duration-200`}>
                            <p>{t(link.labelKey)}</p>
                        </Link>)
                    })}
                </div>
                {/* Buttons */}
                <div className='flex items-center space-x-4'>
                    {/* Select language button */}
                    <LanguageSelect/>

                    {/* CV Button */}
                    <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-[#C4E860] hover:bg-[#A0BC53] transition-all duration-300 text-white flex items-center space-x-2'>
                        <BiDownload className='w-5 h-5 text-[#171D1D]' />
                        <span className=' text-[#171D1D]'>{t('download')}</span>
                    </button>
                    {/* Burger Menu */}
                    <button onClick={openNav}>
                        <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav