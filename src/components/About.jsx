import React from 'react'
import BgImg from '../assets/about-img.png'

const About = () => {
  return (
    <section className='flex-center gap-[8vw] my-[15vh]'>
        <img src={BgImg} />
        <div className='flex  flex-col items-start justify-center gap-9 w-[25vw]'>
            <h2 className='text-3xl text-left font-bold w-[20vw] leading-[56px]'>Leading healthcare providers</h2>
            <div className='w-[56px] h-[2px] bg-black'></div>
            <p className='text-[#7D7987]'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver.</p>
        <button className='btn--outline'>Learn more</button>
        </div>

    </section>
  )
}

export default About