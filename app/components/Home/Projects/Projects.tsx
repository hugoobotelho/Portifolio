import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import CardProject from './CardProject'

const Projects = () => {

    const t = useTranslations("WorksPage")
    const project = [
        { id: 0, imageSrc: "/images/site_filmes.png", title: t("titelCard1"), description: t("descriptionCard1"), tecnologies: ["React", "TypeScript", "TMDB API"], link: "https://github.com/hugoobotelho/Site-de-filmes", buttonActive:true },
        { id: 1, imageSrc: "/images/site_ct.png", title: t("titelCard2"), description: t("descriptionCard2"), tecnologies: ["Frontend", "React", "Dashboard"], link: "https://github.com/hugoobotelho/CT-Site", buttonActive:true },
        { id: 4, imageSrc: "/images/app_java.png", title: t("titelCard5"), description: t("descriptionCard5"), tecnologies: ["Java", "TCP & UDP Sockets", "Threads"], link: "https://github.com/hugoobotelho/App-Chat-3.0", buttonActive:true },
        { id: 2, imageSrc: "/images/legere_app.jpeg", title: t("titelCard3"), description: t("descriptionCard3"), tecnologies: ["Mobile App", "Kotlin", "Android Studio", "Education"], link: "#", buttonActive:false },
        { id: 3, imageSrc: "/images/estacionados_game.jpeg", title: t("titelCard4"), description: t("descriptionCard4"), tecnologies: ["Game Development", "Unity 3D", "C#"], link: "#", buttonActive:false },
    ]
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])


    useEffect(() => {
        if (window.innerWidth >= 768) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const index = Number(entry.target.getAttribute('data-index'))
                    if (entry.isIntersecting) {
                        setActiveIndex(index)
                    }
                })
            },
            {
                threshold: 0,
                rootMargin: '-50% 0px -50% 0px'
            }
        )

        cardRefs.current.forEach(el => el && observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div className='py-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>{t("title")} <br />{" "} <span className='text-[#C4E860]'>{t("titleSpan")}</span></h1>
            <div className="mx-auto w-[70%] grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
                {project.map((p, index) => (
                    <div
                        key={p.id}
                        ref={(el) => {
                            cardRefs.current[index] = el
                        }} data-index={index}
                    >
                        <CardProject
                            delay={p.id}
                            imageSrc={p.imageSrc}
                            title={p.title}
                            description={p.description}
                            tecnologies={p.tecnologies}
                            link={p.link}
                            active={activeIndex === index}
                            buttonActive={p.buttonActive}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects