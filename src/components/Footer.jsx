import React from 'react'
import List from './List'
import dots3 from '../assets/dots3.svg'

const Footer = () => {
    const styles={
        background: "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)"
    }
    const lists =[
    {
        title:"Company",
        item1 :"About" ,
        item2 :"Testimonials",
        item3 :"Find a doctor",
        item4 :"Apps",
    },
    {
        title:"Region",
        item1 :"Indonesia" ,
        item2 :"Singapore",
        item3 :"HongKong",
        item4 :"Canada",
    },
    {
        title:"Help",
        item1 :"Help center" ,
        item2 :"Contact Support",
        item3 :"Instructions",
        item4 :"How it works",
    },
]
  return (
    <section style={styles} className='w-100vw flex-center flex-col h-[40vh] text-white relative z-10'>
        <img src={dots3} className="absolute -top-[4rem] right-[5rem] z-0" />
        <img src={dots3} className="absolute bottom-0 left-0 z-0" />
        <div className='flex justify-around '>
        <div className='flex flex-col gap-[1.5rem] w-[50%] pl-[10%]'>
            <div>
                <span className='bg-white text-[#458FF6] m-2 px-3 py-1 text-2xl font-bold leading-8 rounded-full'>T</span>
                <span className='font-bold'>Trafalgar</span>
            </div>
            <p className='opacity-80 w-[70%]'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
            <p className='opacity-80'>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
            {lists.map(list => {
                return <List title={list.title} item1={list.item1} item2={list.item2} item3={list.item3} item4={list.item4} />
            })}
        </div>

    </section>
  )
}

export default Footer