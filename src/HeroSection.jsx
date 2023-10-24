import React from 'react'

export const HeroSection = () => {
  return (
    <>
  <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
    <div className='grid py-24 lg:py-48 ms-12 me-4 lg:ms-32 lg:me-2 justify-center'>
        <h1 className='text-4xl font-bold'>Full stack <span className='text-sky-600'>web Developer!</span></h1>
           <p className='my-4 text-xl'> <span className='font-bold'>Hello? </span>, My name is Musabyemungu Albert ,
            Am both Web and mobile application Developer.<br/>
           </p>  
        <div className="btn-group pt-4">
            <button 
            className='outline outline-2 outline-offset-4 outline-gray-400 hover:outline-sky-600 px-2'
            >Hire me for Development</button>
            <button className='outline outline-2 outline-offset-4 outline-gray-400 hover:outline-sky-600 px-2 ms-8'>Contact Us</button>
        </div>
    </div>
    <div className='grid justify-center pt-2 lg:pt-24'>
        <img className='object object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU" alt="Albert"/>
    </div>
  </div>
  <div className='grid justify-center py-8'>
    <h2 className='font-bold text-3xl'>Frameworks</h2>
  </div>
  </>
  )
}
