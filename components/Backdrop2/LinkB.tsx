import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function LinkB() {
  return (
    <div className='h-full flex flex-col text-center w-full'>
      <div className="flex items-center justify-between">
        <p></p>
        <p className="text-[#9DFBFA] text-sm">Token Details</p>
        <div className="h-7 w-7 grid cursor-pointer place-content-center rounded-full bg-[#475861]">
          <FaTimes className="text-[#9DFBFA]" />
        </div>
      </div>
      <div className="flex mt-32 flex-col items-center">
        <img src="logo.png" alt="" />
        <div className="w-72 mx-auto text-[#ECEDEE] mt-20">
          <p className=''><b className='text-prim'>TonPump</b> wants to perform
            on wallet UGnxfddd847..Uv-ld</p>
          <p className='text-11 mt-4'>2 TON(without fees) will be deducted from your TON wallet balance</p>
        </div>
        <div className="flex mt-10 justify-center items-center flex-col gap-5">
          <button className="text-secondary font-semibold px-10 py-3 rounded-lg bg-prim">
            Continue
          </button>
          <p className="font-semibold text-prim">0.2 TON is charged for deployment</p>
        </div>
      </div>
    </div>
  )
}
