import React from 'react';
import xogame from '../../assets/xogame.png'
import qrcode from '../../assets/qrcode.png'
import ecommerce_cloth from '../../assets/html css.jpg'
import ecommerce_skin from '../../assets/ecomerce.jpeg'
import university_tour from '../../assets/tourment.jpeg'
import todolist from '../../assets/todolist.jpeg'

import ecommerce_app from '../../assets/ecommerceapp.jpeg'

import user_auth from '../../assets/userauth.jpeg'

import itcompany from '../../assets/itcompany.jpeg'
import livechat from '../../assets/chat.png'

import socialmedia from '../../assets/soicalmedia.jpg'


import employee from '../../assets/employee.jpg'

function Projects(props) {
    const listProject = [
        { id: 1, title: "e-commerce (skincare)", link: "https://github.com/nadakarram/ecommerce", image: ecommerce_skin, description: "" },
        { id: 2, title: "university tourment mangement system", link: "https://github.com/nadakarram/Tournament-management-/tree/master", image: university_tour, description: "" },
        { id: 3, title: "it company", link: "https://github.com/nadakarram/Berimbolo-Security", image: itcompany, description: "" },
        { id: 4, title: "social media", link: "https://github.com/nadakarram/social-media", image: socialmedia, description: "" },
        { id: 5, title: "live chat", link: "https://github.com/nadakarram/live-chat", image:livechat, description: "" },
        { id: 6, title: "XO game", link: " https://nadakarram.github.io/XO_game/", image: xogame, description: "" },
        { id: 7, title: "QRcode generator", link: "https://nadakarram.github.io/QR-code-Generator/", image: qrcode, description: "" },
        { id: 8, title: "e-commerce (clothes)", link: "https://nadakarram.github.io/Arabella/", image: ecommerce_cloth, description: "" },
        { id: 9, title: "user authncation system", link: "https://github.com/nadakarram/PRODIGY_FS_1.git", image: user_auth, description: "" },
        { id: 10, title: "employee mangement system", link: "https://github.com/nadakarram/PRODIGY_FS_2.git", image: employee, description: "" },
        { id: 11, title: "to-do-list", link: "https://www.linkedin.com/posts/nada-karram-a07208252_flutter-mobiledevelopment-todolist-activity-7236027881343070208-2bvj?utm_source=share&utm_medium=member_desktop", image: todolist, description: "" },
        { id: 12, title: "e-commerce App", link: "https://github.com/nadakarram/e-commerse_app/tree/master/", image: ecommerce_app, description: "" },

    ]
    return (
        <main className='p-4' id='projects' >
            <section data-aos='fade-up' data-aos-delay='300'>
                <header className='text-center'>
                    <h1 className='text-23xl sm:text-4xl text-white font-bold mb-6'>
                        My <span className='text-purple-400'>Projects</span>
                    </h1>
                    <p className='text-gray-400 sm:text-base text-sm sm:mt-4 mt-2'>
                    I developed a dynamic web application using modern web development technologies and built a responsive mobile app to complement it. Both projects focus on delivering seamless user experiences across platforms with intuitive design and functionality.

                    </p>

                </header>

            </section>
            <section className='flex flex-wrap justify-center mt-6 gap-4' data-aos='fade-up' data-aos-delay='300'>
                {
                    listProject.map((project) => {
                        return (
                            <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
                                <div className="absolute z-0 w-40 h-40 sm:w-68 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10" ></div>
                                <div className="relative z-18">
                                    <figure className="relative">
                                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                                            className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                                            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
                                                Live Preview
                                            </button>
                                        </a>
                                    </figure>
                                    <div className="px-6 py-4" >
                                        <header>
                                            <h3 className="text-white font-bold text-xl mb-4">{project.title} </h3>
                                            <p className='text-gray-400 text-base'>
                                                {project.description}
                                            </p>
                                        </header>
                                    </div>
                                </div>
                            </article>


                        )
                    })
                }

            </section>
        </main>

    );
}

export default Projects;
