'use client'
import { useAppSelector } from "@/redux/store/hook"
import Link from "next/link"
import LinkA from "./LinkA"
import LinkB from "./LinkB"

export default function Backdrop3() {

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
                <div className="flex flex-col justify-between border-r-2 p-4">
                    <div className="">

                        <div className="flex justify-between">
                            <img src="smallLogo.png" className="h-[18px]" alt="" />
                            <p className="text-[#9DFBFA] font-semibold">Connect Wallet</p>
                        </div>
                        <p className="text-[#ECEDEE] mt-6">Complete the details and link your wallet to generate a new token</p>
                        <div className="flex items-center gap-2 mt-4">
                            <img src="check.png" alt="" />
                            <p className="text-[#9DFBFA]">No long procedure</p>
                        </div>
                    </div>
                    <div className="grid place-content-center pt-10">
                        <img src="cuate.png" alt="" />
                    </div>
                    <div className="flex text-[#9DFBFA] gap-6 text-center">
                        <div className="flex items-center justify-center gap-4 flex-col">
                            <img src="check2.png" alt="" />
                            <p className="text-xs">Ensure compliance</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 flex-col">
                            <img src="flash.png" alt="" />
                            <p className="text-xs">Unlimited creation</p>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    {/* <LinkA /> */}
                    <LinkB />
                </div>
            </div>
        </div>

    )
}
