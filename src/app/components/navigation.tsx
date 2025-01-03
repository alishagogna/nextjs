"use client";
//usePathname works only for client component so we need to mention use client directive, else error is thrown
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs'

const Navigation = () => {
    const pathname = usePathname();
    'mr-4 text-blue-500'
    return (
        <nav className='flex justify-center items-center p-4'>
            <Link href='/' className={`${pathname == '/' ? 'font-bold mr-4' : 'mr-4 text-blue-500'}`}>Home</Link>
            <Link href='/about' className={`${pathname == '/about' ? 'font-bold mr-4' : 'mr-4 text-blue-500'}`}>About</Link>
            <Link href='/products/1' className={`${pathname == '/products/1' ? 'font-bold mr-4' : 'mr-4 text-blue-500'}`}>Product 1</Link>
            <SignedOut >
                <SignInButton mode='modal' />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}

export default Navigation
