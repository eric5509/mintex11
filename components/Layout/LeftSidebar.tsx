'use client'

import { useAppSelector } from "@/redux/store/hook"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LeftSidebar() {
  const darkmode = useAppSelector(store => store.darkmode.value)
  const pathname = usePathname()
  const links = [
    ['Home', 'home.png', '/', 'home.png'],
    ['All Tokens', 'tokens.png', '/tokens', 'bluetoken.png'],
    ['Profile', 'profile.png', '/profile', 'blueprofile.png'],
    ['Earn', 'gem1.png', '/earn', 'greengem.png'],
  ]
  return (
    <div className={`border-2 border-[#862078] flex flex-col justify-between ${darkmode ? "bg-[#210716]": ""} duration-500 transition-colors h-full p-3 rounded-2xl`}>
      <div className="flex flex-col gap-3">
        {links.map((el, key) => (
          <Link key={key} href={`${el[2]}`} className={`flex items-center border-2 cursor-pointer border-transparent hover:border-prim duration-500 shadow-md transition-colors ${pathname === el[2] ? "bg-[#9DFBFA] text-secondary font-bold" : `${darkmode ? "bg-[#242727] text-[#EBEBEB]": "bg-white text-black"}`} rounded-xl gap-3 `}>
            <div className="h-[50px] w-12 rounded-md grid place-content-center">
              <img src={darkmode ? el[1] : el[3]} alt="" />
            </div>
            <p className="">{el[0]}</p>
          </Link>
        ))}
      </div>
      <div className="space-y-8">
        <div className="grid place-content-center">
          <img src="cuate.png" className="w-48" alt="" />
        </div>
        <div className={`${darkmode ? 'bg-[#3C4141]' : 'bg-gray-200'} cursor-pointer duration-500 transition-colors relative flex p-2 rounded-xl items-center gap-2`}>
          <img src="Medium2.png" alt="" />
          <div className="">
            <p className={`font-bold duration-500 transition-colors ${darkmode ? "text-white": "text-black"}`}>UGnxf</p>
            <p className={`duration-500 transition-colors ${darkmode ? "text-[#ECEDEE]": "text-black"}`}>UGnxfddd847..Uv-ld</p>
            <img src="chevron.png" className="absolute top-1/2 right-3 -translate-y-1/2" alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}
