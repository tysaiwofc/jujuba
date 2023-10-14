
import { useSession, signIn, signOut } from 'next-auth/react';
import { Home as HomeIcon} from 'lucide-react';
import User from '@components/User'
import Server from '@components/Server';
export default function Home() {

    const { data: session } = useSession();
    const servers = [
        {
            name: 'Palácio da Jujuba',
            icon: 'b81f9c25bd445a1266800023c2cdbca4',
            id: '1105350306889486346'
        },
    ]

  if (session) {
    return (
      <div className='flex-row flex flex-auto content-center '>
        <nav className='nav h-screen bg-pink-700'>
        <a href='/' className='user flex flex-row content-center justify-start rounded content-center items-center p-2 m-2'>
        <HomeIcon /><p className='space-x-4'>Pagina Inicial</p>
            </a>
            <div>
                <div className='server-container'>
                    {servers.map(server => {
                        return <Server key='server-itens' name={server.name} icon={server.icon} id={server.id}></Server>
                    }) }
                </div>
            </div>
            <User key='user-config' id={session.user.id as string} avatar={session.user.image as string} username={session.user.name as string}/>
        </nav>
      </div>
    );
  }

  return (
      <div className='flex-col h-screen w-screen flex flex-auto content-center items-center bg-pink-500 justify-center'>
        <p>Ao clicar em 'Login' irá fazer login com o discord e automaticamente irá entrar no servidor de suporte!
        Se optar por apenas entrar pela url acesse: <a href='https://discord.gg/bpVsm5ASjS'>https://discord.gg/bpVsm5ASjS</a></p>
        <button onClick={() => signIn()} className='text-zinc-200 bg-blue-500 p-1 rounded px-3 mx-2 mt-2 hover:bg-blue-600'>Login</button>
      </div>
  )
}
