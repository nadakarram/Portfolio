import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen,setIsOpen]=useState(false)
    const navbarLinks=[
        {id:1,name:"Home",link:"#"},
        {id:3,name:"About",link:"#about"},
        {id:2,name:"Skills",link:"#skills"},   
        {id:4,name:"My Projects",link:"#projects"},

    ]
    return (
        <header className='fixed left-0 top-0 w-full z-40  body-font' data-aos='fade-up' data-aos-delay='300' >
            <div className='container mx-auto p-5 flex justify-between items-center '>
                <a href="" className=' font-medium mb-90 md:mb-0 text-gray-900'>
                    <span className='font-bold text-3xl text-white ml-3 mr-11'>Nada Karam</span>
                </a>
                
                <button type='button' className='md:hidden focus:outline-none top-6  right-5 absolute ' onClick={()=>setIsOpen(1)} >
                    <FiMenu  className='w-8 h-8 text-white' />
                </button>
                <nav className='hidden font-medium text-base md:flex justify-end items-center text-gray-300'>
                    {
                        navbarLinks.map((e)=>{
                            return(
                            <a key={e.id} href={e.link} className='mr-7  hover:text-white' >
                                {e.name}
                            </a>)

                        })
                    }
                    <button className='inline-flex text-gray-900 bg-white hover:bg-fuchsia-300 text-sm text-center font-semibold px-6 py-2.5 mr-5 rounded-full'>
                        Contact
                    </button>

                </nav>
               

            </div>
             <div className={`${isOpen? 'block' : 'hidden'} md:hidden  absolute top-0 left-0 h-screen 
             w-full bg-gradient-to-r from-[#6b2897] via-[#8e6cf5] to-[#bb61c5] space-y-7 pt-16 flex flex-col justify-center items-center`}>

                <button type='button' className='top-6  right-5 absolute text-white' onClick={()=>setIsOpen(0)}  >
                    <FiX  className='w-8 h-8 ' />
                </button>
                {
                        navbarLinks.map((e)=>{
                            return(
                            <a key={e.id} href={e.link}  onClick={()=>setIsOpen(0)} className='mr-7 text-xl  hover:text-white' >
                                {e.name}
                            </a>)

                        })
                    }
                    <button className='inline-flex text-gray-900 bg-white hover:bg-fuchsia-300 text-sm text-center font-semibold px-6 py-2.5 mr-5 rounded-full'>
                        Contact
                    </button>

                   
                
            </div>
            
        </header>

    );
}
