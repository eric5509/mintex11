'use client'
import { motion } from 'framer-motion'
import DisplayPostCards from "@/components/ScreenA/DisplayPostCards";
import Links from "@/components/General/Links";
import Title from "@/components/General/Title";
import { showMainSideBar } from "@/redux/reducers/sidebar";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { useLayoutEffect, useState } from "react";
import { variant } from '@/lib/framer';

export default function Base() {
  const darkmode = useAppSelector(store => store.darkmode.value)
  const dispatch = useAppDispatch()
  const [active, setActive] = useState(0)

  useLayoutEffect(() => {
    dispatch(showMainSideBar())
  }, [dispatch])

  return (
    <motion.div variants={variant} animate="animate" initial='initial' className=" h-full gap-3 ">
      <div className="h-full overflow-y-auto">
        <div className={`border-2 rounded-2xl min-h-full ${darkmode ? "border-[#862078]" : ""}`}>
          <div className="p-2 flex mb-4">
            <Title title="Tokens" paddingLeft="5px" height="55px" />
            <Links active={active} setActive={setActive} data={['Trending', 'Following', 'New Projects']} fontSize="13px" height="55px" />
          </div>
          <div className={`rounded-2xl h-full p-3 ${darkmode ? "bg-[#272727] " : "bg-gray-100"} duration-500 transition-colors`}>
            <DisplayPostCards />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
