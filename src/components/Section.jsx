import React from 'react'

const Section = (props) => {
  return (
    <section className={props.direction == 'rev' ? 'flex-center flex-row-reverse gap-[8vw] my-[15vh]' :'flex-center gap-[6vw] my-[15vh]'}>
        <img src={props.bg} />
        <div className='flex  flex-col items-start justify-center gap-9 w-[25vw]'>
            <h2 className='text-3xl text-left font-bold w-[20vw] leading-[56px]'>{props.title}</h2>
            <div className='w-[56px] h-[2px] bg-black'></div>
            <p className='text-[#7D7987]'>{props.text}</p>
        <button className='btn--outline'>{props.btn}</button>
        </div>

    </section>
  )
}

export default Section