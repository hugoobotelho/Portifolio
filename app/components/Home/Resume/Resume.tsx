import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaFlask, FaGamepad, FaGraduationCap, FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { useTranslations } from 'next-intl'

const Resume = () => {
    const t = useTranslations('ResumePage');


    return (
        <div className='pt-20 pb-16'>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                {/* WORK PART */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        {t("experienceTitle")} <span className='text-[#C4E860]'>{t("experienceTitleSpan")}</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                        <ResumeCard Icon={FaFlask} role={t("resumeCardTitle1")} description={t("resumeCardDescription1")} />
                        <ResumeCard Icon={FaReact} role={t("resumeCardTitle2")} description={t("resumeCardDescription2")} />
                        <ResumeCard Icon={FaGamepad} role={t("resumeCardTitle3")} description={t("resumeCardDescription3")} />
                    </div>
                </div>
                {/* EDUCATION PART */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        {t("educationTitle")} <span className='text-[#C4E860]'>{t("educationTitleSpan")}</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                        <ResumeCard Icon={FaGraduationCap} role={t("resumeCardTitle4")} date={t("progress")} description={t("resumeCardDescription4")} />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Resume