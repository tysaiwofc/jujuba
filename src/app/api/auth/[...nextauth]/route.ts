import nextAuth from 'next-auth'
import DiscordProvider from "next-auth/providers/discord";
// types.ts
interface User {
    name: string;
    email: string;
    image: string;
    accessToken?: string;
    id?: string;
  }

  
const handler = nextAuth({
    providers: [
        DiscordProvider({
          clientId: '882593474086572123',
          clientSecret: 'HtkJBgafhIneZr1Yp28RUv0q45LbT7xV',
          authorization: "https://discord.com/api/oauth2/authorize?scope=identify+guilds.join+role_connections.write",
          token: "https://discord.com/api/oauth2/token",
          userinfo: "https://discord.com/api/users/@me",
          style: {
            logo: "/discord.svg",
            logoDark: "/discord-dark.svg",
            bg: "#fff",
            text: "#7289DA",
            bgDark: "#7289DA",
            textDark: "#fff",
          }
        })
      ],
      callbacks: {
        async session({ session, token, user }) {
              let accessToken: string | null = token.accessToken as string;
              let id: string | null = token.id as string;
          
              session.user.token = accessToken;
              session.user.id = id
              return session;
        },

        async jwt({ token, account }){
            if (account){
            token.accessToken = account.access_token
            token.id = account.providerAccountId
           console.log(account);
            }
            return token;
        }
    },

    secret: process.env.NEXTAUTH_SECRET,
})

export {handler as GET, handler as POST}