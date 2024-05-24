'use client'
import React from 'react'

import { Circles } from  'react-loader-spinner'

export function Loading() {
    return (
        <div className="absolute h-[100vh] w-[100vw] bg-primary-900 z-3 flex justify-center items-center">
            <Circles
                heigth="100"
                width="100"
                color='#1CF8BD'
                arialLabel='loading'
            />
      </div>
    )
}

