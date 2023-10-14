'use client'
import { Pixelify_Sans } from 'next/font/google'
import { redirect } from 'next/navigation';
const inter = Pixelify_Sans({
    subsets: ['latin'],
    weight: '700',
    display: 'auto'
})
const Add = () => {
    const redirecionarParaSiteExterno = () => {
        window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=882593474086572123&permissions=275884928207&scope=bot%20applications.commands';
      };

      const redirecionarParaSiteExterno2 = () => {
        window.location.href = '/dashboard'
      };
    return (
        <div className="flex flex-col max-w-md min-w-min w-full p-3">
                <a className={`text-zinc-200 gap-2 mx-2 text-5xl ${inter.className}`}>JUJUBA</a>

                <p className="text-pink-200 mx-2">Olá, sou um bot feito com muito amor e carinho pra aquelas pessoas que querem manter sua comunidade saudável e ativa utilizando minhas funcionalidades!</p>
                <div className="flex flex-row mx-2 mt-2">
                    <button className="p-2 bg-blue-300 rounded hover:bg-blue-400 "  onClick={redirecionarParaSiteExterno}>Adicionar ao Servidor</button>
                    <button className=" p-2 bg-yellow-400 rounded ml-2 hover:bg-yellow-600" onClick={redirecionarParaSiteExterno2}>Painel de Controle</button>
                </div>
            </div>
    )
}

export default Add;