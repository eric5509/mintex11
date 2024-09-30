'use client'
import DisplayActionCards from "@/components/ScreenA/DisplayActionCards";
import DisplayPostCards from "@/components/ScreenA/DisplayPostCards";
import KingOfCoin from "@/components/ScreenA/KingOfCoin";
import Links from "@/components/ScreenA/Links";
import Title from "@/components/Title";
import { showMainSideBar } from "@/redux/reducers/sidebar";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { useEffect, useLayoutEffect } from "react";

export default function Base() {
  const darkmode = useAppSelector(store => store.darkmode.value)
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    dispatch(showMainSideBar())
  }, [dispatch])
  
  return (
    <div className=" h-full gap-3 ">
      <div className="h-full overflow-y-auto">
        <div className={`border-2 rounded-xl min-h-full ${darkmode ? "border-[#862078]" : ""}`}>
          <div className="p-2 flex mb-4">
            <Title title="Tokens" paddingLeft="5px" height="55px" />
            <Links data={['Trending', 'Following', 'New Projects']} fontSize="13px" height="55px" />
          </div>
          <div className={`rounded-2xl h-full p-3 ${darkmode ? "bg-[#272727] " : "bg-gray-100"} duration-500 transition-colors`}>
            <DisplayPostCards />
          </div>
        </div>
      </div>

    </div>
  )
}
