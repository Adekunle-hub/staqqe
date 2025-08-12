import React from 'react'
import { cn } from '@/lib/utils'

const MaxContainer = ({
    children,
    className
}:{
    children: React.ReactNode,
    className?:string
}) => {
  return (
    <div
    className={cn("max-w-[1290px] mx-auto overflow-hidden w-[100vw]", className)}
    >
        {children}

    </div>
  )
}

export default MaxContainer
