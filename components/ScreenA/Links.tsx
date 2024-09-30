'use client'
import { useAppSelector } from "@/redux/store/hook";
import { useState } from "react";

type Props = {
    data: string[]
    fontSize?: string
    height?: string
    paddingInline?: string
    marginRight?: string
    marginLeft?: string
    between?: boolean
    radius?: string
    noRadius?: boolean
}

export default function Links({ data, fontSize, paddingInline, marginRight, radius, marginLeft, height, noRadius }: Props) {
    const darkmode = useAppSelector(store => store.darkmode.value)
    const [active, setActive] = useState(0)
    return (
        <div style={{ height: `${height}`, borderTopLeftRadius: `${radius}`, borderTopRightRadius: `${radius}`, marginRight: `${marginRight}`, marginLeft: `${marginLeft}` }} className={`text-15 h-12  relative ${!noRadius && "rounded-t-lg"} overflow-hidden`}>
            <div className={` w-fit h-full duration-500 transition-colors flex ${darkmode ? "bg-[#323434] " : " bg-black/5"}`}>
                <div className={` w-fit h-full transition-none flex `}>
                    {
                        data.map((el, key) => (
                            <p onClick={() => setActive(key)} style={{ fontSize: `${fontSize}`, paddingInline: `${paddingInline}` }} className={`px-5 font-semibold border-b-2 cursor-pointer h-full w-fit duration-500 transition-colors place-content-center ${active === key ? `${darkmode ? "border-[#9DFBFA] text-[#9DFBFA]" : "border-[#9DFBFA] text-gray-700"}` : `${darkmode ?"text-[#7D8FB3] border-transparent" : "text-[#7D8FB3]"} bg-transparent border-transparent` } `}>{el}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}