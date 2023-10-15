import Image from "next/image";

interface ServerProps {
    name: string;
    id: string;
    icon?: string | null;
    display?: boolean;
    add?: boolean
  }

const Server = ({name, id, icon, display, add}: ServerProps) => {

    if(add) return (
        <a className="flex flex-row content-center justify-start content-center items-center server-3" href={`/config/guild/${id}`}>
                    <Image className="rounded-full" alt="User Icon" src={icon ? `https://cdn.discordapp.com/icons/${id}/${icon}.png` : 'https://i.imgur.com/gJGzu9A.png'} width={25} height={25}></Image>
                    <p className="space-x-4">{name}</p>
        </a>
    )
    if(display) return (
        <a className="flex flex-row content-center justify-start content-center items-center server-2" href={`/config/guild/${id}`}>
                    <Image className="rounded-full" alt="User Icon" src={icon ? `https://cdn.discordapp.com/icons/${id}/${icon}.png` : 'https://i.imgur.com/gJGzu9A.png'} width={25} height={25}></Image>
                    <p className="space-x-4">{name}</p>
        </a>
    )
    return (
        <a className="flex flex-row content-center justify-start content-center items-center server" href={`/config/guild/${id}`}>
                    <Image className="rounded-full" alt="User Icon" src={icon ? `https://cdn.discordapp.com/icons/${id}/${icon}.png` : 'https://i.imgur.com/gJGzu9A.png'} width={25} height={25}></Image>
                    <p className="space-x-4">{name}</p>
        </a>
    ) 
}

export default Server