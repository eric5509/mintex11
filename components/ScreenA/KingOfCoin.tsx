'use client'
import { useAppSelector } from '@/redux/store/hook'
import { BsDot } from 'react-icons/bs'

export default function KingOfCoin() {
    const darkmode = useAppSelector(store => store.darkmode.value)
    return (
        <div className={`grid ${darkmode? ' bg-[#334648]': 'bg-[#4DB24D]'} duration-500 gap-2  transition-colors p-3 w-full rounded-2xl grid-cols-[1fr_.75fr]`}>
            <div className={`text-white p-2 rounded-2xl duration-500 transition-colors ${darkmode?"bg-transparent" : "bg-black/20"}`}>
                <p className='text-10 items-center mb-1 flex gap-1'>
                    <span className='font-bold'>$Space</span>
                    <span>created by</span>
                    <BsDot />
                    <span className='font-bold'>UGnxf</span>
                </p>
                <p className='text-xs mb-1'>Market Cap - 11.5k</p>
                <p className='font-semibold text-xs mb-3'>Space Man (#Space)</p>
                <div className="">
                    <div className="flex gap-2">
                        <img src="image.png" className='rounded-xl' alt="" />
                        <div className="flex text-xs font-semibold flex-col justify-between p-2 bg-black/20 rounded-xl">
                            <div className="flex items-center gap-1">
                                <div className="flex items-center gap-1">
                                    <img src="comment.png" alt="" />
                                </div>
                                <p>61</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="">
                                    <img src="like.png" alt="" />
                                </div>
                                <p className="text-[#F4245E]">6.2k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <img src="king.png" alt="" />
            </div>
        </div>
    )
}
