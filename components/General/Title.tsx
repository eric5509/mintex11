'use client'
import { useAppSelector } from '@/redux/store/hook'

type Props = {
    title: string
    height?: string
    fontSize?: string
    paddingLeft?: string
    fullWidth?: boolean
    leaveWhite?: boolean
    parentPadding?: string
    marginBottom?: string
    marginTop?: string
}

export default function Title({ fullWidth, title,parentPadding, marginBottom, height,marginTop, fontSize, leaveWhite, paddingLeft }: Props) {
    const darkmode = useAppSelector(store => store.darkmode.value)
    return (
        <div style={{padding: `${parentPadding}`, marginBottom: `${marginBottom}`, marginTop: `${marginTop}`}} className="">
            <div style={{ height: `${height}` }} className={`h-full  overflow-hidden rounded-md pl-3 flex items-center relative ${fullWidth ? 'w-full' : 'w-fit'}`}>
                <div className="h-6 w-6 -top-[15px] rotate-45 -left-[15px] absolute bg-prim"></div>
                <div className="h-6 w-6 -bottom-[15px] rotate-45 -left-[15px] absolute bg-white"></div>
                <p style={{ fontSize: `${fontSize}`, paddingLeft: `${paddingLeft}` }} className={`place-content-center mr-8 text-xl font-semibold ${darkmode ? 'text-white' : `${leaveWhite ? "text-white" : "text-black"}`} duration-500 transition-colors`}>{title}</p>
                <p className='text-xs text-blue-800 absolute top-full '>20/02/20</p>
            </div>
        </div>
    )
}
