import React from 'react'

export default function CommentCard() {
    return (
        <div className="flex gap-5">
            <div className="">
                <img src="logo1.png" className='h-[32px] w-[32px] ' alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <b className='font-bold text-base text-prim'>FUasdf</b>
                    <p className='text-[#838A91]'>20 Mar 2021 at 05:15 PM</p>
                    <div className="flex items-center gap-2">
                        <img src="like.png" alt="" />
                        <p className='font-semibold text-[#F4245E]'>31</p>
                    </div>
                </div>
                <p className='text-white bg-[#292F32] p-3 rounded-lg'>This is one of the best project i’ve ever come across. This is the deal guys.</p>
                <p className='px-5 py-2 text-15 rounded-full w-fit bg-[#0000000F] text-prim'>Comment</p>
            </div>

        </div>
    )
}
