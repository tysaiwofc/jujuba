import nextAuth from 'next-auth'
import DiscordProvider from "next-auth/providers/discord";
// types.ts
interface User {
    name: string;
    email: string;
    image: string;
    accessToken?: string;
    id?: string;
    guilds?: Array<object>;
}

export interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
  members: Array<any>
}

export const getGuild = async (guildId: string) => {
  const guild = await fetch(`${process.env.DISCORD_ENDPOINT}/guilds/${guildId}`, {
    headers: {
      Authorization: `Bot ${process.env.TOKEN}`,
    },
  });

  if (guild.status !== 200) return [];

  const guildData = (await guild.json()) as Guild;
  guildData.icon = guildData.icon;

  return guildData;
};
// export const getGuildMembers = async (token: string, guildId: string) => {
//   const members = await fetch(`https://discord.com/api/v10/guilds/${guildId}/members`, {
//     headers: {
//       Authorization: `Bot ${token}`,
//     },
//   });



//   if (members.status !== 200) return []

//   const membersData = (await members.json()) as any[];

//   return membersData;
// };

export const getGuilds = async (token: string) => {
  const guilds = await fetch(`${process.env.DISCORD_ENDPOINT}/users/@me/guilds`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (guilds.status !== 200) return []

  const guildsData = (await guilds.json()) as Guild[];

  // if(guildsData) {
  //   guildsData.forEach(async guild => {
  //     guild.members = await getGuildMembers(process.env.TOKEN as string, guild.id) as any
  //   })
  // }
  return guildsData;
}

export const getBotGuilds = async (token: string) => {
  const guilds = await fetch(`${process.env.DISCORD_ENDPOINT}/users/@me/guilds`, {
    headers: {
      Authorization: `Bot ${token}`,
    },
  });

  if (guilds.status !== 200) return []

  const guildsData = (await guilds.json()) as Guild[];

  // if(guildsData) {
  //   guildsData.forEach(async guild => {
  //     guild.members = await getGuildMembers(process.env.TOKEN as string, guild.id) as any
  //   })
  // }
  return guildsData;
}



  
const handler = nextAuth({
    providers: [
        DiscordProvider({
          clientId: '882593474086572123',
          clientSecret: 'HtkJBgafhIneZr1Yp28RUv0q45LbT7xV',
          authorization: "https://discord.com/api/oauth2/authorize?scope=identify+guilds.join+role_connections.write+guilds",
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
              //const botGuilds = await getBotGuilds(process.env.TOKEN as string)
              session.user.token = accessToken;
              session.user.id = id
              // session.user.botGuilds = botGuilds

              const guilds = await getGuilds(accessToken).catch(() => {})
              console.log(session.user)
              return {
                ...session,
                user: {
                  ...session.user,
                  id: token.sub,
                  guilds: guilds
                },
              };
        },

        async jwt({ token, account }){
            if (account){
            token.accessToken = account.access_token
            token.id = account.providerAccountId
            //console.log(account);
            }
            return token;
        }
    },

    secret: process.env.NEXTAUTH_SECRET,
})

export {handler as GET, handler as POST}