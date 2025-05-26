"use client"
import Dock from "src/app/components/Dock/Dock"
import Navbar from "src/app/components/Navbar/Navbar"
import { Lexend } from "next/font/google"
import AppWindow from "./components/Window/Window"
import { useState } from "react"

const lexend = Lexend({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export default function Home() {
  const [openWindow, setOpenWindow] = useState(false)
  return (
    <div
      className={`h-screen w-screen bg-[url(/iridescence.jpg)] bg-cover bg-center ${lexend.className}`}
    >
      <Navbar />
      <Dock onClick={() => setOpenWindow(true)}></Dock>
      <AppWindow open={openWindow} />
    </div>
  )
}
