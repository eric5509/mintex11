'use client'
import { useAppSelector } from "@/redux/store/hook"
import LinkA from "./LinkA"
import LinkB from "./LinkB"
import LinkC from "./LinkC"

export default function Backdrop1() {

    const links1 = [
        ['Rainbow', 'rainbow.png'],
        ['Coinbase Wallet', 'coinbase.png'],
        ['MetaMask', 'metamask.png'],
        ['WalletConnect', 'wallet.png'],
    ]
    const links2 = [
        ['Argent', 'argent.png'],
        ['Trust', 'trust.png'],
        ['Ledger Live', 'ledger.png'],
        ['imWallet', 'imwallet.png'],
        ['Steakwallet', 'steak.png'],
    ]
    const backdrop = useAppSelector(store => store.backdrop.value)
    return (
        <div className={`h-[calc(100vh-80px)] ${backdrop != 1 && 'opacity-0 invisible'} duration-300 w-screen fixed top-20 grid place-content-center left-0 bg-black/10 backdrop-blur-sm z-[5000] `}>
            <div className="w-[850px] h-[575px] overflow-hidden bg-[#2D383E] rounded-2xl shadow-lg grid grid-cols-[300px_1fr] shadow-gray-700">
                <div className=" border-r-2 p-4">
                    <div className="flex justify-between">
                        <img src="smallLogo.png" className="h-[18px]" alt="" />
                        <p className="text-[#9DFBFA] font-semibold">Connect Wallet</p>
                    </div>
                    <div className="mt-5">
                        <p className="text-[#9DFBFA] mb-2 pl-2 font-semibold">Rainbow</p>
                        <div className="flex flex-col gap-1">
                            {links1.map((link, key) => (
                                <div key={key} className="flex p-2 rounded-xl text-white hover:text-[#22577A] duration-300 cursor-pointer hover:bg-[#9DFBFA] items-center gap-3">
                                    <img src={link[1]} alt="" />
                                    <p className="font-bold ">{link[0]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="text-[#9DFBFA] pl-2 mb-2 font-semibold">More</p>
                        <div className="flex flex-col gap-1">
                            {links2.map((link, key) => (
                                <div key={key} className="flex p-2 rounded-xl text-white hover:text-[#22577A] duration-300 cursor-pointer hover:bg-[#9DFBFA] items-center gap-3">
                                    <img src={link[1]} alt="" />
                                    <p className="font-bold ">{link[0]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    {/* <LinkA /> */}
                    {/* <LinkB /> */}
                    <LinkC />
                </div>
            </div>
        </div>

    )
}
