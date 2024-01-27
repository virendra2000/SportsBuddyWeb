"use client"
import Image from "next/image"
import Button from "./Button"
import Link from "next/link"
const Maintainence = () => {
    return (
        <>
            <section className="p-5 h-auto bg-slate-100 dark:bg-slate-800 w-full flex flex-col items-center justify-center text-center">
                <Image src="/illustrate_construction.svg"
                alt="SportsBuddy Logo"
                width={500}
                height={500} className="p-10"/>

                <h1 className="text-3xl font-bold text-green-500">SportsBuddy is Under Maintainence !!!</h1>
                <p className="p-3 font-bold dark:text-white">We are working hard to bring you an Amazing Feature. Stay tuned!</p>
                <Link href="/" className="w-full flex flex-col items-center justify-center">
                    <Button 
                    type="button"
                    title="Go to Homepage"
                    icon="/home.gif"
                    variant="m-2 px-2 py-2 w-[20%] rounded-full border-0 font-bold bg-black dark:bg-white text-white dark:text-black cursor-pointer dark:hover:bg-black dark:hover:text-white shadow-md hover:shadow-black dark:hover:shadow-black"/>
                </Link>
            </section>
        </>
    )
}
export default Maintainence