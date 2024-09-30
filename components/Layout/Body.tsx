import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Body({ children }: Props) {
    return (
        <div className="h-full overflow-y-auto">
            {children}
        </div>)
}
