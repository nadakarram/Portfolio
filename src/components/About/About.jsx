import React from 'react';
import about1 from '../../assets/about1.png'
import me from "../../assets/me-removebg-preview.png"
import about2 from '../../assets/about.jfif'
function About() {
    return (
        <section id='about'
            className=' min-h-screen px-4 sm:px-6 flex text-white justify-center items-center overflow-hidden relative' >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm-gap-12 items-center absolute top-28">
                <figure data-aos="fade-right" data-aos-delay="500" className='hidden md:flex justify-center gap-4 flex-wrap relative  '>

                    <div className='h-[200px] w-[300px] sm:h[300px] sm:w-[400px] lg:h-[400px] lg:w-[500px]
                        bg-gradient-to-l from-[#562897] via-[#6c95f5] to-[#bb61c5] transform  rotate-12 absolute -top-2 right-5 z-0 md:top-10 rounded-full'>

                    </div>
                    <img src={about1} alt="" className='absolute -top-2 left-5 sm:left-15 transform -translate-y-7 z-20 h-20 w-20 sm:w-32 sm:h-32 rounded-3xl object-cover shadow-lg' />
                    <img src={me} alt="" className='relative z-10 w-36 h-44 sm:w-40 sm:h-40 min-w-72 min-h-96 rounded-lg ' />
                    <img src={about2} alt="" className='absolute bottom-0 right-5 sm:right-10 transform translate-y-18  z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl object-cover shadow-lg' />


                </figure>
                <article data-aos="fade-left" data-aos-delay="500" className='text-center md:text-left relative' >
                    <div className="absolute w-40 h-40 z-0 sm:w-60 sm:h-60 blur-3xl rounded-full bg-[#cd3cf5] opacity-50"></div>
                    <h1 className=' text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-4'>
                        About Me

                    </h1>
                    <p className='text-base sm:text-lg md:text-lg text-gray-300 mb-6 leading-relaxed'>
                        I’m Nada Karam, a computer science student at ElSewedy University of Technology (SUT) - Polytechnic of Egypt. I'm a fresh graduate from WE School for Applied Technology with a specialization in full stack development . I have graduated with an outstanding degree of 98.1%.
                        My career started as an Information Technology (IT) and web developer
                        I'm really passionate about programming, technologies,
                    </p>
                    <a href='https://www.linkedin.com/in/nada-karram-a07208252/'>
                        <button className='hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] text-gray-900 bg-white hover:bg-fuchsia-400 text-sm text-center font-semibold px-6 py-2.5 rounded-full'>
                            Learn More
                        </button>
                    </a>


                </article>

            </div>

        </section>
    );
}

export default About;
