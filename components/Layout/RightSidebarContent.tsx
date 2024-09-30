'use client'
import KingOfCoin from '../ScreenA/KingOfCoin'
import DisplayActionCards from '../ScreenA/DisplayActionCards'
import { useAppSelector } from '@/redux/store/hook'
import Links from '../ScreenA/Links'
import Title from '../Title'
import BuySell from './BuySell'
import Input from '../Input'
import Button from '../Button'

export default function RightSidebarContent() {
    const darkmode = useAppSelector(store => store.darkmode.value)
    const type = useAppSelector(store => store.sidebar.type)
    return (
        <>
            {type === "main" &&
                <div className='border-2 min-h-full border-[#862078] rounded-2xl'>
                    <div className="p-2">
                        <Title title="King of Coin" height="50px" fontSize="18px" paddingLeft="5px" />
                    </div>
                    <div className={`p-3 ${darkmode ? "bg-[#272727]" : 'bg-white'} h-fit duration-500 transition-colors rounded-2xl mt-3`}>
                        <KingOfCoin />
                        <div className=" mb-4 mt-3 flex justify-between">
                            <Title title="Updates" paddingLeft="5px" height="50px" />
                            <Links paddingInline="12px" data={['All', 'Creation', 'Transaction']} fontSize="11px" />
                        </div>
                        <DisplayActionCards />
                    </div>
                </div>
            }
            {type === 'market' && <div className='border-2 h-full flex-col flex border-[#862078] rounded-2xl'>
                <Title parentPadding='10px' title='Trade' height='50px' />
                <div className="bg-[#272727] flex-1 rounded-xl p-2">
                    <BuySell />
                    <div className="flex justify-between items-center mt-4">
                        <Links noRadius={true} data={['Limit', 'Market']} fontSize='11px' />
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
                    <Input marginBottom='20px' marginTop='10px' label='Order Price' text='SPACE' placeholder='58403' />
                    <Input label='Qty' text='TON' placeholder='58403' />
                    <Input label='Total' text='USD' marginTop='30px' placeholder='' />
                    <Button marginTop='30px' title='Buy' />
                </div>
            </div>
            }
        </>
    )
}
