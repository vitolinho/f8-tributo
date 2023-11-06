import Navbar from "@/components/navbar/navbar"
import SmoothScroll from "@/components/smoothScroll/smoothScroll"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <SmoothScroll/>
      <Navbar/>
      <div className="w-full h-screen flex items-end">
        <Image
          alt="hero"
          src={"/1.jpg"}
          fill
          objectFit="cover"
          className="z-0 full h-screen"
        />
        <div className="w-full mix-blend-difference py-[6.25rem] px-6 lg:flex lg:justify-end">
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
      <div className="h-fit flex flex-col gap-y-[3.75rem] px-6 py-[6.25rem] lg:flex-row lg:justify-between lg:items-center lg:px-16">
        <div className="flex flex-col gap-y-5">
          <Image
            alt="5th image"
            src={"/5.jpg"}
            width={380}
            height={214}
            className="block lg:hidden"
          />
          <Image
            alt="5th image"
            src={"/5.jpg"}
            width={558}
            height={579}
            className="hidden lg:block"
          />
          <div className="flex flex-row gap-x-5">
            <Image
              alt="6th image"
              src={"/6.jpg"}
              width={225}
              height={169}
              className="block lg:hidden"
            />
            <Image
              alt="7th image"
              src={"/7.jpg"}
              width={147}
              height={170}
              className="block lg:hidden"
            />
            <Image
              alt="6th image"
              src={"/6.jpg"}
              width={327}
              height={245}
              className="hidden lg:block"
            />
            <Image
              alt="7th image"
              src={"/7.jpg"}
              width={211}
              height={245}
              className="hidden lg:block"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-[3.25rem]">
          <p className="heading-3 lg:heading-1">style<br></br>cockpit</p>
          <p className="body lg:w-[18.75rem]">Le cockpit conserve l&apos;aspect classique et axé sur le conducteur typique des berlinettes à moteur central arrière de Ferrari. La F8 Tributo est également équipé d&apos;un nouveau volant et de nouvelles commandes montées sur le volant.</p>
          <a href="/" className="flex items-center justify-center px-6 py-4 button border bg-transparent button cursor-pointer text-neutral-3 border-neutral-3 w-full lg:w-[12.5rem]">
            configurer
          </a>
        </div>
      </div>
      <div className="h-fit bg-neutral-3 flex flex-col gap-y-[3.75rem] items-center px-6 py-20 lg:flex-row lg:justify-between lg:px-16">
        <Image
          alt="logo"
          src={"/logo.svg"}
          width={147}
          height={207}
          className="block lg:hidden"
        />
        <Image
          alt="logo"
          src={"/logo.svg"}
          width={206}
          height={289}
          className="hidden lg:block"
        />
        <div className="flex flex-col gap-10 lg:flex-row">
          <a href="/" className="button text-white cursor-pointer">link 01</a>
          <a href="/" className="button text-white cursor-pointer">link 02</a>
          <a href="/" className="button text-white cursor-pointer">link 03</a>
          <a href="/" className="button text-white cursor-pointer">link 04</a>
        </div>
        <div className="flex flex-row gap-x-5">
          <Image
            alt="youtube icon"
            src={"/icons/youtube.svg"}
            width={24}
            height={24}
          />
          <Image
            alt="youtube icon"
            src={"/icons/youtube.svg"}
            width={24}
            height={24}
          />
          <Image
            alt="youtube icon"
            src={"/icons/youtube.svg"}
            width={24}
            height={24}
          />
          <Image
            alt="youtube icon"
            src={"/icons/youtube.svg"}
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="bg-neutral-3 flex flex-col items-center gap-y-5 border pb-10 border-neutral-3 lg:flex-row lg:justify-between lg:px-16 lg:pb-[6.25rem]">
        <p className="button text-white cursor-pointer">© VitomirLACES</p>
        <p className="button text-white">2023</p>
      </div>
    </>
  )
}
