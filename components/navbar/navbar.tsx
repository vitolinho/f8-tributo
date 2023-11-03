"use client"

import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-9 py-11 top-0 w-full lg:px-16">
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
  )
}

export default Navbar