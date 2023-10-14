
import Not from '@components/404'
import Navbar from '@components/Nav'

export default async function Home() {
  return (
    <div>
      <div className="h-screen flex flex-auto content-center items-center bg-pink-500 justify-center">
        <Not />
      </div>
    </div>
  )
}
