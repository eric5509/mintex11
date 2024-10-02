'use client'
import { motion } from 'framer-motion'
import KingOfCoin from '../Home/KingOfCoin'
import DisplayActionCards from '../Home/DisplayActionCards'
import { useAppSelector } from '@/redux/store/hook'
import Links from '../General/Links'
import Title from '../General/Title'
import BuySell from './BuySell'
import Input from '../General/Input'
import Button from '../General/Button'
import { useState } from 'react'


export default function RightSidebarContent() {
    const darkmode = useAppSelector(store => store.darkmode.value)
    const type = useAppSelector(store => store.sidebar.type)
    const [active, setActive] = useState(0)
    const [activeMarket, setActiveMarket] = useState(0)



    return (
        <>
            <motion.div
                animate={{ opacity: type === 'main' ? 1 : 0 }}
                transition={{ duration: 1 }}
                className={`border-2 ${type != 'main' && 'hidden'} min-h-full border-[#862078] rounded-2xl`}>
                <div className="p-2">
                    <Title title="King of Coin" height="50px" fontSize="18px" paddingLeft="5px" />
                </div>
                <div className={`p-3 ${darkmode ? "bg-[#272727]" : 'bg-white'} h-fit duration-500 transition-colors rounded-2xl mt-3`}>
                    <KingOfCoin />
                    <div className=" mb-4 mt-3 flex justify-between">
                        <Title title="Updates" paddingLeft="5px" height="50px" />
                        <Links identifier='sidebar' active={active} setActive={setActive} paddingInline="12px" data={['All', 'Creation', 'Transaction']} fontSize="11px" />
                    </div>
                    <DisplayActionCards />
                </div>
            </motion.div>
            <motion.div
                animate={{ opacity: type === 'market' ? 1 : 0 }}
                transition={{ duration: 1 }}
                className={`${type != 'market' && "hidden"} border-2 h-full flex-col flex border-[#862078] rounded-2xl`}>
                <Title parentPadding='10px' title='Trade' height='50px' />
                <div className="bg-[#272727] flex-1 rounded-xl p-2">
                    <BuySell active={activeMarket} setActive={setActiveMarket} />
                    <div className="flex justify-between items-center mt-4">
                        <Links active={active} setActive={setActive} noRadius={true} data={['Limit', 'Market']} fontSize='11px' />
                        <div className="flex flex-col items-end">
                            <div className="flex gap-1 items-center text-[#ECEDEE]">
                                <p className='text-xs'>Avail. Balance (TON)</p>
                                <div className="">
                                    <img src="recycle.png" alt="" />
                                </div>
                            </div>
                            <p className='text-prim'>5.80</p>
                        </div>
                    </div>
                    <Input marginBottom='20px' marginTop='20px' label='Order Price' text='SPACE' placeholder='58403' />
                    <Input label='Qty' text='TON' marginTop='10px' placeholder='58403' />
                    <Input label='Total' text='USD' marginTop='30px' placeholder='' />
                    <div className="flex mt-10 justify-center">
                        <button className={`px-[70px] font-semibold py-[14px] hover:scale-105 active:scale-100 duration-150 rounded-xl text-white ${activeMarket === 0 ? "bg-[#4db34d]" : "bg-[red]"}`}>{activeMarket === 0 ? 'Buy' : 'Sell'}</button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
