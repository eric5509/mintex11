'use client '
import { useAppSelector } from "@/redux/store/hook";
import Screen1A from "./Screen1A";
import Screen2A from "./Screen2A";
import Screen3A from "./Screen3A";
import Screen4A from "./Screen4A";
import SidebarA from "./SidebarA";

export default function BackdropA() {
    const backdrop = useAppSelector(store => store.backdrop.value)
    return (
        <div className={`fixed w-full z-[500] bg-black/20 duration-300 overflow-hidden backdrop-blur-xl h-[calc(100vh-80px)] top-[80px] left-0 grid place-content-center ${backdrop === 1 ? "opacity-100 visible": "opacity-0 invisible" }`}>
            <div className="flex h-[600px] rounded-2xl bg-[#2D383E]">
                <div className="border-r-2 flex flex-col rounded-2xl overflow-hidden rounded-r-none w-[290px]">
                    <div className="flex h-14 px-5 justify-between items-center text-prim">
                        <img src="logo2.png" alt="" />
                        <p>Connect Wallet</p>
                    </div>
                    <div className="flex flex-1">
                        <SidebarA />
                    </div>
                </div>
                <div className="w-[570px] h-full rounded-2xl flex flex-col">
                    <Screen1A />
                    {/* <Screen2A />
                    <Screen3A />
                    <Screen4A /> */}
                </div>
            </div>
        </div>
    )
}
