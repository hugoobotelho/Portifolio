import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div className='py-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>A small selection of recent <br />{" "} <span className='text-[#C4E860]'>projects</span></h1>
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
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Top Rated Movies</h1>
                    <div className='flex gap-2 mt-4 flex-wrap items-center'>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>React</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>TypeScript</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>TMDB API</h1>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>A movie discovery web application that displays top-rated and trending movies, allowing users to browse by genre and release year. Built with React and TypeScript, the project consumes data from the TMDB API and focuses on responsive design, clear navigation and a smooth user experience.</h1>
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
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>CT Management Dashboard</h1>
                    <div className='flex gap-2 mt-4 flex-wrap items-center'>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Frontend</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>React</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Dashboard</h1>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>Web-based management system designed to assist sports training centers with student registrations, court scheduling and class organization. Developed with React and Vite, the project focuses on administrative workflows, data organization and usability.</h1>
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
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Legere Ensino</h1>
                    <div className='flex gap-2 mt-4 flex-wrap items-center'>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Mobile App</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Kotlin</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Android Studio</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Education</h1>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>Educational Android application developed during a one-year undergraduate research project, aimed at supporting childre&apos;s literacy through games and interactive activities that serve as meaningful predictors of learning success during early education. Built with Kotlin using Android Studio.</h1>
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
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Estacionados</h1>
                    <div className='flex gap-2 mt-4 flex-wrap items-center'>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Game Development</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>Unity 3D</h1>
                        <h1 className='text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full'>C#</h1>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>Educational game developed during a game development course using Unity 3D and C#.
                        The gameplay combines fun and learning by challenging players to park a car in the
                        indicated spot within a limited time and answer traffic rules quizzes based on the
                        Brazilian Traffic Code (CTB) to earn stars. The project uses 3D assets from the Unity
                        Asset Store and audio effects sourced from Pixabay.</h1>

                </div>

            </div>
        </div>
    )
}

export default Projects