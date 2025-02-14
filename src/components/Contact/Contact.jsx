import React from 'react';
import hero from '../../assets/—Pngtree—humanoid robot_19281141.png'
function Contact(props) {
    return (
        <section className='relative min-h-screen overflow-hidden flex  justify-center items-center p-6 mt-10' >
            <article className='max-w-4xl w-full flex md:flex-row flex-col items-center justify-center rounded-lg shadow-lg relative'>
                <aside className='w-full md:w-1/2 relative flex justify-center' data-aos='fade-right' data-aos-delay='300'>
                       <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                rounded-full bg-gradient-to-r from-[#562897] via-[#8e6cf5] to-[#bb61c5] 
                shadow-[0_0_70px_rgba(182,0,182,0.7)] w-[300px] h-[300px] sm:h-[400px] sm:w-[400px]
                '>

                </div>
                <img src={hero} alt="" className='w-[300px] h-[250px] sm:h-[400px] sm:w-[480px] md:h-[480px]  rounded-t-lg md:rounded-r-lg relative' />

                </aside>
                <section className='w-full md:w-1/2 p-6' data-aos='fade-left' data-aos-delay='300'>
                <header className='mb-6'>
                    <h1 className='text-center text-white font-bold text-4xl'>
                        Contact Us
                    </h1>
                </header>
                <form action="https://formsubmit.co/1ef58c936928d176a5a662ba24d348ab " method="POST" className='space-y-4'>
                    <div>
                        <label htmlFor="name" className='text-gray-300 font-medium mb-2'>Name</label>
                        <input type="text" id='name' name='name' placeholder='enter your name 'className='w-full px-4 py-2 bg-gray-400 rounded-lg focus:outline-none' />
                    </div>
                    <div>
                        <label htmlFor="email"  className='text-gray-300 font-medium mb-2'>Email</label>
                        <input type="email" id='email'name='email' placeholder='enter your email 'className='w-full px-4 py-2 bg-gray-400 rounded-lg focus:outline-none' />
                    </div>
                    <div>
                        <label htmlFor="subject"  className='text-gray-300 font-medium mb-2'>Subject</label>
                        <input type="subject" id='subject'name='subject' placeholder='enter your subject 'className='w-full px-4 py-2 bg-gray-400 rounded-lg focus:outline-none' />
                    </div>
                    <div>
                        <label htmlFor="massage" className='text-gray-300 font-medium mb-2'>Message</label>
                        <textarea name='message' id='message' placeholder=' your message ' className='w-full px-4 py-2 bg-gray-400 rounded-lg focus:outline-none' ></textarea>
                    </div>
                    <button type='submit' className='w-full px-4 py-2 border-2 focus:outline-none hover:bg-[#801b9c] 
                    text-white hover:shadow-[0_0_70px_rgba(128,0,128,0.7)] rounded-full text-lg'>
                        Send Massage

                    </button>
                </form>

                </section>
             

            </article>

            
        </section>
    );
}

export default Contact;