"use client"
import { useEffect } from "react"

export default function Error({error}: {error: Error}) {
    useEffect(() => {

    },[error])

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-2xl text-red-500">Error Fetching User Data</div>
        </div>
    )
}