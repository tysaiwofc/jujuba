import type { NextApiRequest, NextApiResponse } from 'next'
import verificaToken from '../../../middlewares/authorization'
import cache from '../../../cache/node-cache'
import Database from '../../../sql/sequelize_init'
type ResponseData = {
  message: string
}

const database = new Database()
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  verificaToken(req, res, async () => {
    if(req.method === 'GET') {
      const cacheKey = `guilds_${req.query.id}`
    const cacheData: any = cache.get(cacheKey)
    if(cacheData) return res.json(cacheData)
    const data = await database.guilds.findOne({
            where: {
                id: req.query.id
            }
    })

    if(data) {
        cache.set(cacheKey, data, 60)
    }

    res.json(data)
    } else if(req.method === 'POST') {
      const data = await database.createGuild({
        id: req.query.id
      })

      res.json(data)
    } else if(req.method === 'PUT') {
      const cacheKey = `guilds_${req.query.id}`
    const data = await database.updateGuild(req.query.id, JSON.stringify(req.body))
    cache.del(cacheKey)
    cache.set(cacheKey, data, 60)
    res.json(data)
    }
  })

    
}