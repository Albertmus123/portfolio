import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
    <>
<nav class="flex justify-end space-x-4 py-4 px-8">
  <a href="/team" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
  <a href="/team" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Works</a>
  <a href="#contact" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact Us</a>
    </nav>
    </>)
}
