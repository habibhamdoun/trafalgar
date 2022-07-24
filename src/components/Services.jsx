import React from 'react'
import Box from './Box'
import GlassIcon from "../assets/Frame.svg";
import Medicine from "../assets/medicine.svg"
import Consultation from "..//assets/consultation.svg"
import Kit from "../assets/kit.svg"
import Details from "../assets/details.svg"
import Tracking from "../assets/tracking.svg"
import Vector from "../assets/Vector.svg"
import Dots2 from '../assets/dots2.svg'

const Services = () => {
    const icons =[{
        title:"Search Doctor" ,
        text:"Choose your doctor from thousands of specialist, general, and trusted hospitals" ,
        icon:GlassIcon,
    },
    {   title:"Online Pharmacy" ,
        text:"Buy  your medicines with our mobile application with a simple delivery system" ,
        icon:Medicine,
    },
    {   title:"Consultation" ,
        text:"Free consultation with our trusted doctors and get the best recomendations" ,
        icon:Consultation,
    },
    {   title:"Details info" ,
        text:"Free consultation with our trusted doctors and get the best recomendations" ,
        icon:Details,
    },
    {   title:"Emergency care" ,
        text:"You can get 24/7 urgent care for yourself or your children and your lovely family" ,
        icon:Kit,
    },
    {   title:"Tracking" ,
        text:"Track and save your medical history and health data" ,
        icon:Tracking,
    }
]
  return (
    <section className='flex-center flex-col relative mt-44'>
      <img src={Vector} className="absolute right-[50vw] z-0"/>
      <img src={Dots2} className="absolute right-[15vw] top-[57vh] z-0" />
      <div className='flex-center flex-col gap-5'>
        <h2 className='text-3xl'>Our services</h2>
        <div className='w-[56px] h-[2px] bg-black'></div>
        <p className='text-center text-[#7D7987] max-w-[60vw]'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-9 z-10 '>
       {icons.map(icon=>{
        return <Box icon={icon.icon} title={icon.title} text={icon.text} />
       })}
       
        </div>
        <button className='mt-14 btn--outline'> Learn more</button>
    </section>
  )
}

export default Services