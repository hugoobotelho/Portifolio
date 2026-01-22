import React from 'react'
import ServicesCard from './ServicesCard'
import { FaGamepad, FaReact, FaServer } from 'react-icons/fa'
import { HiOutlineCode, HiOutlineDeviceMobile } from 'react-icons/hi'
import { MdPhoneAndroid } from 'react-icons/md'
import { useTranslations } from 'next-intl'

const Services = () => {
    const t = useTranslations('ServicesPage');

    return (
        <div className='py-16 flex items-center flex-col'>
            <h1 className='text-white font-bold text-center text-2xl md:text-4xl xl:text-5xl'>
                {t("title")} <span className='text-[#C4E860]'>{t("titleSpan")}</span>
            </h1>
            <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center text-white'>
                {t("subtitle")}
            </h2>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20'>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
                    <ServicesCard Icon={HiOutlineCode} name={t("titleCard1")} description={t("descriptionCard1")} />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" >
                    <ServicesCard Icon={HiOutlineDeviceMobile} name={t("titleCard2")} description={t("descriptionCard2")} />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200" >
                    <ServicesCard Icon={FaServer} name={t("titleCard3")} description={t("descriptionCard3")} />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300" >
                    <ServicesCard Icon={FaGamepad} name={t("titleCard4")} description={t("descriptionCard4")} />
                </div>
            </div>
        </div>
    )
}

export default Services