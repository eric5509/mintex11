import { FaTimes } from "react-icons/fa";

export default function LinkA() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex justify-between items-center p-4">
        <p></p>
        <p className="text-[#9DFBFA] text-15 font-semibold">Scan with Coinbase</p>
        <div className="h-7 w-7 grid cursor-pointer place-content-center rounded-full bg-[#475861]">
          <FaTimes className="text-[#9DFBFA]" />
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="relative h-full">
          <img src="qrcode.png" className="h-full w-full object-contain absolute top-0 left-0" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between px-10 py-3">
        <p className="text-[#9DFBFA]">Don’t have the Coinbase app?</p>
        <p className="bg-[#475861] text-[#9DFBFA] px-5 py-2 rounded-full font-semibold">GET</p>
      </div>
    </div>
  )
}
