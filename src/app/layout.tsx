
import Body from '@components/Body'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jujuba Website',
  description: 'Apenas um bot para o discord',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta property="og:url" content="https://jujuba.website/"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Jujuba Website"/>
    <meta property="og:description" content="Olá, sou um bot feito com muito amor e carinho pra aquelas pessoas que querem manter sua comunidade saudável e ativa utilizando minhas funcionalidades!"/>
    <meta name="theme-color" content="#FF84F6"/>
    <meta property="og:image" content="https://cdn.discordapp.com/avatars/882593474086572123/39afa047ad848bdfe7ea1600c4981998.png"/>
      </head>
      <Body>{children}</Body>   
    </html>
  )
}


