import React from 'react'
import Profile from '../assets/customer.png'
import leftArrow from '../assets/arrow-left.svg'
import rightArrow from '../assets/arrow-right.svg'
import dot from '../assets/dot.svg'
import dots3 from '../assets/dots3.svg'

const Testimonial = () => {
    const styles={
        background: 'linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)'
    }
    const dotStyle={
        background: "linear-gradient(338.5deg, #97C3F9 -689.1%, #93C1F9 754.96%)" 
    } 
    const [active , setActive] = React.useState(1)
  return (
    <section className='flex-center flex-col text-white my-[20vh] gap-9'>
        <div style={styles} className='w-[60vw] h-[40vh] bg-primary rounded-[24px] flex-center flex-col gap-6 relative'>
        <img   src={dots3} className="absolute -top-[15px] -right-[45px]" />
        <img   src={dots3} className="absolute bottom-[50px] -left-[60px] z-0" />
            <h2 className='font-bold leading-[48px] text-[2rem]'>What our customer are saying</h2>
            <div className='w-[56px] h-[2px] bg-white'></div>
            <div className='grid grid-cols-2 items-center'>
                <div className='flex-center gap-7'>
                <img src={Profile} className="rounded-full border-[#C4C4C4] border-[4px] p-[1px] z-20" />
                <div className="flex flex-col">
                    <h3 className='font-bold leading-[48px]'>Edward Newgate</h3>
                    <p className='opacity-80' >Founder Circle</p>
                </div>
                </div>
                <p className='opacity-80 w-[75%]'>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                <div>
            </div>
            </div>
        </div>
        <div className='flex-center gap-20'>
                <img src={leftArrow} />
            <div className='flex-center gap-[18px]'>
                <img src={dot} onClick={()=>setActive(1)} className={active == 1 ? '' : 'opacity-30'} />
                <img src={dot} onClick={()=>setActive(2)} className={active == 2 ? '' : 'opacity-30'} />
                <img src={dot} onClick={()=>setActive(3)} className={active == 3 ? '' : 'opacity-30'} />
                <img src={dot} onClick={()=>setActive(4)} className={active == 4 ? '' : 'opacity-30'} />
            </div>
            <img src={rightArrow}  />
                </div>
    </section>
  )
}

export default Testimonial