import React from 'react'

export const Contact = () => {
  return (
    <>
    <div className="grid justify-center pt-12">
      <h1 className="text-2xl font-bold">Contact</h1>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 px-4 py-12">
     <div className="carousel w-full rounded-xl">

        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/Computer_programmer.jpeg.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>  
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://www.springboard.com/blog/wp-content/uploads/2022/08/programming-jobs-salaries.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
    </div>

      <div className="contact-from px-4  lg:px-12 shadow shadow-xl py-2">
         <div className="grid justify-center ">
         <h1 className='font-bold py-4'>Mail Me 💌</h1>
         </div>
          <input type="text" placeholder="example@gmail.com" className="input w-full my-4" />
          <input type="text" placeholder="subject ..." className="input w-full my-2" />
          <textarea className="textarea w-full h-24 my-2" placeholder="message ..."></textarea>
          <button
          className='
          border
          border-slate-700
          hover:border-pink-500
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
          >Message 💟</button>


      </div>

    </div>
    </>
  )
}
