'use client'
import { useState } from "react"

export default function SidebarA() {
    const data1 = [
        ['Rainbow', 'rainbow.png'],
        ['Coinbase Wallet', 'coinbase.png'],
        ['Metamask', 'metamask.png'],
        ['WalletConnect', 'wallet.png'],
    ]
    const data2 = [
        ['Argent', 'argent.png'],
        ['Trust', 'trust.png'],
        ['TrustLedger Live', 'ledger.png'],
        ['imWallet', 'imwallet.png'],
        ['Steakwallet', 'steak.png'],
    ]
    const [active, setActive] = useState(0)
    return (
        <div className="flex-1 p-5 ">
            <div className="">
                <p className="pb-3 text-prim text-15">Rainbow</p>
                <div className="flex flex-col gap-1">
                    {data1.map((el, key) => (
                        <div onClick={() => setActive(key)} key={key} className={`flex duration-300 ${active === key ? 'text-secondary bg-prim' : "bg-transparent hover:bg-[#3F3C3C99] text-white"} p-2 rounded-xl gap-3 cursor-pointer`}>
                            <img src={el[1]} alt="" />
                            <p className="font-semibold">{el[0]}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <p className="pb-3 text-prim text-15">More</p>
                <div className="flex flex-col gap-1">
                    {data2.map((el, key) => (
                        <div onClick={() => setActive(key+4)} key={key} className={`flex duration-300 ${active === key+4 ? 'text-secondary bg-prim' : "bg-transparent hover:bg-[#3F3C3C99] text-white"} p-2 rounded-xl gap-3 cursor-pointer`}>
                            <img src={el[1]} alt="" />
                            <p className="font-semibold">{el[0]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
