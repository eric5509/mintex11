"use client";
import { motion } from "framer-motion";
import DisplayPostCards from "@/components/Home/DisplayPostCards";
import Links from "@/components/General/Links";
import Title from "@/components/General/Title";
import { showMainSideBar } from "@/redux/reducers/sidebar";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { useLayoutEffect, useState } from "react";
import { variant } from "@/lib/framer";
import RightSidebar from "../Layout/RightSidebarA";
import RightSidebarA from "../Layout/RightSidebarA";

export default function Base() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    dispatch(showMainSideBar());
  }, [dispatch]);

  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className="h-full gap-3 "
    >
      <div className="h-full grid gap-3 grid-cols-1 xl:grid-cols-[1fr_300px] overflow-y-auto">
        <div
          className={`border-2 p-2.5 rounded-2xl border-purplee overflow-y-auto min-h-full`}
        >
          <div className="overflow-y-auto h-full  rounded-lg">
            <div className="flex flex-col gap-7 md:flex-row mb-4">
              <Title title="Tokens" paddingLeft="5px" height="50px" />
              <Links
                active={active}
                setActive={setActive}
                radius="5px"
                data={["Trending", "Following", "New Projects"]}
                fontSize="12px"
                height="50px"
              />
            </div>
            <div
              className={`rounded-2xl min-h-full p-3 ${
                darkmode ? "bg-[#272727] " : "bg-gray-100"
              } duration-500 transition-colors`}
            >
              <DisplayPostCards />
            </div>
          </div>
        </div>
        <div className="border-2 hidden xl:block rounded-2xl overflow-y-auto p-2.5 border-purplee">
          <div className="rounded-lg h-full overflow-y-auto ">
            <RightSidebarA />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
