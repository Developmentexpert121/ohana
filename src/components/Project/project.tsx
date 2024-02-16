"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Project = () => {
  const [image, setImage] = React.useState<any>('assets/images/walk-trough-2.jpg');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className='bg-dark-body'>
      <section className="relative isolate pt-14 min-h-screen flex items-center">
        <div className="container">
          <div className='absolute top-0 left-0 w-full h-full'>
            <img src="assets/images/project-Hero-1.jpg" alt="" width={'100%'} height={'100%'} className='h-full' />
            <span className='bg-overlay-35 absolute top-0 left-0 w-full h-full'></span>
          </div>
          <div className="py-14 relative w-full">
            <div className="text-center">
              <h1 className="font-trajan-regular text-4xl font-bold tracking-tight text-white sm:text-7xl mx-auto">LUXURY, FAMILY, AND A SEASIDE VIEW</h1>
              <h2 className="font-trajan-regular text-4xl font-bold tracking-tight text-white sm:text-5xl pt-20 mx-auto">OHANA HILLS</h2>
              <div className="pt-8 flex justify-center">
                <a href="#" className="btn bg-gradient-to-b bg-white">Discover</a>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* ============Hero section end=============== */}
      <section className="relative isolate">
        <div className="container">
          <div className="mx-auto flex flex-wrap lg:flex-nowrap gap-3 lg:gap-0 items-center gap-y-16 py-24 md:py-34">
            <div className='col-content lg:pr-30 md:pr-18px'>
              <div className="relative pb-1">
                <span className="rounded-full px-6 py-2 text-sm lh-1 text-light bg-light-transparent border-onehalf border-light-transparent inline-block mb-3">
                  Overview
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-light sm:text-42px">Private Seaside Community</h2>
              <p className="mt-4 pb-0 mb-0 text-lg text-gray-700">Enjoy an exclusive lifestyle in Lebanon’s scenic Medyar District as part of Ohana Hills’ sophiticated and family-friendly community</p>
              <p className='pt-15 text-gray-700'>Delight yourself year-round with:</p>
              <ul className='list-unstyled text-white pt-2 grid grid-cols-1 lg:grid-cols-2 sm:max-w-md gap-3'>
                <li className='flex gap-3 sm:pb-sm'>
                  <img src="assets/images/icon-check.png" alt="" width={'24px'} height={'24px'} />
                  <span>Public Gardens</span>
                </li>
                <li className='flex gap-3 sm:pb-sm'>
                  <img src="assets/images/icon-check.png" alt="" width={'24px'} height={'24px'} />
                  <span>Beach Clubs</span>
                </li>
                <li className='flex gap-3'>
                  <img src="assets/images/icon-check.png" alt="" width={'24px'} height={'24px'} />
                  <span>Sports Fields</span>
                </li>
                <li className='flex gap-3'>
                  <img src="assets/images/icon-check.png" alt="" width={'24px'} height={'24px'} />
                  <span>Captivating Trails</span>
                </li>
              </ul>
              <div className="pt-15">
                <a href="#" className="btn bg-gradient-to-b bg-white inline-block">Get Brochure</a>
              </div>
            </div>
            <div className="col-image ">
              <img src="assets/images/image-40.jpg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      {/* ============Private Seaside Community end=============== */}
      <section className="relative isolate bg-light">
        <div className="container py-34">
          <div className="pb-30">
            <div className=''>
              <div className="relative pb-1">
                <span className="rounded-full px-6 py-2 text-sm lh-1 text-dark-body bg-light-transparent2 border-onehalf border-light-transparent2 inline-block mb-3">
                  Image Gallery
                </span>
              </div>

              <div className='flex flex-wrap items-center justify-between lg:flex-nowrap'>
                <h2 className="text-3xl font-bold text-dark-body sm:text-42px"><span className='font-normal text-gray-500'>Walk Through</span> Ohana Hills</h2>
                <div className="">
                  <a href="#" className="btn bg-gradient-to-b bg-white inline-block">Enter Gallery</a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 pt-15">
              <div className='col-span-1'>
                <img src="assets/images/walk-trough-1.jpg" alt="" className="w-full cover h-full" />
              </div>
              <div className='col-span-2'>
                <img src="assets/images/walk-trough-2.jpg" alt="" className="w-full cover h-full" />
              </div>
              <div className='col-span-1'>
                <img src="assets/images/walk-trough-3.jpg" alt="" className="w-full cover h-full" />
              </div>
            </div>
          </div>
          {/* //////// */}
          <div className="">
            <div className=''>
              <div className="relative pb-1">
                <span className="rounded-full px-6 py-2 text-sm lh-1 text-dark-body bg-light-transparent2 border-onehalf border-light-transparent2 inline-block mb-3">
                  Video Gallery
                </span>
              </div>
            </div>
            <div className='relative'>
              <div className='flex flex-wrap items-center justify-between lg:flex-nowrap video-gallery-header pb-15'>
                <h2 className="text-3xl font-bold text-dark-body sm:text-42px"><span className='font-normal text-gray-500'>Walk Through</span> Ohana Hills</h2>
              </div>
              <div className='video-item'>
                <img src={image} alt="" className="img-absolute cover h-auto" />
              </div>
              <div className="pt-8 video-thumb-slider">
                <Slider {...settings}>
                  <div className='px-9px'>
                    <div className='video-item-thumb relative'>
                      <img src="assets/images/walk-trough-1.jpg" alt="" className="img-absolute cover h-auto" onClick={()=>(setImage('assets/images/walk-trough-1.jpg'), console.log('1111111111111'))} />
                    </div>
                  </div>
                  <div className='px-9px'>
                    <div className='video-item-thumb relative'>
                      <img src="assets/images/walk-trough-2.jpg" alt="" className="img-absolute cover h-auto" onClick={()=>setImage('assets/images/walk-trough-2.jpg')} />
                    </div>
                  </div>
                  <div className='px-9px'>
                    <div className='video-item-thumb relative'>
                      <img src="assets/images/walk-trough-3.jpg" alt="" className="img-absolute cover h-auto" onClick={()=>setImage('assets/images/walk-trough-3.jpg')} />
                    </div>
                  </div>
                  <div className='px-9px'>
                    <div className='video-item-thumb relative'>
                      <img src="assets/images/walk-trough-1.jpg" alt="" className="img-absolute cover h-auto" onClick={()=>setImage('assets/images/walk-trough-1.jpg')} />
                    </div>
                  </div>
                  <div className='px-9px'>
                    <div className='video-item-thumb relative'>
                      <img src="assets/images/walk-trough-2.jpg" alt="" className="img-absolute cover h-auto"  onClick={()=>setImage('assets/images/walk-trough-2.jpg')} />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============Gallery section end=============== */}
      <section className="relative isolate flex items-center">
        <div className="container">
          <div className='absolute top-0 left-0 w-full h-full'>
            <img src="assets/images/BG.png" alt="" width={'100%'} height={'100%'} className='h-full' />
            {/* <span className='bg-overlay-35 absolute top-0 left-0 w-full h-full'></span> */}
          </div>
          <div className="relative w-full">
          <div className="mx-auto flex flex-wrap lg:flex-nowrap gap-3 lg:gap-0 gap-y-16 py-24 md:py-34">
            <div className="col-image ">
              <img src="assets/images/image-40.jpg" alt="" className="w-full" />
            </div>
            <div className='col-content lg:pl-30 md:pl-16 pt-30'>
              <div className="relative pb-1">
                <span className="rounded-full px-6 py-2 text-sm lh-1 text-light bg-light-transparent border-onehalf border-light-transparent inline-block mb-3">
                  Features + Amenities
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-light sm:text-42px">Fully Customizable <span className='font-normal'>Villas</span></h2>
              <p className="mt-4 pb-0 mb-0 text-lg text-gray-700">A high-End Villa Customized by You - For You</p>
              <div className="pt-15">
                <a href="#" className="btn bg-gradient-to-b bg-white inline-block">Customize My Villa</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* ============Customize Villas section end=============== */}
      <section className="relative isolate flex items-center py-34 overflow-hidden">
        <div className="container">
          <div className="relative w-full">
            <div className="bg-white bg-gradient-to-b text-center max-w-860 mx-auto lg:px-80 px-6 relative content-boxx">
              <div className='col-content py-34 relative z-10'>
                <h2 className="text-3xl font-bold tracking-tight text-light sm:text-5xl">Architectural <br /> Elegance For Design <br /> Excellence</h2>
                <p className="pt-25px text-lg text-white">Contemporary elegance and functional sophistication is blended into each of our commuities and their  villa properties for longstanding aesthetic elegance</p>
                <p className='pt-25px text-lg text-white'>Light-filled spaces. Vibrant and green environments. Refined Ambient Living On your Terms</p>
                <p className='pt-25px text-lg text-white'>Welcome to Ohana.</p>
                <div className="pt-15">
                  <a href="#" className="btn bg-white inline-block"><span className='text-gradient'>Book a Viewing</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============Architectural Elegance section end=============== */}
      <section className="relative isolate">
        <div className="container">
          <div className="mx-auto flex flex-wrap lg:flex-nowrap gap-3 lg:gap-0 items-center gap-y-16 py-24 md:py-34">
            <div className='col-content lg:pr-30 md:pr-18px w-full'>
              <div className="relative pb-1">
                <span className="rounded-full px-6 py-2 text-sm lh-1 text-light bg-light-transparent border-onehalf border-light-transparent inline-block mb-3">
                  Pricing & ROI Calculator
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-light sm:text-42px">Dream Homes <span className='font-normal'>in Reach</span></h2>
              <p className="pt-2 pb-0 mb-0 text-lg text-gray-700">Pick your luxurious villa and let us work out its price for you</p>
              <div className="pt-15">
                <a href="#" className="btn bg-gradient-to-b bg-white inline-block">Talk to us</a>
              </div>
            </div>
            <div className="col-form">
              <div className='form-main bg-light rounded-lg pt-20 p-15'>
                <form action="">
                  <div className="form-group pb-35px">
                    <label htmlFor="selectVilla" className="block pb-sm font-medium text-gray-500">Select a Villa</label>
                    <select id="selectVilla" className="form-control">
                      <option>920000 - Villa Eono</option>
                      <option>920000 - Villa Eono</option>
                      <option>920000 - Villa Eono</option>
                      <option>920000 - Villa Eono</option>
                    </select>
                  </div>
                  <div className="form-group pb-35px">
                    <label htmlFor="futureValue" className="block pb-sm font-medium text-gray-500">Future Value in $</label>
                    <input id="futureValue" type="text" name="" className='form-control' placeholder='1,127,039.560' />
                  </div>
                  <div className="form-group pb-35px">
                    <label htmlFor="valueIncrease" className="block pb-sm font-medium text-gray-500">Value Increase in $</label>
                    <input id="valueIncrease" type="text" name="" className='form-control' placeholder='71,760.000' />
                  </div>
                  <div className="form-group pb-35px">
                    <label htmlFor="yearlyRents" className="block pb-sm font-medium text-gray-500">Yearly Rent Revenue in $</label>
                    <input id="yearlyRents" type="text" name="" className='form-control' placeholder='71,829.000' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="yearlyROI" className="block pb-sm font-medium text-gray-500">Yearly ROI in $%</label>
                    <input id="yearlyROI" type="text" name="" className='form-control' placeholder='7.808' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============Dream Homes Section end=============== */}
      <section className="relative isolate">
        <div className='absolute top-0 left-0 w-full h-full'>
          <img src="assets/images/Project-Bg.jpg" alt="" width={'100%'} height={'100%'} className='h-full' />
          <span className='bg-gradient-black-transparent absolute top-0 left-0 w-full h-full'></span>
        </div>
        <div className="container relative z-10 md:pt-30">
          <div className="mx-auto py-24 md:py-34">
            <div className='col-content lg:pt-34 max-w-1310'>
              <div className="relative pb-1">
                <span className="backdrop-blur-sm rounded-full px-6 py-2 text-sm lh-1 text-light bg-light-transparent border-onehalf border-light-transparent inline-block mb-3">
                  Payment Plans
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-42px">Customized Payments for <span className='form-normal text-light'>Customized Villas</span></h2>
              <p className="mt-4 pb-0 mb-0 text-lg text-white max-w-1000">Each community member has their own story to accompany their uniquely customized villa. Purchase your 
new international luxury property from the comfort of your local home in the UAE and Lebanon.</p>
              <p className='pt-25px text-white text-lg'>Embrace the ease of payment with:</p>
              <ul className='list-unstyled text-lg text-white pt-1 grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <li className='flex gap-3 items-start sm:pb-sm'>
                  <img src="assets/images/icon-check.png" alt="" width={'24px'} height={'24px'} />
                  <span>Flexible payment plans</span>
                </li>
                <li className='flex gap-3 items-start sm:pb-sm'>
                  <img src="assets/images/icon-check.png" alt="" width={'24px'} height={'24px'} />
                  <span>A negotiable 30% down payment</span>
                </li>
                <li className='flex gap-3 items-start'>
                  <img src="assets/images/icon-check.png" alt="" width={'24px'} height={'24px'} />
                  <span>Multiple Payment options including Crypto</span>
                </li>
              </ul>
              <p className='pt-25px text-white text-lg'>Limited plots in our communities are running out! <br />Secure your viewing soon.</p>
              <div className="pt-15">
                <a href="#" className="btn bg-gradient-to-b bg-white inline-block">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============Customized Payments Section end=============== */}
      <section className="relative isolate">
        <div className="container">
          <div className="mx-auto flex flex-wrap lg:flex-nowrap gap-3 lg:gap-0 items-center gap-y-16 py-24 md:py-34">
            <div className='col-content lg:pr-30 md:pr-18px'>
              <div className="relative pb-1">
                <span className="rounded-full px-6 py-2 text-sm lh-1 text-light bg-light-transparent border-onehalf border-light-transparent inline-block mb-3">
                  Crypto as Payment
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-light sm:text-42px"><span className='font-normal'>Cryptocurrency</span> Accepted!</h2>
              <p className="mt-4 pb-0 mb-0 text-lg text-gray-700">By accepting cryptocurrencies, we’ve just made your life a little easier. Own your Dream Luxurious Villa with one simple transaction.</p>
              <p className='pt-15 text-gray-700 text-lg'>Accepted currencies:</p>
              <ul className='list-unstyled text-white pt-2 grid grid-cols-1 lg:grid-cols-2 sm:max-w-md gap-3'>
                <li className='flex items-center gap-3 sm:pb-sm'>
                  <img src="assets/images/bitcoin.png" alt="" width={'42px'} height={'42px'} />
                  <span>Bitcoin</span>
                </li>
                <li className='flex items-center gap-3 sm:pb-sm'>
                  <img src="assets/images/sort.png" alt="" width={'42px'} height={'42px'} />
                  <span>Ethereum</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="assets/images/cryptocurrency-color_usdt.png" alt="" width={'42px'} height={'42px'} />
                  <span>USDT</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="assets/images/fa-brands_bitcoin.png" alt="" width={'42px'} height={'42px'} />
                  <span>BUSD</span>
                </li>
              </ul>
              <div className="pt-15">
                <a href="#" className="btn bg-gradient-to-b bg-white inline-block">Inquire Now</a>
              </div>
            </div>
            <div className="col-image py-sm">
              <div className="col-inner lg:py-16 lg:px-sm">
                <img src="assets/images/Group.png" alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============Cryptocurrency Section end=============== */}
      <section className="relative isolate bg-light">
        <div className="container py-34">
          <div className="pb-30">
            <div className=''>
              <div className="relative pb-1">
                <span className="rounded-full px-6 py-2 text-sm lh-1 text-dark-body bg-light-transparent2 border-onehalf border-light-transparent2 inline-block mb-3">
                  Location and Map
                </span>
              </div>

              <div className='flex flex-wrap items-center justify-between lg:flex-nowrap'>
                <h2 className="text-3xl font-bold text-dark-body sm:text-42px"><span>A Birdview of Your Ohana </span> <span className='text-gray-500 font-normal'>Hills Community</span></h2>
                <div className="">
                  <a href="#" className="btn bg-gradient-to-b bg-white inline-block">Get Brochure</a>
                </div>
              </div>
            </div>
              <div className='pt-15'>
                <img src="assets/images/m-view.jpg" alt="" className="w-full cover h-full" />
              </div>
          </div>
          {/* //////// */}
          <div className="">
            <div className=''>
              <div className="relative pb-1">
                <span className="rounded-full px-6 py-2 text-sm lh-1 text-dark-body bg-light-transparent2 border-onehalf border-light-transparent2 inline-block mb-3">
                  Virtual Tour
                </span>
              </div>
            </div>
            <div className='relative'>
              <div className='flex flex-wrap items-center justify-between lg:flex-nowrap pb-15'>
                <h2 className="text-3xl font-bold text-dark-body sm:text-42px">Take a Tour <span className='font-normal text-gray-500'>of Your Luxury Villa</span></h2>
                <div className="">
                  <a href="#" className="btn bg-gradient-to-b bg-white inline-block">Take a V-tour</a>
                </div>
              </div>
              <div className='video-item'>
                <img src={image} alt="" className="img-absolute cover h-auto" />
              </div>
              <div className="pt-8 video-thumb-slider">
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============Property View Section end=============== */}
    </div>
  )
}

export default Project;