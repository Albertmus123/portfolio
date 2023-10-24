import {react, django,html5, python } from 'boxicons'

const solutions = [
  { name: 'Python', description: 'Get a better understanding of your traffic'},
  { name: 'Django', description: 'Speak directly to your customers'},
  { name: 'Fastapi', description: "Your customers' data will be safe and secure"},
  { name: 'Html/Css/Javascript', description: 'Connect with third-party tools' },
  { name: 'ReactJs', description: 'Build strategic funnels that will convert'},
]

export default function Skills() {
  return (
 <div className="grid grid-cols-1 lg:grid-cols-4 px-2 lg:px-16 md:px-12 mt-8 gap-4">
  <div className="card grid grid-cols-2 border-2 p-4">
  <div className='grid justify-center py-4'>
  <box-icon size="120px"  name='django' type='logo' ></box-icon>
  </div>
  <div className="card-body">
    <h1 className='font-bold pb-4 text-xl text-sky-700'>Django</h1>
      <p>
      Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. 
      </p>
  </div>
  </div>
  
  <div className="card grid grid-cols-2 border-2 p-4">
  <div className='grid justify-center py-4'>
  <box-icon size="120px" type='logo' name='react'></box-icon>
  </div>
  <div className="card-body">
    <h1 className='font-bold pb-4 text-xl text-sky-700'>Reactjs</h1>
      <p>
      Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. 
      </p>
  </div>
  </div>
  
  <div className="card grid grid-cols-2 border-2 p-4">
  <div className='grid justify-center py-4'>
    <img src="https://gitlab.com/uploads/-/system/project/avatar/33491624/fastapi.png" alt="fastapi" />
  </div>
  <div className="card-body">
    <h1 className='font-bold pb-4 text-xl text-sky-700'>Fastapi</h1>
      <p>
      Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. 
      </p>
  </div>
  </div>
  
  <div className="card grid grid-cols-2 border-2 p-4">
  <div className='grid justify-center py-4'>
  <box-icon size="120px" name='nodejs' type='logo' ></box-icon>
  </div>
  <div className="card-body">
    <h1 className='font-bold pb-4 text-xl text-sky-700'>Nodejs</h1>
      <p>
      Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. 
      </p>
  </div>
  </div>
  
 </div>
  )
}
