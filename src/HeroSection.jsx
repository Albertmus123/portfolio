import React from 'react'
import Svg from './assets/male.svg'

export const HeroSection = () => {
 
  return (

       <div className='grid justify-center px-2 pt-8'>
       <h1  className='justify-self-center text-4xl py-12 font-bold opacity-60 hover:opacity-100'>Hi? Am Albert </h1>
        <p className=' justify-self-center mb-4'><span className='ps-24 md:ps-96 lg:ps-96'>Web and Mobile Developer,</span> <br /> Here for your service
          if need any application web or mobile 
          We help you to  achieve your Business Goals .    
          </p>
          <button
          className='
          border
          border-slate-700
          hover:border-pink-500
          text-xl
          shadow
          shadow-xl
          py-2
          my-4
          opacity-60
          hover:bg-slate-100
          hover:opacity-100
          hover:text-slate-900
          hover:scale-105
          w-48
          transition
          hover:transition
          duration-500
          ease-in-out
          justify-self-center
          '
          
          >Hire me? 💟</button>

          <div className='grid justify-center pt-4'> 
          <img className='hover:scale-105 transition hover:transition duration-700 ease-in-out' src={Svg} alt="svg" width={400} height={400} srcset="" />
          </div>
          <h1 className='justify-self-center pb-12 text-2xl font-bold'>Skills</h1>
       </div>

  )
}
