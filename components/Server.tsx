import Image from "next/image";

interface ServerProps {
    name: string;
    id: string;
    icon?: string | null;
  }

const Server = ({name, id, icon}: ServerProps) => {
    return (
        <div className="flex flex-row content-center justify-start content-center items-center server">
                    <Image className="rounded-full" alt="User Icon" src={icon ? `https://cdn.discordapp.com/icons/${id}/${icon}.png` : ''} width={25} height={25}></Image>
                    <p className="space-x-4">{name}</p>
                    </div>
    ) //
}

export default Server