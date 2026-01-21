"use client"
import { useState } from "react"
import Link from 'next/link'
import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import toast from "react-hot-toast"

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!form.name || !form.email || !form.message) {
            // addToast({
            //     title: "Please fill all required fields!",
            //     description: "Make sure to enter your name, email, and message before sending.",
            //     color: "warning",
            // })
            toast.error('Please fill all required fields!')

            return
        }


        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        })

        if (res.ok) {
            // addToast({
            //     title: "Message sent successfully!",
            //     description: "Thank you for reaching out! I’ll get back to you as soon as possible.",
            //     color: "success",
            // })
            toast.success('Message sent successfully!')

            setForm({ name: "", email: "", phone: "", message: "" })
        } else {
            // addToast({
            //     title: "Failed to send message",
            //     description: "Something went wrong. Please try again later or contact me via email.",
            //     color: "danger",
            // })
            toast.error('Something went wrong. Please try again later or contact me via email.')
        }
    }


    return (
        <div className='py-16'>
            <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/* Text content */}
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>Schedule a call with me to see if I can help</h1>
                    <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                    </p>
                    <div className='mt-7'>
                        {/* Info */}
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiPhone className='w-9 h-9 text-[#C4E860]' />
                            <p className='sm:text-xl font-bold text-gray-400'>+77988455158</p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiEnvelope className='w-9 h-9 text-[#C4E860]' />
                            <p className='sm:text-xl font-bold text-gray-400'>hugobotelhosantana@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiMap className='w-9 h-9 text-[#C4E860]' />
                            <p className='sm:text-xl font-bold text-gray-400'>Vitória da Conquista, Bahia</p>
                        </div>
                    </div>
                    {/* Social Icons */}
                    <div className='flex items-center space-x-3 mt-8'>
                        <Link href={"https://www.linkedin.com/in/hugo-botelho-8488ba27b/"} target="_blank" rel="noopener noreferrer">
                            <div className='w-14 h-14 bg-[#171D1D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-[#0e76a8] transition-all duration-300'>
                                <FaLinkedin className='text-white w-6 h-6' />
                            </div>
                        </Link>
                        <Link href={"https://github.com/hugoobotelho"} target="_blank" rel="noopener noreferrer">
                            <div className='text-white w-14 h-14 bg-[#171D1D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-[#6C6C6C] transition-all duration-300'>
                                <FaGithub className='w-6 h-6' />
                            </div>
                        </Link>
                        <Link href={"https://www.instagram.com/hugoobotelho/"} target="_blank" rel="noopener noreferrer">
                            <div className='w-14 h-14 bg-[#171D1D] rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-pink-500 transition-all duration-300'>
                                <FaInstagram className='text-white w-6 h-6' />
                            </div>
                        </Link>
                    </div>
                </div>
                {/* form */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className='md:p-10 p-5 bg-[#171D1D] rounded-lg'>
                    <form onSubmit={handleSubmit} >
                        <input type="text" placeholder='Name' className='px-4 py-3.5 bg-[#2B2B2B] text-white outline-none rounded-md w-full placeholder:text-white/70 '
                            onChange={e => setForm({ ...form, name: e.target.value })} />
                        <input type="email" placeholder='Email Address' className='mt-6 px-4 py-3.5 bg-[#2B2B2B] text-white outline-none rounded-md w-full placeholder:text-white/70 '
                            onChange={e => setForm({ ...form, email: e.target.value })}
                        />
                        <input type="text" placeholder='Mobile Number' className='mt-6 px-4 py-3.5 bg-[#2B2B2B] text-white outline-none rounded-md w-full placeholder:text-white/70 '
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                        />
                        <textarea placeholder='Your Message' className='mt-6 px-4 py-3.5 bg-[#2B2B2B] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'
                            onChange={e => setForm({ ...form, message: e.target.value })}
                        ></textarea>
                        <button type="submit" className='mt-8 px-12 py-4 bg-[#C4E860] hover:bg-[#A0BC53] transition-all duarition-300 cursor-pointer text-[#171D1D] rounded-full'>Send Message</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact