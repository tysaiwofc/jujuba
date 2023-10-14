import type { NextApiRequest, NextApiResponse } from 'next'
import verificaToken from '../../middlewares/authorization'
import cache from '@cache/node-cache'
import Database from '../../sql/sequelize_init'
type ResponseData = {
  message: string
}

const database = new Database()
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    verificaToken(req, res, async () => {
        const data = await database.guilds.findAll()
        res.json(data)
    })
}