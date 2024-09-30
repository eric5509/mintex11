import { FaTimes } from "react-icons/fa";

export default function LinkD() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex w-full items-center justify-between">
                <p></p>
                <p className="text-[#9DFBFA] text-sm">Token Details</p>
                <div className="h-7 w-7 grid cursor-pointer place-content-center rounded-full bg-[#475861]">
                    <FaTimes className="text-[#9DFBFA]" />
                </div>
            </div>
            <div className="mt-20 gap-5 flex flex-col items-center justify-center ">
                <img src="checkcircle.png" className="w-12" alt="" />
                <p className="text-prim text-base mt-5">Transaction Creation Successful</p>
                <p className="w-56 text-center text-11 text-[#ECEDEE]">Your token has been successfully created and is now available in your profile</p>
                <button className='py-3 mt-14 px-20 -translate-y-5 bg-[#9DFBFA] w-fit rounded-xl mx-auto'>Done </button>
            </div>

        </div>
    )
}
