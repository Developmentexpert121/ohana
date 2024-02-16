"use client";
import React from 'react'

const Villa = () => {
  return (
  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className='absolute top-0 left-0 w-full h-full'>
        <img src="assets/images/villa-Hero.jpg" alt="" width={'100%'} height={'auto'} />
        <span className='bg-gradient-black-transparent absolute top-0 left-0 w-full h-full'></span>
      </div>
    <div className="py-32 sm:py-48 lg:py-56 relative">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative">
          <a href="#" className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Build Your Villa page
          </a>
        </div>
      </div>
      <div className="text-left">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl sm:max-w-md"><span className='font-normal'>You dream it</span> we build it!</h1>
        <p className="mt-6 text-xl text-white max-w-7xl">Build your dream home in the UAE from the comfort of your home. Customize your future luxury villa to your requirements, set the location budget, sit back and relax.</p>
        <div className="mt-10 flex"> 
          <a href="#" className="btn bg-gradient-to-b">Get started</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Villa;