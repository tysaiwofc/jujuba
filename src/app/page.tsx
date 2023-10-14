
import Add from '@components/Add'
import Navbar from '@components/Nav'
import React from 'react'
import Image from 'next/image'
export default function Home() {

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen flex flex-auto content-center items-center justify-center">
          <Add />
          <Image className='jujuba-image animate-bounce hover:animate-spin' alt='Jujuba Image' src="https://media.discordapp.net/attachments/1147035124471443466/1147049020703899678/new.png" width={350} height={220}/>
      </div>
    </div>
  )
}
