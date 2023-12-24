import React from 'react'

import Fetchproject from './Fetchproject'
const Projects = () => {
  const {loading , projects} = Fetchproject();
   if(loading){
    return <>Loading ..</>
   }
  return (
    <div className='mt-10 h-auto bg-slate-300 overflow-hidden '>
  <div className='p-0  md:p-10'>

         <div className='p-0 md:p-12'>
              <h1 className=' text-center  mt-5  text-4xl font-semibold'>Projects</h1>
             <div className=' bg-blue-500 rounded-sm h-1 w-20 block m-auto mt-2'></div>

             <p className=' text-center text-2xl p-5 font-semibold'> You can explore each project in detail by clicking on its respective project card. </p>

         </div>

         <div className='  grid  w-[100vw]  grid-cols-1 md:grid-cols-3 gap-6'>
            {
              projects.map((item)=>{
                const {id , name , img , url} = item;
                console.log(name)
                return <div className='   hover:scale-110 shadow-md  transition-all duration-500 mt-10   bg-white m-auto w-[50vw] md:w-[20vw] h-auto     '>

             <a key={id} href={url} rel='noreferrer'  target='_blank'>
         <img src={img} alt="" className=' m-auto h-auto w-auto     ' />        
            <h1 className=' text-center text-xl font-semibold p-3'>{name} </h1>
            </a>
            </div>
               })
              }
         </div>
              </div>

    </div>
  )
}

export default Projects