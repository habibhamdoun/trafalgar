import React from 'react'

const Box = (props) => {
    const styles={
        boxShadow: "10px 40px 50px rgba(229, 233, 246, 0.4)"
    }
  return (
    <div style={styles} className='flex flex-col gap-5 w-[20vw] rounded-2xl bg-white p-9 leading-8'>
        <img src={props.icon} className="w-[90px] aspect-square mt-8" />
        <h4>{props.title}</h4>
        <p className='text-[#7D7987]'>{props.text}</p>
    </div>
  )
}

export default Box