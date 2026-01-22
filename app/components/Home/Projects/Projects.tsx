import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Projects = () => {

    const t = useTranslations("WorksPage")

    return (
        <div className='py-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>{t("title")} <br />{" "} <span className='text-[#C4E860]'>{t("titleSpan")}</span></h1>
            <div className='mx-auto w-[70%] grid grid-cols-1 md:grid-cols-2 gap-16 mt-16'>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
                    <div className="relative w-full aspect-[16/8] overflow-hidden rounded-lg">
                        <Image
                            src="/images/site_filmes.png"
                            alt="Top Rated Movies"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>{t("titelCard1")}</h1>
                    <div className='flex gap-2 mt-4 flex-wrap items-center'>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>React</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>TypeScript</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>TMDB API</h1>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>{t("descriptionCard1")}</h1>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <div className="relative w-full aspect-[16/8] overflow-hidden rounded-lg">
                        <Image
                            src="/images/site_ct.png"
                            alt="Ct Management Dashboard"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    {/* <Image src="/images/site_ct.png" alt='img' width={800} height={650} className='rounded-lg' priority /> */}
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>{t("titelCard2")}</h1>
                    <div className='flex gap-2 mt-4 flex-wrap items-center'>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Frontend</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>React</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Dashboard</h1>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>{t("descriptionCard2")}</h1>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">

                    <div className="relative w-full aspect-[16/8] overflow-hidden rounded-lg">
                        <Image
                            src="/images/legere_app.jpeg"
                            alt="Legere Ensino"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    {/* <Image src="/images/legere_app.jpeg" alt='img' width={800} height={650} className='rounded-lg' priority /> */}
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>{t("titelCard3")}</h1>
                    <div className='flex gap-2 mt-4 flex-wrap items-center'>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Mobile App</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Kotlin</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Android Studio</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Education</h1>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>{t("descriptionCard3")}</h1>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <div className="relative w-full aspect-[16/8] overflow-hidden rounded-lg">
                        <Image
                            src="/images/estacionados_game.jpeg"
                            alt="Estacionados"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    {/* <Image src="/images/estacionados_game.jpeg" alt='img' width={800} height={650} className='rounded-lg' priority /> */}
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>{t("titelCard4")}</h1>
                    <div className='flex gap-2 mt-4 flex-wrap items-center'>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Game Development</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Unity 3D</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>C#</h1>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>{t("descriptionCard4")}</h1>

                </div>

            </div>
        </div>
    )
}

export default Projects