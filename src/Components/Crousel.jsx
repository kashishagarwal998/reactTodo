import React from 'react'
import { Carousel } from "@material-tailwind/react";
const Crousel = () => {
  return (
    <div autoPlay className='h-64 border border-black/10 '>
        
        <Carousel   className="">
      <img
        src="https://plus.unsplash.com/premium_photo-1683309563255-fef9e541cdec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvJTIwZG8lMjBsaXN0fGVufDB8fDB8fHww"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://plus.unsplash.com/premium_photo-1683749810514-860f96ad0735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRvJTIwZG8lMjBsaXN0fGVufDB8fDB8fHww"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://plus.unsplash.com/premium_photo-1661963783275-dff88a0296f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
  )
}

export default Crousel

 

