"use client"
import Image from "next/image"
const Services = () => {
    return (
        <>
            <section className="p-2 h-auto dark:bg-slate-800 flex flex-col items-center justify-center md:justify-between w-[100%]" id="services">
                <h1 className="p-2 text-3xl uppercase text-center font-bold text-green-500 w-full">Services</h1>
                <div className="p-3 md:p-5 services-container flex flex-col md:flex-row md:items-center md:justify-between w-[100%]">
                    <div className="service-box w-full md:w-[23%] rounded-md md:p-5 shadow-lg shadow-black mt-[10px] md:mt-[0px]">
                        <Image src="/connections.gif"
                        alt="SportsBuddy Logo"
                        width={70}
                        height={70}
                        className="p-2"/>
                        <h1 className="px-4 py-2 text-lg font-bold text-white">Sports Matching</h1>
                        <p className="px-2 py-2 text-white text-justify">Find your perfect match with our advanced matching system. Choose from over N sports and we will connect you with like-minded sports enthusiasts based on your preferences, location, and skill level.</p>
                    </div>
                    <div className="service-box w-full md:w-[23%] rounded-md p-5 shadow-lg shadow-black mt-[10px] md:mt-[0px]">
                        <Image src="/games.gif"
                        alt="SportsBuddy Logo"
                        width={80}
                        height={80}
                        className="p-2"/>
                        <h1 className="p-3 text-lg font-bold text-white">Local Games</h1>
                        <p className="px-2 py-2 text-white text-justify">Discover local sports events around you and join the fun. Our platform is perfect for those looking to try something new or travelers wanting to meet locals through sports.</p>
                    </div>
                    <div className="service-box w-full md:w-[23%] rounded-md p-5 shadow-lg shadow-black mt-[10px] md:mt-[0px]">
                        <Image src="/communities.gif"
                        alt="SportsBuddy Logo"
                        width={60}
                        height={60}/>
                        <h1 className="text-lg font-bold text-white">Community Building</h1>
                        <p className="px-2 py-2 text-white text-justify">Join our community of sports lovers. Make new friends, learn from each other, and build lasting relationships. With Sports Buddy, you are not just joining a platform, you are becoming part of a global sports family.</p>
                    </div>
                    <div className="service-box w-full md:w-[23%] rounded-md p-5 shadow-lg shadow-black mt-[10px] md:mt-[0px]">
                        <Image src="/ui.gif"
                        alt="SportsBuddy Logo"
                        width={80}
                        height={80}
                        className="p-2"/>
                        <h1 className="py-2 text-lg font-bold text-white">User-Friendly Interface</h1>
                        <p className="px-2 py-3 text-white text-justify">Experience sports matching like never before with our easy-to-use platform. Navigate through our features with ease, find matches, and connect — all in a few clicks.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services