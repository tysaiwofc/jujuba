


import type { NextApiRequest, NextApiResponse } from 'next'
import verificaToken from '../../../middlewares/authorization'

type ResponseData = {
  buffer: any
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    verificaToken(req, res, () => {
        const hosts = ["localhost:3000", 'jujuba.website']
        if(!hosts.includes(req.headers.host as string)) return res.status(401).end()
        fetch(`https://discord.com/api/v10/guilds/1105350306889486346/members/${req.body.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        access_token: `${req.body.token}`
      }),
      headers: {
        "Authorization": `Bot ${process.env.TOKEN}`,
        "Content-Type": "application/json"
       }
    }).catch((er) => {
      console.log(er)
    })
    })
        
}