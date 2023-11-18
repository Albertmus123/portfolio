import React from 'react'



export const Nav = () => {
  return (
<div className="navbar">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100  rounded-box w-52">
      <li><a href='https://github.com/Albertmus123'>Github</a></li>
      <li><a href='https://www.linkedin.com/in/musabyemungu-albert-372219219/'>LinkedIn</a></li>
      <li><a href='https://www.instagram.com/mua_lbert/'>Instgram</a></li>
    </ul>
  </div>
</div>
</div>
  )
}
