import React from 'react'

export const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 px-8  mb-2 bg-sky-100'>
        <div className='grid justify-center'>
        <ul class="list-none">
            <h1 className='font-bold text-lg'>Profiles</h1>
        <li>facebook</li>
        <li>twitter</li>
        <li>Instagram</li>
        <li>Github</li>
        </ul>
        </div>
        <div className='grid justify-center '>02</div>
        <div className='grid justify-center'>03</div>
        <div className='grid justify-center'>04</div>
    </div>
  )
}
