'use client'
import { useAppSelector } from "@/redux/store/hook"
import { BsChevronRight } from "react-icons/bs"

type Props = {
    title: string
    amount: number
    user: string
}
export default function ActionCard({ title, amount, user }: Props) {
    const darkmode = useAppSelector(store => store.darkmode.value)
    return (
        <div className="font-semibold">
            {title === "create" && <div className={`h-14 w-full duration-500  transition-colors ${!darkmode ? "bg-[#EDEFF2]": "bg-[#D8FDFD0F]"} text-white flex items-center gap-3 p-3 rounded-xl relative`}>
                <img src="updateIcon.png" alt="" />
                <p className={`text-xs ${darkmode ? "text-white": "text-secondary"}`}><b>{user}</b> created $Space</p>
                <img src="updateAst.png" className="rounded-md" alt="" />
                <BsChevronRight className={`absolute top-1/2 -translate-y-1/2 right-3 ${darkmode? "": "text-gray-600"}`} />
            </div>}
            {title === "sell" && <div className="h-14 w-full bg-[#F23BF614] text-white flex items-center gap-3 p-3 rounded-xl relative">
                <img src="updateIcon.png" alt="" />
                <p className="text-xs text-[#F23BF6]"><b>{user}</b> sold {amount} TON of $Apple</p>
                <img src="apple.png" className="rounded-md" alt="" />
                <BsChevronRight className={`absolute top-1/2 -translate-y-1/2 right-3 ${darkmode? "": "text-gray-600"}`} />
            </div>}
            {title === "buy" && <div className="h-14 w-full bg-[#29cc3933] text-white flex items-center gap-3 p-3 rounded-xl relative">
                <img src="updateIcon.png" alt="" />
                <p className="text-xs text-[#4DB24D]"><b>{user}</b> bought {amount} TON of $Apple</p>
                <img src="apple.png" className="rounded-md" alt="" />
                <BsChevronRight className={`absolute top-1/2 -translate-y-1/2 right-3 ${darkmode? "": "text-gray-600"}`} />
            </div>}



           
        </div>
    )
}
