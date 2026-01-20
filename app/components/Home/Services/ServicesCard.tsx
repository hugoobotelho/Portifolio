import React from 'react'
import Image from 'next/image'

type Props = {
    icon: string
    name: string
    description: string
}

const ServicesCard = ({icon, name, description}:Props) => {
  return (
    <div>
        <Image src={icon} alt="img" width={60} height={60}/>
        <h1 className='text-gray-200 mt-6 font-bold text-xl md:text-2xl'>{name}</h1>
        <p className='mt-6 text-gray-300'>{description}</p>
    </div>
  )
}

export default ServicesCard