"use client";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import Button from "../General/Button";
import Links from "../General/Links";
import Title from "../General/Title";
import FollowCard from "./FollowCard";
import FollowersTable from "./FollowersTable";
import FollowingTable from "./FollowingTable";
import TokenCreatedTable from "./TokenCreatedTable";
import TokenHeldTable from "./TokenHeldTable";
import { variant } from "@/lib/framer";
import { useAppDispatch } from "@/redux/store/hook";
import { showMainSideBar } from "@/redux/reducers/sidebar";
import RightSidebarA from "../Layout/RightSidebarA";

export default function Base() {
  const [active, setActive] = useState(0);
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(showMainSideBar());
  }, []);

  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className="grid grid-cols-1 xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_346px] gap-2 h-full rounded-2xl "
    >
      <div className="border-2 p-2 overflow-y-auto h-full rounded-2xl border-purplee">
        <div className="rounded-lg overflow-y-auto h-full">
          <Title
            title="Token"
            height="45px"
            parentPadding="10px"
            marginBottom="5px"
            paddingLeft="10px"
          />
          <FollowCard />
          <Title
            title="Details"
            height="45px"
            parentPadding="10px"
            marginTop="5px"
            paddingLeft="10px"
          />
          <div className="bg-[#272727] p-2.5 rounded-t-2xl rounded-b-2xl mt-[5px]">
            <Links
              data={["Token Held", "Token Created", "Followers", "Following"]}
              active={active}
              radius="16px"
              setActive={setActive}
            />
            <div className="relative">
              <motion.div
                animate={{ opacity: active === 0 ? 1 : 0 }}
                transition={{ duration: 1 }}
                className={`${active != 0 && "hidden"} h-60 overflow-y-auto`}
              >
                <TokenHeldTable />
              </motion.div>
              <motion.div
                animate={{ opacity: active === 1 ? 1 : 0 }}
                transition={{ duration: 1 }}
                className={`${active != 1 && "hidden"} h-60 overflow-y-auto`}
              >
                <TokenCreatedTable />
              </motion.div>
              <motion.div
                animate={{ opacity: active === 2 ? 1 : 0 }}
                transition={{ duration: 1 }}
                className={`${active != 2 && "hidden"} h-60 overflow-y-auto`}
              >
                <FollowersTable />
              </motion.div>
              <motion.div
                animate={{ opacity: active === 3 ? 1 : 0 }}
                transition={{ duration: 1 }}
                className={`${active != 3 && "hidden"} h-60 overflow-y-auto`}
              >
                <FollowingTable />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 hidden xl:block p-2.5 overflow-y-auto h-full border-purplee rounded-2xl">
        <div className="h-full rounded-lg overflow-y-auto">
          <RightSidebarA />
        </div>
      </div>
    </motion.div>
  );
}
