import { FaReact } from "react-icons/fa6";
import { TbBrandDjango } from "react-icons/tb";
import { SiFastapi } from "react-icons/si";

export default function Skills() {
  return (
    <>

    <div className="grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3 px-2 md:px-12 lg:px-12">
    <div className="card 
       px-4
       pb-4
       shadow 
       shadow-md
       hover:shadow-pink-500
        hover:opacity-100 
        opacity-70  
        shadow-slate-700 
        hover:translate-y-6 
        transition
         duration-500 
         ease-in-out
         bg-white
        ">
      <div className="card-body grid justify-center pt-4">
        <span className="card-title">
          <FaReact className="w-32 h-32 pb-2" />
        </span>
        <p className="card-text font-bold py-2">React Framework</p>
      </div>
      <div className="description">
        <p className="card-text">
          React is a JavaScript library for building user interfaces.
          😄 ❤️ 🤴
        </p>
      </div>
    </div>
    <div className="card 
        px-4
        pb-4
        shadow 
        shadow-md
        hover:shadow-pink-500
         hover:opacity-100 
         opacity-70  
         shadow-slate-700 
         hover:translate-y-6 
         transition
          duration-500 
          ease-in-out
          bg-white
        ">
      <div className="card-body grid justify-center pt-4">
        <span className="card-title">
          <TbBrandDjango className="w-32 h-32 pb-2" />
        </span>
        <p className="card-text font-bold py-2">Django Framework</p>
      </div>
      <div className="description">
        <p className="card-text">
          Django is an open source web application framework for Python.
          😄 ❤️ ⚒️
        </p>
      </div>
    </div>
    <div className="card 
      hover:shadow-pink-500
      px-2 shadow 
      shadow-md
       hover:opacity-100 
       opacity-70  
       shadow-slate-700 
       hover:translate-y-6 
       transition
        duration-500 
        ease-in-out
        bg-white
        ">
      <div className="card-body grid justify-center pt-4">
        <span className="card-title">
          <SiFastapi className="w-32 h-32 pb-2" />
        </span>
        <p className="card-text font-bold py-2">FastAPI Framework</p>
      </div>
      <div className="description">
        <p className="card-text">
        FastAPI is a modern, fast (high-performance), web framework for building APIs. <br />
        ⏩ 💌
        </p>
      </div>
      <div className="card-footer py-4">
        
      </div>

    </div>
    </div>
    </>
  )
}
