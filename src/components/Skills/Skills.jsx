import React from 'react';
import hero from '../../assets/—Pngtree—humanoid robot_19281141.png'
import php from '../../assets/PHP.png'
import laravel from '../../assets/Laravel-Logo.wine.png'
import react from '../../assets/React-icon.svg.png'
import frontend from '../../assets/frontend-removebg-preview.png'
import microsoft from '../../assets/download-removebg-preview.png'
import sql from '../../assets/Mysql_logo.png'
import node from '../../assets/Node.js_logo.svg'
import python from '../../assets/Python-logo-notext.svg.png'
import flutter from '../../assets/Google-flutter-logo.svg.png'
import photoshop from '../../assets/Adobe_Photoshop_CC_icon.svg.png'
import Tailwandcss from '../../assets/Tailwind_CSS_Logo.svg.png'
import data_strcure from '../../assets/datastrucre.png'
import bootstrap from '../../assets/bootstrap-5-1.svg'
import github from '../../assets/github.png'
import dart from '../../assets/Dart-logo.png'
import typescript from '../../assets/typescript.svg'
function Skills(props) {
    const skillData=[
        {id:1,title:"PHP",description:"",image:php},
        {id:2,title:"Laravel",description:"",image:laravel},
        {id:3,title:"React",description:"",image:react},
        {id:4,title:"Front-end (HTML CSS JS)",description:"",image:frontend},
        {id:6,title:"Microsoft",description:"",image:microsoft},
        {id:7,title:"Python and Python GUI",description:"",image:python},
        {id:7,title:"Database Mangement MySql",description:"",image:sql},
        {id:7,title:"Node.js ",description:"",image:node},
        {id:8,title:"Flutter",description:"",image:flutter},
        {id:9,title:"Data Sturcure Abd Algorithm",description:"",image:data_strcure},
        {id:10,title:"Tailwandcss",description:"",image:Tailwandcss},
        {id:11,title:"Photoshop",description:"",image:photoshop},
        {id:11,title:"TypeScript",description:"",image:typescript},
        {id:11,title:"Dart",description:"",image:dart},
        {id:11,title:"git & github",description:"",image:github},
        {id:11,title:"Bootstrap",description:"",image:bootstrap},

    ]
 
    return (
        <section id="skills" className=' relative min-h-screen px-4 py-12 flex flex-col justify-center items-center overflow-hidden text-white mt-15'>
            <div className="absolute top-10 sm:top-28  h-36 w-72 sm:h-44 sm:w-96 blur-3xl rounded-full bg-[#cd3cf5] opacity-50 left-1/2 transform -translate-x-1/2"></div>
            <img src={hero} alt="" className='absolute w-24 sm:w-45 h-auto left-3 top-10 sm:top-28 sm:left-16 -rotate-12 opacity-70' />
            <div data-aos='fade-up' data-aos-delay='500' className="relative text-center space-y-6 sm:space-y-10 z-20 sm:mt-28">
                <header>
                    <h1 className='text-2xl sm:text-4xl font-bold '>
                        My Experence <br /> And <span className='text-purple-400'>My Skills</span>
                        </h1>
                        <p className='sm:mt-24 mt-6 sm:text-base text-gray-400 text-sm '>
                        I possess strong skills in web and mobile app development, with expertise in frameworks like Laravel, Livewire, and Flutter. My abilities extend to crafting efficient, user-friendly interfaces, managing full-stack development, and integrating innovative technologies like AI and AR into projects.
                        </p>
                </header>

                <section data-aos='fade-up' data-aos-delay='500' className=' grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-4 '>
                    {
                        skillData.map((skill)=>{
                           return(
                            <article className="bg-gray-800 p-4 sm:p-6  rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
                            <figure className='flex justify-center mb-4'> 
                                <img src={skill.image} alt={skill.title} className='w-16 h-16 sm:w-20 sm:h-20 object-contain' /> 
                            </figure> 
                            <header> 
                                <h3 className='text-lg sm:text-xl font-semibold mb-2'>{skill.title}</h3> 
                            </header> 
                            <p className='text-gray-400 text-sm sm:text-base'> {skill.description}</p> 
                        </article>

                           )
                    })
                    }
                </section>

            </div>
            <img src={hero} alt="" className='absolute w-24 sm:w-45 h-auto right-3 top-10 sm:top-28 sm:right-16 rotate-12 opacity-70' />

          
        </section>
    );
}

export default Skills;