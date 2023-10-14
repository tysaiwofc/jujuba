"use client"
import { Pixelify_Sans } from 'next/font/google'
import { redirect } from 'next/navigation'
const Dogin = () => {
    const login = () => {
        window.location.href = '/api/auth/signin'
      }

        return ( 
            <><button className="text-zinc-200 bg-blue-500 p-1 rounded px-3 mx-2 hover:bg-blue-600 jujuba-image" onClick={login}>Login</button><button className={`text-zinc-200 bg-blue-500 p-1 rounded px-2 mx-2 hover:bg-blue-500 jujuba-menu`} onClick={login}>Login</button></>
         )
         
}

export default Dogin;