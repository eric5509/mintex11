'use client'
import { useAppSelector } from "@/redux/store/hook";
import Body from "./Body";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

type Props = {
    children: React.ReactNode
}

export default function Main({ children }: Props) {
    const showSidebar = useAppSelector(store => store.sidebar.show)
    const type = useAppSelector(store => store.sidebar.type)
    return (
        <div className="h-[calc(100vh-80px)] overflow-y-auto p-3">
            <div className={`h-full overflow-y-auto grid ${type !== "" ? "grid-cols-[310px_1fr_346px] " : "grid-cols-[310px_1fr] "} gap-3`}>
                <LeftSidebar />
                <Body children={children} />
                <RightSidebar />
            </div>
        </div>)
}
