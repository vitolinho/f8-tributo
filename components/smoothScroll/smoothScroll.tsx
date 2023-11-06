"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (<></>)
}

export default SmoothScroll