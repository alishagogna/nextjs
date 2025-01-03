"use client";
//usePathname works only for client component so we need to mention use client directive, else error is thrown

import React from 'react'
import { useRouter } from 'next/navigation'

const About = () => {
    const router = useRouter()
    return (
        <div>
            About Component
            <div>
                <button onClick={() => router.push('/')} className='bg-blue-500 text-white p-2 rounded-md'>Go Home</button>
            </div>
        </div>
    )
}

export default About
