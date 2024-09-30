'use client'
import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useAppDispatch } from '@/redux/store/hook'
import { showMainSideBar, showMarketSideBar } from '@/redux/reducers/sidebar'
import SpaceMan from './SpaceMan'
import Title from '../Title'
import Chart from './Chart'
import Links from '../ScreenA/Links'
import Details from './Details'

type Props = {
  tableHeader: string[]
  data: (string | number)[][]
}

export default function Base() {
  // const tableHeaders = ['S/N', 'Account', 'Transaction type', 'Date', 'Amount(TON)', 'Amount(SPACE)']
  // const data = [
  //   ['FUasdf', 'Buy', '25min', 4, 200],
  //   ['GDaxds', 'Sell', '1fr', 6.50, 670],
  //   ['APpoee', 'Buy', '17hr', 0.80, 52],
  //   ['ZXswqq', 'Sell', '22hr', 10, 1420],
  // ]
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    dispatch(showMainSideBar())
  }, [])
  return (
    <div className="">
      <Title paddingLeft='5px' title='Token' height='50px' parentPadding='10px' marginBottom='10px' />
      <SpaceMan />
      <Title paddingLeft='5px' title='Charts' height='50px' parentPadding='10px' marginBottom='10px' />
      <div className="rounded-2xl rounded-b-none relative bg-[#272727] p-3">
        <Chart />
        <Links data={['Details', 'Threads', 'Transactions', 'Holders']} fontSize='13px' noRadius={true} />
        <div className="">
          <Details />
        </div>
      </div>
    </div>
  )
}
