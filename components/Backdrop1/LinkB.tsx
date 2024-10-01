import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function LinkB() {
    return (
        <div className='h-full w-full flex flex-col justify-between'>
            <div className="h-7 float-right cursor-pointer w-7 grid place-content-center place-self-end rounded-full bg-[#475861]">
                <FaTimes className="text-[#9DFBFA]" />
            </div>
            <div className="flex justify-center items-center flex-col">

                <img src="coinbase2.png" alt="" />
                <p className='text-lg font-bold text-white mt-3'>Coinbase Wallet</p>
                <div className="flex mt-3">
                    <img src="" alt="" />
                    <p className='text-[#9DFBFA] font-semibold'>Waiting for connection</p>
                </div>

            </div>
            <div className="flex items-center justify-between">
                <p className="text-[#9DFBFA]">Using the mobile app?</p>
                <p className="bg-[#475861] text-[#9DFBFA] px-5 py-2 rounded-full font-semibold">Show QR</p>
            </div>
        </div>
    )
}
