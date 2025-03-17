import React from 'react'
import global from './assets/globalIcon.png'
import cloths from './assets/clothsIcon.png'
import offers from './assets/offersIcon.png'
import security from './assets/securityIcon.png'
const GlobOfferSecurity = () => {
  return (
    <>
    <div className="bg-gray-50 border border-b-gray-500 flex flex-col justify-center items-center md:p-20 md:flex md:flex-row">
        <div className="flex flex-col justify-center items-center space-y-3 text-center py-7 px-8 md:px-3">
            <img className='w-12 h-12' src={global} alt="" />
            <h1 className='text-md font-bold md:text-lg'>Worldwide Shipping</h1>
            <p className='text-gray-500 text-sm font-semibold'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 text-center py-7 px-8 md:px-3">
            <img className='w-12 h-12' src={cloths} alt="" />
            <h1 className='text-md font-bold md:text-lg'>Best Quality</h1>
            <p className='text-gray-500 text-sm font-semibold'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 text-center py-7 px-8 md:px-3">
            <img className='w-12 h-12' src={offers} alt="" />
            <h1 className='text-md font-bold md:text-lg'>Best Offers</h1>
            <p className='text-gray-500 text-sm font-semibold'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 text-center py-7 px-8 md:px-3">
            <img className='w-12 h-12' src={security} alt="" />
            <h1 className='text-md font-bold md:text-lg'>Secure Payments</h1>
            <p className='text-gray-500 text-sm font-semibold'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
    </div>
    </>
  )
}

export default GlobOfferSecurity
