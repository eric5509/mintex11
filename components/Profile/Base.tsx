'use client'
import { motion } from 'framer-motion'
import { useLayoutEffect, useState } from "react";
import Button from "../General/Button";
import Links from "../General/Links";
import Title from "../General/Title";
import FollowCard from "./FollowCard";
import FollowersTable from "./FollowersTable";
import FollowingTable from "./FollowingTable";
import TokenCreatedTable from "./TokenCreatedTable";
import TokenHeldTable from "./TokenHeldTable";
import { variant } from '@/lib/framer';
import { useAppDispatch } from '@/redux/store/hook';
import { showMainSideBar } from '@/redux/reducers/sidebar';

export default function Base() {
    const [active, setActive] = useState(0)
    const dispatch = useAppDispatch()
    useLayoutEffect(() => {
        dispatch(showMainSideBar())
    }, [])

    return (
        <motion.div variants={variant} animate="animate" initial='initial' className="border-2 rounded-2xl border-[#862078]">
            <Title title="Token" height="50px" parentPadding="10px" marginBottom="5px" paddingLeft="10px" />
            <FollowCard />
            <Title title="Details" height="50px" parentPadding="10px" marginTop="5px" paddingLeft="10px" />
            <div className="bg-[#272727] p-4 rounded-t-3xl rounded-b-2xl mt-[5px]">
                <Links fontSize="13px" data={['Token Held', 'Token Created', 'Followers', 'Following']} noRadius={true} active={active} setActive={setActive} />
                <div className="relative">
                    <motion.div
                        animate={{ opacity: active === 0 ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className={`${active != 0 && 'hidden'} h-60 overflow-y-auto`}>
                        <TokenHeldTable />
                    </motion.div>
                    <motion.div
                        animate={{ opacity: active === 1 ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className={`${active != 1 && 'hidden'} h-60 overflow-y-auto`}>
                        <TokenCreatedTable />
                    </motion.div>
                    <motion.div
                        animate={{ opacity: active === 2 ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className={`${active != 2 && 'hidden'} h-60 overflow-y-auto`}>
                        <FollowersTable />
                    </motion.div>
                    <motion.div
                        animate={{ opacity: active === 3 ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className={`${active != 3 && 'hidden'} h-60 overflow-y-auto`}>
                        <FollowingTable />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
