'use client'

import { toggleDarkmode } from "@/redux/reducers/darkmode"
import { useAppDispatch, useAppSelector } from "@/redux/store/hook"

export default function Topnav() {
    const darkmode = useAppSelector(store => store.darkmode.value)
    const dispatch = useAppDispatch()

    return (

        <div className={`h-20 duration-500 transition-colors justify-between px-12 flex items-center w-full ${darkmode ? 'text-white shadow-2xl bg-[#210716] shadow-gray-950 ' : 'shadow-md shadow-gray-500 text-black'}`}>
            <div className="flex items-center gap-20">
                {darkmode && <img src="/logo.svg" className="w-[179px] h-[29px]" alt="" />}
                {!darkmode && <img src="/logoDark.svg" className="w-[179px] h-[29px]" alt="" />}
                <div className="transition-none">
                    <div className={`flex items-center duration-500 gap-5 ${darkmode ? "bg-[#D8FDFD0F]" : "bg-gray-300"}  px-5 py-3 rounded-full`}>
                        <img src="x.png" className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
                        <img src="telegram.png" className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
                        <img src="discord.png" className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
                    </div>
                </div>
            </div>
            <div className={`w-[300px] h-[50px] shadow duration-500  rounded-full relative ${darkmode ? "bg-white/10" : "bg-gray-200"}`}>
                <input type="text" placeholder='Try searching "Trending"' className={`h-full placeholder:font-semibold  w-full bg-transparent outline-none pr-8 pl-5 ${darkmode ? "placeholder:text-[#C4FDFC]" : "placeholder:text-gray-800"}`} />
                {!darkmode && <img src="darksearch.png" className="absolute top-1/2 -translate-y-1/2 right-4" alt="" />}
                {darkmode && <img src="search.png" className="absolute top-1/2 -translate-y-1/2 right-4" alt="" />}
            </div>
            <div className="flex items-center transform-none gap-7">
                <div className="">
                    <img src="toggler.png" onClick={() => dispatch(toggleDarkmode())} className="translate-x-9 cursor-pointer duration-300 active:scale-95" alt="" />
                </div>
                <div className="flex items-center gap-2">
                    <img src="gem.png" alt="" />
                    <p className="font-bold">0.0200</p>
                </div>
                <div className="transition-none">
                    <p className="px-10 py-3 rounded-lg cursor-pointer border-2 hover:scale-105 duration-300 active:scale-100 border-[#9DFBFA] font-semibold">Create Token</p>
                </div>
            </div>
        </div>
    )
}
