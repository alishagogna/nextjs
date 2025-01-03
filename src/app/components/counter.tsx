"use client";
// if you dont use this above then there's error, You're importing a component that needs `useState`. This React hook only works in a client component
import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Counter {count} times</button>
        </div>
    )
}

