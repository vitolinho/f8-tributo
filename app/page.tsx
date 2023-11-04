import Navbar from "@/components/navbar/navbar"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="w-screen h-screen flex items-end">
        <Image
          alt="hero"
          src={"/1.jpg"}
          fill
          objectFit="cover"
          className="z-0 w-screen h-screen"
        />
        <div className="w-full flex justify-center items-center px-8 py-6 z-20 mix-blend-difference  lg:px-11 lg:py-[5.75rem] lg:justify-end">
          <div className="heading-3 text-white mix-blend-difference lg:heading-1">f8 tributo</div>
        </div>
      </div>
    </>
  )
}
