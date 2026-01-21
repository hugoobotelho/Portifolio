import React from 'react'
import Image from 'next/image'
import { IconType } from 'react-icons'

type Props = {
    name: string
    description: string
    Icon: IconType
}

const ServicesCard = ({Icon, name, description}:Props) => {
  return (
    <div>
        {/* <Image src={icon} alt="img" width={60} height={60}/> */}
        <Icon className='w-20 h-20 text-[#C4FBA2]'/>
        <h1 className='text-gray-200 mt-6 font-bold text-xl md:text-2xl'>{name}</h1>
        <p className='mt-6 text-gray-300'>{description}</p>
    </div>
  )
}

export default ServicesCard