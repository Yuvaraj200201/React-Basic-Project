import React from 'react'
import {
    FaBook,
    FaReact,
    FaRocket
} from "react-icons/fa"

const links = [
    {
        name: "Vite Docmentation",
        icon: <FaBook className='text-red-600 h-4 w-4 md:w-6 md:h-6' />,
        href: "#"
    },
    {
        name: "React Guide",
        icon: <FaReact className='text-sky-500 h-4 w-4 md:w-6 md:h-6' />,
        href: "#"
    },
    {
        name: "Frented Trends",
        icon: <FaRocket className='text-amber-500 h-4 w-4 md:w-6 md:h-6' />,
        href: "#"
    },
]

const Aside = () => {
  return (
    <aside className='bg-gray-300 mx-auto p-6 rounded-sm shadow-md w-4/5 mb-4 md:max-w-64'>
        <h1 className='text-lg sm:text-2xl mb-7'>📌<b>Related Links</b></h1>
        <ul className='space-y-2'>
            {links.map((link) => (
                <li>
                    <a href="link.href" className='flex text-sm md:text-lg items-center text-blue-800 hover:underline gap-2'>
                    {link.icon}
                    {link.name}
                    </a>
                </li>
            ))}
            
        </ul>
    </aside>
  )
}

export default Aside