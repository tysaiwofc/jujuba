import { useSession, signIn } from 'next-auth/react';
import { Home as HomeIcon } from 'lucide-react';
import User from '@components/User';
import Server from '@components/Server';
import { useRouter } from 'next/router';
import Config from '@components/Config';

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  const guilds = session?.user.guilds as Array<object | any>;
  let servers;
    if (guilds) {
      const filteredServers: any = guilds.filter((guild) => {
        const isOwner = guild.owner;
        const permissions = BigInt(guild.permissions);
        const adminPermission = BigInt(8);
        const hasAdminPermission = (permissions & adminPermission) === adminPermission;
        return isOwner || hasAdminPermission;
      });
      servers = filteredServers // Atualize o estado com a lista de servidores filtrados
    }

  if (session) {
    return (
      <div className="flex-row flex flex-auto content-center">
        <nav className="nav h-screen">
          <a href="/" className="user flex flex-row content-center justify-start rounded content-center items-center p-2 m-2">
            <HomeIcon />
            <p className="space-x-4">Pagina Inicial</p>
          </a>

          <div className="server-container">
            {servers.map((server: any) => (
              <Server
                key={server.id}
                name={server.name}
                icon={server.icon}
                id={server.id}
                display={router.query.id === server.id ? true : false}
              ></Server>
            ))}
          </div>

          <User
            key="user-config"
            id={session.user.id as string}
            avatar={session.user.image as string}
            username={session.user.name as string}
          />
        </nav>
        <Config/>
      </div>
    );
  }

  return (
    <div className="flex-col h-screen w-screen flex flex-auto content-center items-center bg-pink-500 justify-center">
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
  );
}
