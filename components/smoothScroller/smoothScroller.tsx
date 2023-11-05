"use client"

import Lenis from "@studio-freight/lenis"

const SmoothScroller = () => {
  const lenis = new Lenis()

  lenis.on("scroll", (event_: any) => {
    return event_
  })

  function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  return <></>
}

export default SmoothScroller