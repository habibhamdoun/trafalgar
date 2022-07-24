import React from 'react'
import Image from '../assets/img.png'
import Dots from '../assets/element.svg'
const Hero = () => {
  return (
    <section className='flex-center gap-11 '>
        <div className='w-[30vw]'>
            <h3 className='text-5xl'>
            Virtual healthcare for you
            </h3>
            <p className='text-lg text-[#7D7987] font-light mt-6 mb-11'>
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            </p>
            <button className='bg-primary px-11 py-2 rounded-3xl text-white font-[1rem]'>
                Consult today
            </button>
        </div>
        <img src={Image}  />
        <img src={Dots} className='absolute top-[5vw] left-0'/>
    </section>
  )
}

export default Hero