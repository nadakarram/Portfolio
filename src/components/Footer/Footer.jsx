import React from 'react';
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import email from '../../assets/communication.png'
import nadacv from '../../assets/NadaCV.pdf'
function Footer(props) {
    const navbarLinks=[
        {id:1,name:"Home",link:"#"},
        {id:3,name:"About",link:"#about"},
        {id:2,name:"Skills",link:"#skills"},   
        {id:4,name:"My Projects",link:"#projects"},

    ]
    return (
        <footer className='w-full bg-gradient-to-r from-[#562897] via-[#8e6cf5] to-[#bb61c5] p-9 grid md:grid-cols-2 grid-cols-1 justify-start items-start'>
            <div className='flex flex-col justify-start items-start' data-aos='fade-up' data-aos-delay='300'>
                <a href="" className=' font-medium  text-gray-900'>
                    <span className='font-bold text-4xl text-white  text-left'>Portfolio</span>
                </a>
                <p className='text-sm text-left text-gray-300 mt-2 '>
                    I am studying Computer Science at El-Swedy University, passionate about technology and programming. I graduated from We school for Applied Technology, where I developed a strong foundation in software development. Currently, I'm learning Flutter to enhance my skills in mobile app development.

                </p>
                <div className='flex flex-row justify-start items-center mb-5'>
                    <a href="https://www.linkedin.com/in/nada-karram-a07208252/" className='w-8 h-8 mr-4'>
                        <img src={linkedin} alt="linkedin" className='object-cover' />
                    </a>
                    <a href="https://github.com/nadakarram" className='w-8 h-8 mr-4'>
                        <img src={github} alt="github" className='object-cover' />
                    </a>
                    <a href="nadakarram2006@gmail.com" className='w-8 h-8 mr-4'>
                        <img src={email} alt="email" className='object-cover' />
                    </a>

                </div>
                <a href={nadacv} download>
                    <button className='hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] text-gray-900 bg-white hover:bg-fuchsia-400 text-sm text-center font-semibold px-6 py-2.5 rounded-full'>
                        Download CV
                    </button>
                </a>

            </div>
            <div className=" flex flex-col  items-start ps-4 " data-aos='fade-up' data-aos-delay='300'>
            
                <p className='font-bold text-4xl text-white md:mt-0 mt-5  text-left mb-6'>Links</p>

                {
                        navbarLinks.map((e)=>{
                            return(
                            <a key={e.id} href={e.link} className='mr-7 text-xl text-white hover:text-black' >
                                {e.name}
                            </a>)

                        })
                    }

               

            </div>


        </footer>
    );
}

export default Footer;