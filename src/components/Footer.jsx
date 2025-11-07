import React from 'react'
import FaceBook from "../assets/facebook.png"
import Twitter from "../assets/logos.png"
import Instagrasm from "../assets/instagram.png"
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-center py-4'>
        <p className='md:text-xl'>🌐 @2025 My Website. All Rights Reserved.</p>
        <div className='flex justify-center space-x-3 mt-3 gap-6' >
            <a href=""> <img className='h-8 w-8 sm:w-16 sm:h-16' src={FaceBook} alt="FACEBOOK" /></a>
            <a href=""> <img className='h-8 w-8 sm:w-16 sm:h-16' src={Twitter} alt="TWITTER" /></a>
            <a href=""> <img className='h-8 w-8 sm:w-16 sm:h-16' src={Instagrasm} alt="INSTAGRAM" /></a>
        </div>
    </footer>
  )
}

export default Footer