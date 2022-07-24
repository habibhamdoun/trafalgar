import React from 'react'


const Navbar = () => {
  return  (
    <nav className='flex justify-around m-[1vw]'>
        <div className='flex-center'>
            <span className='bg-primary text-white m-2 px-3 py-1 text-2xl font-bold leading-8 rounded-full'>T</span>
            <span>Trafalgar</span>
        </div>
        <div className='flex-center gap-11 text-primary '>
            <a className='opacity-100'>Home</a>
            <a className='opacity-50'>Find a Doctor</a>
            <a className='opacity-50'>Apps</a>
            <a className='opacity-50'>Testimonials</a>
            <a className='opacity-50'>About us</a>

        </div>
    </nav>
  )
}

export default Navbar