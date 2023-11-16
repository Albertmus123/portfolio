import React from 'react'


export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
        <> 
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-3 bg-slate-700 text-white py-6 mx-2'> 
        <div className='grid justify-center '>
            <h1 className='text-2xl font-bold pb-4'>Social Media</h1>
            <ul className='list-disc list-inside'>Facebook</ul>
            <ul className='list-disc list-inside'>Instagram</ul>
            <ul className='list-disc list-inside'>Twitter</ul>
            <ul className='list-disc list-inside'>LinkedIn</ul>
        </div>

        
        <div className='grid justify-center'>
            <h1 className='text-2xl font-bold pb-4'>Services</h1>
            <ul className='list-disc list-inside'>Web Design</ul>
            <ul className='list-disc list-inside'>Web Development</ul>
            <ul className='list-disc list-inside'>Mobile Development</ul>
            <ul className='list-disc list-inside'>Web Design</ul>
            </div>

        <div className='grid justify-center'>
            <h1 className='text-2xl font-bold pb-4'>Contact Us</h1>
            <ul className='list-disc list-inside'>+250 781147778</ul>
            <ul className='list-disc list-inside'>mualbert2@gmail.com</ul>
        </div>

 

        </div>  


    <div className="copy-right grid justify-center py-2">
        <span>&copy; {currentYear} Albert Musabyemungu</span>
    </div>


</> 
  )
}
