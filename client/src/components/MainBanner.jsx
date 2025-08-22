import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt='banner' className='w-full hidden md:block'/>
      <img src={assets.main_banner_bg_sm} alt='banner' className='w-full md:hidden'/>
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
       <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight lg:leading-[1.2] max-w-2xl md:max-w-4xl lg:max-w-5xl">
        Freshness You can Trust, Savings You will Love!
      </h1>
      

      <div className='flex items-center mt-6 font-medium'>
        <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
        Shop Now 
        <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt='arrow'/>
        </Link>

        <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
        Explore deals 
        <img className=' transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt='arrow'/>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default MainBanner
