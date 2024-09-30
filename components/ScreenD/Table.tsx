type Props = {
  tableHeader: string[]
  data: (string | number)[][]
}

export default function Table({tableHeader, data}: Props) {
  return (
    <div className="w-full relative">
      <table className='text-white w-full table-auto border-collapse'>
        <thead>
          <tr className='h-12 w-full bg-[#3C4141]'>
            {tableHeader?.map((el) => (
              <th className=' px-8 font-normal text-left'>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody className=''>
          {data?.map((el, key) => (
            <tr className='border-b-2  border-[#15181A] bg-[#292F32]'>
              {[key+1, ...el].map((ell, keyy) => (
                <>
                  {keyy !== 1 ? <td className='px-8 h-12 text-left'>{ell}</td>
                    :
                    <td className='px-8 text-left h-12 flex items-center gap-2'>
                      <img src="logo1.png" alt="" />
                      <span className='font-semibold'>{ell}</span>
                    </td>
                  }
                </>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
