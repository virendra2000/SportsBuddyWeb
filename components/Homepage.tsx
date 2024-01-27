"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
const Homepage = () => {
    return (
        <>
            <header className="h-auto w-full bg-slate-100 dark:bg-slate-800 flex flex-col  md:flex-row items-center justify-center md:justify-between">
                <div className="header-container w-full flex flex-col-reverse md:flex-row items-center justify-center">
                    <div className="p-2 head-title w-full md:w-[40%] flex flex-col items-center md:items-start justify-center md:justify-start">
                        <h2 className="p-2 text-xl text-center md:text-left uppercase font-bold text-green-500">Welcome to SportsBuddy</h2>
                        <h1 className="p-2 text-4xl text-center md:text-left font-bold text-black dark:text-white">Your Ultimate Sports Matching Platform</h1>
                        <p className="p-2 text-md text-justify text-gray-500 font-bold dark:text-gray-400">Discover the joy of sports like never before with Sports Buddy, the worlds largest sports matching site. Whether you are a sports enthusiast or a newbie looking to dip your toes into a new sport, we have got you covered. Start your journey today and find your perfect sports buddy!</p>

                        <Button 
                        type="button"
                        title="Get Started"
                        icon="/Rocketflying.svg"
                        variant="m-2 px-2 py-2 w-[50%] rounded-full border-0 font-bold bg-black dark:bg-black text-white cursor-pointer dark:invert dark:hover:bg-black dark:hover:text-white shadow-md hover:shadow-black dark:hover:shadow-black"/>
                    </div>
                    <div className="illustration p-10 md:w-[50%] flex items-center justify-center rounded-full">
                        <Image src="/illustrate1.svg"
                        alt="SportsBuddy Logo"
                        width={400}
                        height={400} className="p-2 bg-slate-400 dark:bg-transparent rounded-full dark:rounded-none"/>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Homepage