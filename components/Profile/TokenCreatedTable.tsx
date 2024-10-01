export default function TokenCreatedTable() {
    const tableHeaders = ['S/N', 'Token', 'Creator', 'Amount(TON)']
    const data = [
        ['Space Man ($SPACE)', 'You', 4],
        ['Space Man ($SPACE)', 'You', 6.5],
        ['Space Man ($SPACE)', 'You', 0.8],
        ['Space Man ($SPACE)', 'You', 10],
    ]
    return (
        <div className="w-full relative">
            <div className="grid h-12 text-xs bg-[#3C4141] grid-cols-[80px_1.5fr_1fr_1fr_1fr] gap-5">
                {tableHeaders.map((el, index) => (
                    <div className={`h-full flex items-center text-white ${index === 0 && 'pl-6'}`}>{el}</div>
                ))}
            </div>
            <div className="flex flex-col w-full">
                {data.map((ell, key) => (
                    <div className={`grid h-12 border-b-2 relative text-xs border-[#15181A] bg-[#292F32] grid-cols-[80px_1.5fr_1fr_1fr_1fr] gap-5 `}>
                        <span className="absolute top-1/2 -translate-y-1/2 right-3 px-4 py-2 bg-[#475861] rounded-full text-prim">View</span>

                        {[key+1, ...ell].map((elem, keyy) => (
                            <>
                                {keyy === 1 ?
                                    <div className="flex items-center relative gap-2">
                                        <img src="container.png" alt="" />
                                        <div className="h-full flex items-center font-semibold text-white">
                                            {elem}
                                        </div>
                                    </div>
                                    :
                                    <div className={`h-full flex items-center text-white ${keyy === 0 && 'pl-6'}`}>
                                        {elem}
                                    </div>
                                }
                            </>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
