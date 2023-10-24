import React from 'react'
export const Nav = () => {
  return (
    <nav class="flex justify-end space-x-4 py-4 px-8">
  <a href="/dashboard" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
  <a href="/team" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
  <a href="/projects" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
  <a href="/contact" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact Us</a>
    </nav>
  )
}
