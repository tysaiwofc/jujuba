
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {

    const { data: session } = useSession();
    
  if (session) {
    fetch(`/api/join/support`, {
      method: 'PUT',
      body: JSON.stringify({
        token: `${session?.user.token}`,
        id: `${session?.user.id}`
      }),
      headers: {
        'Authorization': `eyJhbGciOiJIUzI1NiJ9.SnVqdWJh.M7IRO47mtWiw4Z8eljG9olAIYP8lN2dTOj5xVnULf0A`,
        'Content-Type': 'application/json'
       }
    }).catch((er) => {
      console.log(er)
    })

    return (
      <div className='flex-col h-screen w-screen flex flex-auto content-center items-center bg-pink-500 justify-center'>
        <p>Prontinho, você entrou no servidor oficial de suporte da Jujuba!</p>
        <button onClick={() => signOut()} className='text-zinc-200 bg-red-500 p-1 rounded px-3 mx-2 mt-2 hover:bg-red-600'>Sign out</button>
        <a className='text-zinc-200 bg-blue-500 p-1 rounded px-3 mx-2 mt-2 hover:bg-blue-600' href='/'>Voltar para pagina inicial</a>
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
