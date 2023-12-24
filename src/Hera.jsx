import React from 'react'
import photo from '/undraw_static_assets_rpm6.svg'
const Hera = () => {
  return (
   
   <section className='h-auto  w-full md:h-[50vh]'>
 
      <div className='   justify-center pl-10 pr-10  md:pl-28 md:pr-28  pt-20 flex flex-col md:flex-row'>
           <div className=' md:w-[50%] mt-7'> 

 <h1 className=' text-center   text-3xl md:text-5xl font-bold'>
             ContentFull CMS

 </h1>

   <h1 className=' text-center text-2xl font-semibold mt-3'>Innovation in JavaScript: my Project Showcase</h1>
        <p className=' text-center mt-4 mb-10'>
        
        Welcome to our comprehensive collection of JavaScript projects! Here, you'll find a diverse array of creations that showcase our team's innovation, dedication, and passion for JavaScript. From sleek frontend applications to robust backend solutions, each project embodies our commitment to pushing the boundaries of what's possible with this versatile language. Take a tour through our repository and witness firsthand the culmination of our expertise, creativity, and love for all things JavaScript.        </p>

           </div>
        <div className=' md:w-[50%]  mt-10   flex justify-center'>
 
         <img src={photo} alt="" className=' w-[40vh] md:h-[80%]'/>

        </div>
      </div>
     
   </section>   )
}

export default Hera