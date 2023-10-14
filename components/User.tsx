import Image from "next/image";

interface UserProps {
    id?: string;
    avatar?: string;
    username?: string;
}
const User = (options: UserProps) => {
    return (
        <div className="user flex flex-row content-center justify-start content-center items-center p-2">
                <Image className="rounded-full" alt="User Icon" src={options.avatar ? options.avatar : ""} width={25} height={25}></Image>
                <p className="space-x-4">{options.username}</p>
            </div>
    )
}

export default User;