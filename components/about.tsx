"use client"
import Image from "next/image"
import Link from "next/link"
const About = () => {
    return (
        <>
            <section className="h-auto dark:bg-slate-800 flex flex-col items-center justify-center md:justify-between" id="about">
                <div className="p-5 about-container w-full flex flex-col md:flex-row items-center justify-center">
                    <div className="info w-auto md:w-[40%] flex flex-col items-center justify-center">
                        <h1 className="p-2 text-3xl uppercase font-bold text-green-500">About Us</h1>

                        <p className="p-2 text-lg dark:text-white text-justify">Born out of a passion for sports and community, Sports Buddy is a platform dedicated to connecting people through their love of sports. With our cutting-edge technology and extensive sports database, we make it easy for you to find partners, join local games, and even make new acquaintances. Our mission is to create an inclusive and dynamic sports community where everyone feels welcomed, regardless of their skill level.</p>
                    </div>
                    <div className="illustrate w-full md:w-[50%]">
                        <Image src="/illustrate2.svg"
                        alt="SportsBuddy Logo"
                        width={600}
                        height={600} className="p-10"/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About