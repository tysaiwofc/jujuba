// authMiddleware.js
import type { NextApiRequest, NextApiResponse, } from 'next'
import jwt from 'jsonwebtoken';

function verificaToken(req: NextApiRequest, res: NextApiResponse<any>, next: () => void) {
    const token = req.headers['authorization'] as string

    if (!token) return res.status(401).end()
    
    jwt.verify(token, process.env.JUJUBA_API_TOKEN as string , (err: any, decoded: any) => {
        console.log(err)
        if (err) return res.status(401).end()
        
        next();
    });
}

export default verificaToken;
