import React from 'react'

type Props = {
    title: string
    marginTop?: string
    paddingX?: string
}

export default function Button({ title, marginTop, paddingX }: Props) {
    return (
        <div style={{marginTop: `${marginTop}`}} className="grid place-content-center transition-none">
            <button style={{paddingInline: `${paddingX}`}} className='px-[70px] font-semibold py-[10px] hover:scale-105 active:scale-100 duration-150 rounded-xl text-secondary bg-prim'>{title}</button>
        </div>
    )
}
