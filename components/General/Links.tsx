"use client";
import { filter } from "@/redux/reducers/sidebarActions";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  data: string[];
  fontSize?: string;
  height?: string;
  paddingInline?: string;
  marginRight?: string;
  marginLeft?: string;
  between?: boolean;
  radius?: string;
  noRadius?: boolean;
  active: number;
  identifier?: string;
  setActive: Dispatch<SetStateAction<number>>;
};

export default function Links({
  data,
  fontSize,
  identifier,
  setActive,
  active,
  paddingInline,
  marginRight,
  radius,
  marginLeft,
  height,
  noRadius,
}: Props) {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const dispatch = useAppDispatch();
  const updateList = async (key: number) => {
    setActive(key);
    if (identifier === "sidebar") {
      dispatch(filter(active));
    }
  };

  return (
    <div
      style={{
        height: `${height}`,
        borderTopLeftRadius: `${radius}`,
        borderTopRightRadius: `${radius}`,
        marginRight: `${marginRight}`,
        marginLeft: `${marginLeft}`,
      }}
      className={`text-15 h-12  relative ${
        !noRadius && "rounded-t-lg"
      } overflow-hidden`}
    >
      <div
        className={` w-fit h-full duration-500 transition-colors flex ${
          darkmode ? "bg-[#323434] " : " bg-black/5"
        }`}
      >
        <div className={` w-fit h-full transition-none flex `}>
          {data.map((el, key) => (
            <p
              key={key}
              onClick={() => updateList(key)}
              style={{
                fontSize: `${fontSize}`,
                paddingInline: `${paddingInline}`,
              }}
              className={`px-5  border-b-2 cursor-pointer text-xs 2xl:text-13 h-full w-fit duration-500 transition-colors place-content-center ${
                active === key
                  ? `${
                      darkmode
                        ? "border-[#9DFBFA] text-[#9DFBFA]"
                        : "border-[#9DFBFA] text-gray-700"
                    }`
                  : `${
                      darkmode
                        ? "text-[#7D8FB3] border-transparent"
                        : "text-[#7D8FB3]"
                    } bg-transparent border-transparent`
              } `}
            >
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
