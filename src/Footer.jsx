import React from 'react'

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='border-2 mx-2 px-8 pt-12 mt-8 mb-2 '>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
        <div className='grid  grid-cols-1 lg:grid-cols-2'>
            <div className="grid grid-cols-4 ">
        <box-icon size="30px" type='logo' name='facebook-circle'></box-icon> 
        <box-icon size="30px"name='twitter' type='logo' ></box-icon>
        <box-icon size="30px"name='instagram-alt' type='logo' ></box-icon>
        <box-icon size="30px"name='github' type='logo' ></box-icon>
        </div>
        </div>
        <div className='grid justify-center py-8'>
            <h1 className='font-bold text-xl pb-4 justify-self-center'>Contact Us</h1>
            <ul className='list-none justify-self-center'>
                <li>Number : +250 781147778</li>
                <li>Email: mualbert2@gmail.com</li>
                <li></li>
            </ul>
        
        </div>
    </div>
    <div className="copy-right grid justify-center pb-4 mb-4">
        <span>&copy; {currentYear} Albert Musabyemungu</span>
    </div>
    </div>
  )
}
