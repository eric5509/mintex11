import React from 'react'

type Props = {
    title: string
    marginTop?: string
}

export default function Button({ title, marginTop }: Props) {
    return (
        <div style={{marginTop: `${marginTop}`}} className="grid place-content-center transition-none">
            <button className='px-16 py-[10px] hover:scale-105 active:scale-100 duration-150 rounded-2xl text-secondary bg-prim'>{title}</button>
        </div>
    )
}
