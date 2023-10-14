'use client'
import { Pixelify_Sans } from 'next/font/google'
import { redirect } from 'next/navigation'
const Sigout = async () => {


      const signout = () => {
        window.location.href = '/api/auth/signout'
      }

    return (
        <><button className="text-zinc-200 bg-red-500 p-1 rounded px-3 mx-2 hover:bg-red-600 jujuba-image" onClick={signout}>Sign Out</button><button className={`text-zinc-200 bg-red-500 p-1 rounded px-2 mx-2 hover:bg-red-500 jujuba-menu` } onClick={signout}>Sign Out</button></>
    )
}

export default Sigout;