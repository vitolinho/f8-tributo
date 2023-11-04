import Navbar from "@/components/navbar/navbar"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="w-full h-screen flex items-end">
        <Image
          alt="hero"
          src={"/1.jpg"}
          fill
          objectFit="cover"
          className="z-0 full h-screen"
        />
        <div className="w-full flex justify-center items-center px-8 py-6 z-20 mix-blend-difference lg:pr-[1rem] lg:py-[5.75rem] lg:justify-end">
          <div className="heading-3 text-white mix-blend-difference lg:heading-1">f8 tributo</div>
        </div>
      </div>
      <div className="h-screen flex flex-col gap-y-[3.75rem] px-8 py-[8.75rem] lg:pl-[3.75rem] lg:pr-[1.5rem]">
        <p className="heading-3 text-neutral-3 lg:heading-1">specs</p>
        <div className="flex flex-col gap-y-[3.75rem] lg:flex-row-reverse lg:justify-between lg:items-center">
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <p className="heading-4 text-primary lg:heading-2">v8 turbo</p>
              <p className="heading-6 text-neutral-2 lg:heading-5">moteur</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="heading-4 text-primary lg:heading-2">720 cv</p>
              <p className="heading-6 text-neutral-2 lg:heading-5">puissance maximale</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="heading-4 text-primary lg:heading-2">2.9 sec</p>
              <p className="heading-6 text-neutral-2 lg:heading-5">0 à 100 km/h</p>
            </div>
          </div>
          <Image
            alt="engine"
            src={"/2.jpg"}
            width={376}
            height={353}
            className="block lg:hidden"
          />
          <Image
            alt="engine"
            src={"/2.jpg"}
            width={558}
            height={523}
            className="hidden lg:block"
          />
        </div>
      </div>
    </>
  )
}
