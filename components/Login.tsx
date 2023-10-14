import { getServerSession } from 'next-auth'
import Dogin from './BtnL'
import Sigout from './BtnS'

const Login = async () => {
        const session = await getServerSession()
      if(!session) {
        return ( 
            <Dogin />
         )
      }
      
      
    return (
        <Sigout/>
    )
}

export default Login;