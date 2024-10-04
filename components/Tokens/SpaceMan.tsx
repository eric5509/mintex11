import Image from 'next/image'
import { BsDot } from 'react-icons/bs'

export default function SpaceMan() {
    return (
        <div className="bg-[#272727] text-xs rounded-2xl p-3">
            <div className='flex text-white bg-[#323434] border-2 border-[#8996A9] rounded-2xl justify-evenly items-center gap-5 p-3'>
                <div className="">
                    <Image height={67} width={78} className='' loading='lazy' src="/imgg.png" alt="" />
                </div>
                <p className='font-semibold'>Space Man (#Space)</p>
                <p className='text-prim'>Market Cap - 11.5k</p>
                <div className="2xl:block hidden flex-1 px-3">
                    <div className="border-b-2 border-prim border-dashed w-full"></div>
                </div>
                <div className="flex p-2.5 text-xs items-center gap-2 rounded-full bg-[#9DFBFA0F]">
                    <p>Creator</p>
                    <BsDot />
                    <img src="logo1.png" alt="" />
                    <p className='font-semibold text-prim'>UGnxf</p>
                </div>
                <div className="">
                    <img src="star.png" alt="" />
                </div>
            </div>
        </div>)
}
