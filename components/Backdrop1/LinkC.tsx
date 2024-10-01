'use client'
import { closeBackdrop } from '@/redux/reducers/backdrop'
import { useAppDispatch } from '@/redux/store/hook'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function LinkC() {
    const dispatch = useAppDispatch()
    return (
        <div className='h-full w-full flex flex-col justify-between'>
            <div className="h-7 float-right cursor-pointer w-7 grid place-content-center place-self-end rounded-full bg-[#475861]">
                <FaTimes onClick={() => dispatch(closeBackdrop())} className="text-[#9DFBFA]" />
            </div>
            <div className="flex justify-center items-center flex-col">

                <img src="coinbase2.png" alt="" />
                <p className='text-lg font-bold text-white mt-3'>Coinbase Wallet</p>
                <div className="flex mt-3">
                    <img src="" alt="" />
                    <p className='text-[#9DFBFA] font-semibold'>Connection Successful</p>
                </div>

            </div>
            <button className='py-3 px-20 -translate-y-5 bg-[#9DFBFA] w-fit rounded-xl mx-auto'>Done</button>
        </div>
    )
}
