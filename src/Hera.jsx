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
        
        In my JavaScript project collection, there's a world of wonders made from lines of code!  interactive web apps that respond to your every click,where I've used my expertise to develop a diverse range of engaging applications, maybe fun games that transport you to new realms, or handy tools simplifying complex tasks. These projects are the products of my passion for JavaScript,  Exploring this collection reveals not just my love for coding but also my knack for problem-solving and creating fun, functional things with JavaScript.       </p>

           </div>
        <div className=' md:w-[50%]  mt-10   flex justify-center'>
 
         <img src={photo} alt="" className=' w-[40vh] md:h-[80%]'/>

        </div>
      </div>
     
   </section>   )
}

export default Hera