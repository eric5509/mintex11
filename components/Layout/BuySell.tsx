import React from 'react'
import { BsDot } from 'react-icons/bs'

export default function BuySell() {
  return (
    <div className="flex bg-[#223522] w-fit rounded-2xl">
      <div className="h-11 w-28 font-semibold duration-300 text-white rounded-2xl cursor-pointer active:scale-90 grid place-content-center bg-[#4db34d]">
        <p>Buy</p>
      </div>
      <div className="h-11 w-28 duration-300 hover:scale-110 cursor-pointer active:scale-90 text-red-600 font-semibold  rounded-2xl grid place-content-center ">
        <p>Sell</p>
      </div>
    </div>
   
  )
}
