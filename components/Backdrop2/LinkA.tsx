import { FaTimes } from "react-icons/fa";
import Input from "../General/Input";
import Textarea from "../General/Textarea";

export default function LinkA() {
  return (
    <div className="flex flex-col justify-between gap-5 h-full">
      <div className="flex items-center justify-between">
        <p></p>
        <p className="text-[#9DFBFA] text-sm">Token Details</p>
        <div className="h-7 w-7 grid cursor-pointer place-content-center rounded-full bg-[#475861]">
          <FaTimes className="text-[#9DFBFA]" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input label="Token Name" placeholder="Enter token name" />
        <Input label="Symbol" placeholder="Enter token symbol" />
      </div>
      <div className="">
        <Textarea label="Description" height="70px" placeholder="Enter token description" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input label="Initial Supply" placeholder="Enter initial supply" />
        <Input label="Total Supply" placeholder="Enter total supply" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <Input label="Initial Supply" placeholder="Enter initial supply" />
          </div>
          <div className="h-11 w-11 rounded-full border-2 grid place-content-center">
            <img src="download.png" alt="" />
          </div>
        </div>
        <div className="">
          <p className="text-white mb-2 ">Attach Social Links</p>
          <div className="flex gap-2">
            <div className="h-10 w-14 bg-[#323434] rounded-md grid place-content-center">
              <img src="te.png" alt="" />
            </div>
            <div className="h-10 w-14 bg-[#323434] rounded-md grid place-content-center">
              <img src="download.png" alt="" />
            </div>
            <div className="h-10 w-14 bg-[#323434] rounded-md grid place-content-center">
              <img src="download.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <button className="text-secondary font-semibold px-10 py-3 rounded-lg bg-prim">
          Continue
        </button>
        <p className="font-semibold text-prim">0.2 TON is charged for deployment</p>
      </div>
    </div>
  )
}
