import React from 'react'
import rightArrSmall from '../assets/right-arrow-small.svg'

const Card = (props) => {
    const styles={
      boxShadow: "10px 40px 50px rgba(229, 233, 246, 0.4)"
    }
  return (
    <div style={styles} className='rounded-[20px] flex  flex-col w-[19vw] bg-white'>
        <img src={props.img} className='flex-grow rounded-t-[1rem]' />
        <h5 className='px-[1.8rem] pb-[0.6rem] pt-[1.3rem] font-bold'>{props.title}</h5>
        <p className='px-[1.8rem] text-[#7D7987]'>{props.text}</p>
        <a href="#" className='decoration-[none] flex items-center px-[1.8rem] py-[1.3rem] gap-1 text-[#458FF6]'>Read More <img src={rightArrSmall} /> </a>
    </div>
  )
}

export default Card