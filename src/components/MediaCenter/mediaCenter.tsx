"use client";
import React from 'react'
import Image from "next/image"
import HomeCommon from "@/components/common/Home/home"
const MediaCenter = () => {
  return (
    <div className=''>
    <HomeCommon />
    <div className="flex flex-row bg-black">
        <div className="flex-none w-1/2">
          <Image
            src="/assets/images/image40.png"
            alt="Image"
            className="pl-28"
            width={700}
            height={100}
          />
        </div>
        <div className="flex-grow flex flex-col justify-center px-8 py-4">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Choose your villa and set your budget
          </h2>
          <p className="text-lg mb-4 text-white">
            Choose your custom luxury villa, set your budget and timeline to
            move in, and our team will make it happen. And because we believe
            that everyone deserves luxury, we will tailor a flexible payment
            plan that is adapted to your needs and requirements.
          </p>
          <button className="bg-customColor hover:bg-customColor text-white font-semibold py-2 px-4 rounded w-80">
            Tell me How
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-center mb-4 text-white text-2xl">Have a Project in Mind?</h1>
      <h1 className="text-center mb-4 text-white text-2xl">Let’s Get Building!</h1>
      <button className="bg-customColor hover:bg-customColor text-white font-semibold py-2 px-4 rounded">
        Customize My Home
      </button>
    </div>


    <div className="flex flex-row bg-black">
        <div className="flex-none w-1/2">
         <h1 className='text-customColor'>Embark on an</h1>
         <h1 className='text-customColor'>Unforgettable</h1>
         <h1 className='text-customColor'>Journey</h1>
         <p>Email your questions to:</p>
         <p>info@ohana-development.com</p>
         <p>Call us on:</p>
         <p>+971 54 222 8281</p>
         <p>+971 54 222 8281</p>
        </div>
        <div className="flex-grow flex flex-col justify-center px-8 py-4">
        
    <form className="max-w-lg mx-auto mt-8">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="firstName" type="text" placeholder="Jane" />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lastName" type="text" placeholder="Doe" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="example@example.com" />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="text" placeholder="123-456-7890" />
        </div>
      </div>
      <div className="mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows={6} placeholder="Enter your message here..."></textarea>
      </div>
      <div className="flex justify-center">
        <button className="bg-customColor hover:bg-customColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </div>
    </form>
        </div>
      </div>
    </div>
  )
}

export default MediaCenter;