import React from 'react'

const List = (props) => {
  return (
    <ul  className='pr-[4rem]'>
                <h4 className='font-bold pb-[0.5rem]'>{props.title}</h4>
                <li className='opacity-80 py-[0.5rem]'>{props.item1}</li>
                <li className='opacity-80 py-[0.5rem]'>{props.item2}</li>
                <li className='opacity-80 py-[0.5rem]'>{props.item3}</li>
                <li className='opacity-80 py-[0.5rem]'>{props.item4}</li>
            </ul>
  )
}

export default List