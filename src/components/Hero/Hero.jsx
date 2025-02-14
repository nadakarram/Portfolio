import React from 'react';
import Navbar from '../Navbar/Navbar';
import me from "../../assets/me-removebg-preview.png"
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import email from '../../assets/communication.png'
import nadacv from '../../assets/NadaCV.pdf'
export default function Hero(props) {
    return (
        <div className='relative min-h-[550px] sm:min-h-[600px] overflow-hidden flex flex-col  items-center'>
            <div className='bg-gradient-to-r from-[#6b2897] via-[#8e6cf5] to-[#bb61c5] h-[500px] md:h-[550px]  w-[450px] rounded-3xl transform rotate-45 top-28 right-2 z-0 absolute '></div>
            <Navbar/>
            <section id='home' className='z-10 flex md:flex-row flex-col mt-32 justify-center items-center px-4 md:px-32 w-full pb-4'>
                <div className='flex-1  md:text-left md:pl-0  mt-10 pr-24 md:mt-0' data-aos='fade-up' data-aos-delay='500'>
                    <div className="absolute -top-4 -left-0 -z-10 h-60 w-60 blur-3xl rounded-full bg-[#cd3cf5] opacity-50"></div>
                    <h1 className=' text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
                       Nada Karam 

                    </h1>
                    <h2 className=' text-xl sm:text-4xl md:text-2xl font-bold text-[#cd3cf5] mb-4'>
                       Full Stack Developer

                    </h2>
                    <p className='text-base sm:text-lg md:text-lg text-gray-300 mb-6'>
                    I Motivated and innovative Web Developer with a solid foundation in
both front-end and back-end development.I possess a diverse skill set that
includes web design, UI/UX design, mobile development, and specialize in
PHP and laravel projects.

                    </p>
                    <div className='flex flex-row  justify-start items-center mb-5'>
                        <a href="https://www.linkedin.com/in/nada-karram-a07208252/" className='w-8 h-8 mr-4'>
                            <img src={linkedin} alt="linkedin" className='object-cover' />
                        </a>
                        <a href="https://github.com/nadakarram" className='w-8 h-8 mr-4'>
                            <img src={github} alt="github"  className='object-cover'  />
                        </a>
                        <a href="nadakarram2006@gmail.com" className='w-8 h-8 mr-4'>
                            <img src={email} alt="email"  className='object-cover' />
                        </a>

                    </div>
                    <a href={nadacv} download>
                         <button className='hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] text-gray-900 bg-white hover:bg-fuchsia-400 text-sm text-center font-semibold px-6 py-2.5 rounded-full'>
                        Download CV
                    </button>
                    </a>

                   

                </div>
                <div className='flex-1 flex justify-center md:justify-end mt-0 md:mt-0' data-aos='fade-up' data-aos-delay='500'>
                    <img src={me} alt="" className='w-[250px] h-[300px] sm:h-[400px] sm:w-[360px] md:h-[440px] object-cover rounded-lg'/>

                </div>
            


            </section>
        </div>
    );
}

