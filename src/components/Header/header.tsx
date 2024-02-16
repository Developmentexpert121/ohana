"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
  <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-16" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="assets/images/Logo.png" alt="" width={202} height={74} />
        </a>
      </div>
      <div className='flex py-2 rounded-lg bg-gradient-light-dark bg-color-light-dark border-onehalf backdrop-blur-sm px-6'>
        <div className="hidden lg:flex lg:gap-x-12">
          <form action="">
            <div className="">
              <div className="flex sm:max-w-md">
              <div className="flex items-center relative">
                <input type="text" placeholder="Search" className="py-3 form-control rounded-lg px-2 mr-0 bg-transparent text-gray-800" />
                <button className="bg-gradient-to-b absolute rounded-lg w-50px text-white font-bold p-2 uppercase search-icon right-0 top-0 h-full">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
              <g>
                <path d="M1 10H25" stroke="#282828" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M1 1H25" stroke="#282828" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M1 19H25" stroke="#282828" stroke-width="1.5" stroke-linecap="round"/>
              </g>
            </svg>
          </button>
        </div>
      </div>
      
    </nav>
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
            </div>
            <div className="py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header;