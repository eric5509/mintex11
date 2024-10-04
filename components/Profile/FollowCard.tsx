"use client";
import { useAppSelector } from "@/redux/store/hook";
import Button from "../General/Button";
import Image from "next/image";

export default function FollowCard() {
  const darkmode = useAppSelector((store) => store.darkmode.value);

  return (
    <div
      className={` ${
        darkmode ? "bg-[#272727]" : "bg-transparent"
      } duration-500 rounded-2xl p-3`}
    >
      <div
        className={` p-3 rounded-2xl border-2 border-[#8996A9] ${
          darkmode ? "bg-[#323434]" : "bg-gray-50"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src="/new1.png" className="" alt="" />
            <div className="flex gap-3  text-13 2xl:text-sm items-center">
              <p className="font-semibold text-prim ml-2 mr-1">UGnxf</p>
              <div className="flex items-center gap-2 py-1 px-2 bg-[#9DFBFA0F] rounded-full">
                <span
                  className={`${
                    darkmode ? "text-[#5090A0]" : "text-[#EBEBEB]"
                  }`}
                >
                  UGnxfddd847..Uv-ld
                </span>
                <img src="copy.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-6">
            <div className="h-1 w-32 border-prim border-b-2 border-dashed hidden 2xl:flex"></div>
            <Button title="Follow" paddingX="30px" />
          </div>
        </div>
      </div>
    </div>
  );
}
