export default function Base() {
    return (
        <div className="grid grid-cols-[1fr_346px] h-full overflow-y-auto gap-5">
            <div className="overflow-y-auto">
                <div className="border-2 p-3 rounded-2xl h-full">
                    <div className={`text-15 flex h-[54px] pl-5 text-white relative rounded-md overflow-hidden`}>
                        <div className="h-6 w-6 -top-[14px] rotate-45 -left-[14px] absolute bg-emerald-500"></div>
                        <div className="h-6 w-6 -bottom-[14px] rotate-45 -left-[14px] absolute bg-white"></div>
                        <p className="place-content-center mr-8 text-xl font-semibold">Token</p>
                    </div>
                </div>
            </div>
            <div className="h-full border-2 rounded-2xl"></div>
        </div>
    )
}
