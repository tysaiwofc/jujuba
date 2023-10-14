import Image  from 'next/image'
import { Pixelify_Sans } from 'next/font/google'
const inter = Pixelify_Sans({
    subsets: [],
    weight: '700',
    display: 'auto'
})
const Not = () => {
    return (

        <a href="/" className={`text-zinc-200 gap-2 mx-2 text-5xl  ${inter.className}`}>um gato comeu essa página</a>

    )
}

export default Not;