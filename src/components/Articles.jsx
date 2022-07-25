import React from 'react'
import Card from './Card'
import img1Card from "../assets/img1card.png";
import img2Card from "../assets/img2card.png";
import img3Card from "../assets/img3card.png";
import dots3 from '../assets/dots3.svg'
import bgShape from '../assets/bg-shape.svg'


const Articles = () => {
    const cards=[
    {
        img:img1Card,
        title:"Disease detection, check up in the laboratory",
        text:"In this case, the role of the health laboratory is very important to do a disease detection..."
    },
    {
        img:img2Card,
        title:"Herbal medicines that are safe for consumption",
        text:"Herbal medicine is very widely used at this time because of its very good for your health..."
    },
    {
        img:img3Card,
        title:"Natural care for healthy facial skin",
        text:"A healthy lifestyle should start from now and also for your skin health.There are some..."
    },
    
]
  return (
    <section className="flex-center flex-col gap-[4.5rem] my-[20vh] w-[100vw] relative">
        <img src={bgShape} className="absolute left-[75vw] bottom-[15vw]" />
        <div className='flex-center flex-col gap-[1.5rem] bg-white'>
            <h2 className='text-[2rem] font-bold leading-[56px]'>Check out our latest article</h2>
            <div className='w-[56px] h-[2px] bg-black'></div>
        </div>
        <div className='grid grid-cols-3 gap-[2rem] relative'>
            <img src={dots3} className="absolute -top-[40px] -left-[50px] z-0" />
            {cards.map(card=>{
                return <Card img={card.img} title={card.title} text={card.text} />
            })}
        </div>
        <button className='btn--outline px-[3.5rem]'> View all</button>
    </section>
  )
}

export default Articles