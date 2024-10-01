'use client'
import { useAppSelector } from '@/redux/store/hook'
import React from 'react'
import RightSidebarContent from './RightSidebarContent'

export default function RightSidebar() {
    const darkmode= useAppSelector(store => store.darkmode.value)
    const type= useAppSelector(store => store.sidebar.type)
    return (
        <div className={`h-full ${type === "" && 'hidden' } hidden xl:block overflow-y-auto ${darkmode ? "bg-[#210716]" : ""}`}>
            <RightSidebarContent />
        </div>
    )
}
