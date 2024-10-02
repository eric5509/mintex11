import React, { Dispatch, SetStateAction, useState } from 'react'
import { BsDot } from 'react-icons/bs'

type Props = {
  active: number
  setActive: Dispatch<SetStateAction<number>>
}

export default function BuySell({ active, setActive }: Props) {
  return (
    <div className="flex gap-3 w-fit rounded-2xl">
      <div onClick={() => setActive(0)} className={`h-12 w-28 border-2 border-[#4db34d] duration-300  rounded-xl cursor-pointer active:scale-90 grid place-content-center  ${active === 0 ? "bg-[#4db34d] text-white " : "text-[#4db34d] bg-[#323434]"}`}>
        <p>Buy</p>
      </div>
      <div onClick={() => setActive(1)} className={`h-12 w-28 border-2 border-[red] duration-300  rounded-xl cursor-pointer active:scale-90 grid place-content-center  ${active === 1 ? "bg-[red] text-white" : "text-[red] bg-[#323434]"}`}>
        <p>Sell</p>
      </div>

    </div>

  )
}
