import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='bg-red-500 py-6'>
    <div className='flex flex-col items-center mb-6 md:flex-row justify-evenly'>
      <div className='flex text-white items-center justify-center mb-4'>
        <FaPhoneAlt className='text-2xl mr-1 md:mr-2'/>
        <p className='text-sm md:text-base cursor-pointer hover:underline'>Toll free 1800 200 1234</p>
      </div>
      <div className='flex text-white items-center justify-center mb-4'>
        <FaFacebook className='text-2xl mr-1 md:mr-2'/>
        <a href='www.facebook.com/cripumps' className='text-sm md:text-base cursor-pointer hover:underline'>www.facebook.com/cripumps</a>
      </div>
      <div className='flex text-white items-center justify-center'>
        <TbWorld className='text-2xl mr-1 md:mr-2'/>
        <a href='www.crigroups.com' className='text-sm md:text-base cursor-pointer hover:underline'>www.crigroups.com</a>
      </div>
    </div>
  </div>
  
  )
}

export default Footer
