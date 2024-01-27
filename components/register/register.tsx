"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "../Button"
const Register = () => {
    return (
        <>
            <section className="h-[100vh] md:h-auto p-5 w-full bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center">
                <div className="login-container flex flex-col md:flex-row items-center justify-center w-full">
                    <div className="login-form w-full md:w-[35%] shadow-lg shadow-black rounded-md flex flex-col items-center justify-center">
                        <h1 className="p-5 text-green-500 dark:text-white font-bold text-3xl uppercase">REGISTER</h1>

                        <form className="w-full p-5 flex flex-col items-center justify-center">
                            <div className="field1 p-2 w-full">
                                <input type="text" name="fname" id="t1" placeholder="Full Name" className="py-2 px-4 outline-none font-bold w-full rounded-full bg-transparent border-2 border-green-500 dark:border-white text-green-500 dark:text-white placeholder:text-green-500 dark:placeholder:text-white" required/>
                            </div>
                            <div className="field1 p-2 w-full">
                                <input type="text" name="emailid" id="t2" placeholder="Email Address" className="py-2 px-4 outline-none font-bold w-full rounded-full bg-transparent border-2 border-green-500 dark:border-white text-green-500 dark:text-white placeholder:text-green-500 dark:placeholder:text-white" required/>
                            </div>
                            <div className="field1 p-2 w-full">
                                <input type="text" name="mobilenum" id="t3" placeholder="Mobile Number" className="py-2 px-4 outline-none font-bold w-full rounded-full bg-transparent border-2 border-green-500 dark:border-white text-green-500 dark:text-white placeholder:text-green-500 dark:placeholder:text-white" required/>
                            </div>
                            <div className="field1 p-2 w-full">
                                <input type="text" list="genderlist" name="gender" id="t4" placeholder="Gender" className="py-2 px-4 outline-none font-bold w-full rounded-full bg-transparent border-2 border-green-500 dark:border-white text-green-500 dark:text-white placeholder:text-green-500 dark:placeholder:text-white" required/>
                                <datalist id="genderlist">
                                    <option value="Male"/>
                                    <option value="Female"/>
                                    <option value="Prefer Not to Say"/>
                                </datalist>
                            </div>
                            <div className="field1 p-2 w-full">
                                <input type="text" name="username" id="t5" placeholder="Username" className="py-2 px-4 outline-none font-bold w-full rounded-full bg-transparent border-2 border-green-500 dark:border-white text-green-500 dark:text-white placeholder:text-green-500 dark:placeholder:text-white" required/>
                            </div>
                            <div className="field2 p-2 w-full">
                                <input type="password" name="password" id="t5" placeholder="Password" className="custom-password-field py-2 px-4 outline-none font-bold w-full rounded-full bg-transparent border-2 border-green-500 dark:border-white text-green-500 dark:text-white placeholder:text-green-500 dark:placeholder:text-white" required/>
                            </div>
                            <div className="field2 p-3 w-full">
                                <Button 
                                type="submit"
                                title="Register"
                                variant="px-2 py-2 w-full rounded-full border-0 font-bold bg-green-500 dark:bg-white dark:text-black text-white cursor-pointer dark:hover:bg-black dark:hover:text-white shadow-md hover:shadow-green-50 dark:hover:shadow-black"/>
                            </div>
                            <span className="p-3 text-center text-black dark:text-white font-bold">Already have an Account ? <Link href="/" className="text-green-500 font-bold">
                                    Sign In
                                </Link>
                            </span>
                        </form>
                    </div>
                    <div className="hidden md:block login-illustrator w-[40%]">
                        <Image src="/illustrate-register.svg"
                        alt="login-illustator"
                        width={500}
                        height={500}/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register