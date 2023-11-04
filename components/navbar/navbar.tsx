"use client"

import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen z-40 mix-blend-difference px-9 py-11 lg:px-16">
      <div className="flex flex-row justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={30}
            height={42}
            className="mix-blend-difference"
          />
        </Link>
        <div className="flex gap-x-10">
          <a href="/" className="button text-white mix-blend-difference cursor-pointer">link 01</a>
          <a href="/" className="button text-white mix-blend-difference cursor-pointer">link 02</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar