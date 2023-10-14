
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Body({children}: {
    children: React.ReactNode
}) {
    return (
    <body className={inter.className}>{children}</body>
    )
}