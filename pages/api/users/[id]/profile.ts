import type { NextApiRequest, NextApiResponse } from 'next'
import verificaToken from '../../../../middlewares/authorization'
import cache from '../../../../cache/node-cache'
import Database from '../../../../sql/sequelize_init'
import ProfileRender from '../../../../utils/ProfileRender'
type ResponseData = {
  buffer: any
}

type UserData = {
    profileLayout: 'default' | 'new'
}
interface Data {
    profileAboutMe: string;
    flags: any;
    profileLayout: 'default' | 'new'
}
const database = new Database()
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    verificaToken(req, res, async () => {
        if(req.method === 'GET') {
            const cacheKey = `profile_${req.query.id}`
    const cacheData = cache.get(cacheKey)
    if(cacheData) {
        res.json({ buffer: cacheData})
        return;
    }

    const userData: Data | any = await database.findUser(req.query.id) || await database.createUser({ id: req.query.id})
    const dat: UserData = userData.profileLayout
    const profile: any = new ProfileRender()
    const render = await profile[dat?.profileLayout || 'default'](req, res, userData)

    cache.set(cacheKey, render, 10);
    // Define o cabeçalho de resposta para indicar que é uma imagem
    res.json({ buffer: render})
        }
      })
    
        
}