"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between dark:bg-slate-800 dark:text-white px-6 lg:px-20 3xl:px-0 relative z-30 py-6 shadow-lg shadow-blue-300 border-t-2 border-green-500">
      <div className="p-5 logoimg flex items-center">
        <Link href="/">
          <Image src="/logo.png"
          alt="SportsBuddy Logo"
          width={180}
          height={180}/>
        </Link>
      </div>
      <div className="footer_link1">
        <span className="px-2 py-4 border-b-2 border-green-500 dark:border-white font-bold text-green-500">Learn More</span>
        <ul className="py-4 flex flex-col">
          <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 font-bold">
            About
          </Link>
          <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 font-bold">
            Explore
          </Link>
          <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 font-bold">
            Event
          </Link>
          <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 font-bold">
            Services
          </Link>
          <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 font-bold">
            Contact Us
          </Link>
        </ul>
      </div>
      <div className="footer_link2">
        <span className="px-2 py-4 border-b-2 border-green-500 dark:border-white font-bold text-green-500">Our Community</span>
        <ul className="py-4 flex flex-col">
          <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 font-bold">
            Privacy Policy
          </Link>
          <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 font-bold">
            Terms & Condition
          </Link>
          <Link href='/' className="px-2 py-4 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 font-bold">
            Event Conditions
          </Link>
        </ul>
      </div>
      <div className="footer_container1 flex flex-col justify-center">
        <span className="px-2 py-4 border-b-2 border-green-500 dark:border-white font-bold text-green-500">Subscribe to Newsletter</span>
        <form className="py-6" name="f1">
          <div className="newsletter-form flex flex-row rounded-full">
              <input type="email" name="emailid" placeholder="Email Address" className="font-bold px-4 py-2 outline-none bg-transparent border-2 border-green-500 dark:border-white placeholder:text-green-500 dark:placeholder:text-white text-green-500 dark:text-white rounded-l-full"/>
              <Button 
                  type="button"
                  title=""
                  icon="/arrow2.gif"
                  variant="border-0 rounded-r-full bg-black dark:bg-white w-auto"
              />
          </div>
        </form>
        <div className="flex items-center justify-between">
          <Link href='https://www.linkedin.com/in/virendrakalwar/'>
            <div className="icon1 p-2 bg-white border-8 border-green-500 rounded-full">
              <Image src="/linkedin.gif"
              alt="linkedin"
              width={60}
              height={60}/>
            </div>
          </Link>
          <Link href='https://www.instagram.com/codecipher_virendra/'>
            <div className="icon1 p-2 bg-white border-8 border-green-500 rounded-full">
              <Image src="/instagram.gif"
              alt="instagram"
              width={60}
              height={60}/>
            </div>
          </Link>
          <Link href='https://wa.me/message/CGOH3Q2CTWMXE1'>
            <div className="icon1 p-2 bg-white border-8 border-green-500 rounded-full">
              <Image src="/whatsapp.gif"
              alt="whatsapp"
              width={60}
              height={60}/>
            </div>
          </Link>
        </div>
        <span className="mt-4 px-2 py-4 border-b-2 border-green-500 dark:border-white font-bold text-green-500">Contact Us</span>

        <div className="contact-details p-2">
            <span><b>Admin Officer</b> <br/> +91 8108652773</span><br/>
            <span><b>Email Officer</b> <br/> admin@codecrafters.infinityfreeapp.com</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer