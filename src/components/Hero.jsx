import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gray-200 text-center py-10' 
    >
        <img className='mx-auto w-56 md:w-80 rounded-lg shadow-lg' src="https://codeop.tech/wp-content/uploads/2025/02/What-is-Coding.jpg" alt="" />
        <h1 className='font-bold px-2 sm:text-3xl mt-7'>⚡<b>Build Amazing UIs with React & Vite</b></h1>
        <p className='text-gray-700 font-semibold text-xs sm:text-lg mt-3'>Fast, lightweight and modern frontend developement.</p>
        <button className='bg-blue-800 py-2 px-5 rounded-md font-extrabold text-white hover:bg-blue-600 mt-3'>🚀Get Started</button>
    </section>
  )
}

export default Hero