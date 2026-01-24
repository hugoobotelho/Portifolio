import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    imageSrc: string
    title: string
    description: string,
    tecnologies: string[],
    link: string,
    delay: number,
    active: boolean,
    buttonActive: boolean
}
const CardProject = ({
    imageSrc,
    title,
    description,
    tecnologies,
    link,
    delay,
    active,
    buttonActive
}: Props) => {
    const t = useTranslations("WorksPage")

    return (
        <div data-aos="fade-up" data-aos-delay={delay * 100}>
            <div
                className={`
          group border rounded-2xl transition-all duration-300 transform
          ${active
                        ? 'border-[#C4FBA2] -translate-y-4'
                        : 'border-[#6C6C6C]'
                    }
          hover:border-[#C4FBA2] hover:-translate-y-4
        `}
            >
                <div className="relative w-full aspect-[16/8] overflow-hidden rounded-t-2xl">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        className={`
              object-cover transition-transform duration-300
              ${active ? 'scale-110' : ''}
              group-hover:scale-110
            `}
                    />

                    <div
                        className={`
              absolute inset-0 bg-[#C4E860dd]
              flex items-center justify-center
              transition-opacity duration-300
              ${active ? 'opacity-100' : 'opacity-0'}
              group-hover:opacity-100
            `}
                    >
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            {buttonActive && (
                                <button className="px-10 py-4 text-sm rounded-lg bg-[#154616] hover:bg-white hover:scale-x-104 transition-all duration-300 text-white hover:text-[#154616]">
                                    <span className="text-base font-bold">
                                        {t("seeProject")}
                                    </span>
                                </button>
                            )}

                        </Link>
                    </div>
                </div>

                <div className="px-8 pb-8 flex flex-col gap-2">
                    <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                        {title}
                    </h1>
                    <p className="pt-2 font-medium text-white/80">
                        {description}
                    </p>

                    <div className="flex gap-2 mt-4 flex-wrap">
                        {tecnologies.map((name, index) => (
                            <span
                                key={index}
                                className="text-sm sm:text-base py-1.5 px-3 font-medium text-black bg-gradient-to-r from-[#C4E860] to-[#EDFD55] rounded-full"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardProject