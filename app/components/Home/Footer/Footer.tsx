import { useTranslations } from 'next-intl'
import React from 'react'

const Footer = () => {
  const t = useTranslations("Footer")
  return (
    <div className='bg-[#171D1D] p-5'>
        <h1 className='text-lg text-white/70 text-center'>{t("title")}</h1>
    </div>
  )
}

export default Footer