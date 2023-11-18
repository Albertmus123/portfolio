import React from 'react'
export const HeroSection = () => {
  return (
<div className="hero min-h-56 py-4">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hi? Am Albert</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. 
      Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
          onClick={()=>document.getElementById('my_modal_1').showModal()}
          >Hire me? 💟</button>
        <dialog id="my_modal_1" className="modal max-h-42 md:max-h-screen lg:max-h-screen">
          <div className="modal-box">
            <h1 className='text-xl py-4'>Hire Form</h1>
            <p>This form is submitted directly when Send Pressed ❤️</p>
              <input type="text" placeholder="FullName ... 📁" className="input input-bordered input-md w-full my-4" />
              <input type="text" placeholder="example@example.com ... 📝" className="input input-bordered input-md w-full my-4" />
              <select className="select select-ghost w-full my-4">
              <option disabled selected>Choose application</option>
              <option>Web</option>
              <option>Mobile</option>
              <option>Windows</option>
            </select>
            <div className="modal-action">
            <button className="btn bg-pink-400 hover:bg-pink-500 hover:text-slate-200 text-slate-100">Send</button>
              <form method="dialog">
        <button className="btn">Close</button>
      </form>
     
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>

  )
}
