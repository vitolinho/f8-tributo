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
        <div className="w-full flex justify-center items-center px-6 py-6 z-20 mix-blend-difference lg:pr-[1rem] lg:py-[5.75rem] lg:justify-end">
          <div className="heading-3 text-white mix-blend-difference lg:heading-1">f8 tributo</div>
        </div>
      </div>
      <div className="h-screen flex flex-col gap-y-[3.75rem] px-6 mt-[6.25rem] pb-[6.25rem] lg:pl-16 lg:pr-[1.5rem]">
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
      <div className="bg-neutral-3 h-fit flex flex-col gap-y-[3.75rem] px-6 py-[6.25rem] lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-[12.5rem]">
        <div className="flex flex-col gap-y-[3.25rem] lg:w-[35.813rem]">
          <p className="heading-3 text-neutral-0 lg:heading-1">
            lignes pures
          </p>
          <p className="body text-neutral-1 lg:w-[18.75rem]">
            La Ferrari F8 Tributo arbore des lignes d&apos;une élégance exceptionnelle, fusionnant puissance et sophistication pour une esthétique incomparable. Ses courbes sculpturales sont tout simplement sublimes.
          </p>
          <a href="/" className="flex items-center justify-center px-6 py-4 button border bg-transparent button cursor-pointer text-neutral-1 w-full lg:w-[12.5rem]">
            acheter
          </a>
        </div>
        <div className="flex flex-row justify-between lg:gap-x-5">
          <Image
            alt="3rd image"
            src={"/3.jpg"}
            width={145}
            height={109}
            className="block lg:hidden"
          />
          <Image
            alt="4th image"
            src={"/4.jpg"}
            width={145}
            height={109}
            className="block lg:hidden"
          />
          <Image
            alt="3rd image"
            src={"/3.jpg"}
            width={315}
            height={236}
            className="hidden lg:block"
          />
          <Image
            alt="4th image"
            src={"/4.jpg"}
            width={315}
            height={236}
            className="hidden lg:block"
          />
        </div>
      </div>
    </>
  )
}
