import Image  from 'next/image'
import Login from './Login'
import { Pixelify_Sans } from 'next/font/google'
import Link from 'next/link'
const inter = Pixelify_Sans({
    subsets: [],
    weight: '700',
    display: 'auto'
})



const Navbar = () => {


    return (
        <nav className="w-screen flex flex-auto bg-pink-700 content-center items-center p-2 fixed">
            <div className="flex m-2">
                <Image className="rounded-full" src="https://images-ext-1.discordapp.net/external/qmTXpoFKzK_EkUh1WEBMP3bH-HXptz0Yuk4q6ZrL-Mk/https/cdn.discordapp.com/avatars/882593474086572123/39afa047ad848bdfe7ea1600c4981998.webp" alt="Testing" width={25} height={50} />
                <a className={`text-zinc-200 gap-2 mx-2 ${inter.className}`} href='/'>JUJUBA</a>
            </div>
            <div className='flex-none ml-auto mx-3'>
                <a className="text-zinc-200 mx-3 jujuba-image" href="/history">
                    História
                </a>
                <a className="text-zinc-200 mx-3 jujuba-image" href="/premium">
                    Premium
                </a>
                <a className="text-zinc-200 mx-3 jujuba-image" href="/staffs">
                    Equipe
                </a>
                <a className="text-zinc-200 mx-3 jujuba-image" href="/support">
                    Suporte
                </a>

 
            </div>
            <div className='flex-none '>
                <Login/>
            </div>

        </nav>
    )
}

export default Navbar;