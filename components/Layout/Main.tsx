'use client'
import { motion } from 'framer-motion'
import { useAppSelector } from "@/redux/store/hook";
import Body from "./Body";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { variant } from '@/lib/framer';

type Props = {
    children: React.ReactNode
}

export default function Main({ children }: Props) {
    const showSidebar = useAppSelector(store => store.sidebar.show)
    const type = useAppSelector(store => store.sidebar.type)
    return (
        <motion.div variants={variant} initial="initial" animate="animate" className="h-[calc(100vh-80px)] p-3 pb-0 overflow-y-auto">
            <div className={`h-full overflow-y-auto grid ${type !== "" ? "grid-cols-1fr lg:grid-cols-[310px_1fr] xl:grid-cols-[310px_1fr_346px] " : "grid-cols-1 lg:grid-cols-[310px_1fr] "} gap-3`}>
                <LeftSidebar />
                <Body children={children} />
                <RightSidebar />
            </div>
        </motion.div>)
}
