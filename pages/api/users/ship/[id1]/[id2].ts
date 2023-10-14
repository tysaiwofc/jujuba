import type { NextApiRequest, NextApiResponse } from 'next'
import { createCanvas, loadImage } from 'canvas'
import verificaToken from '../../../../../middlewares/authorization'
import cache from '@cache/node-cache'

type ResponseData = {

}
        
    
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    verificaToken(req, res, async () => {
        const cacheKey1 = `ship_${req.query.id1}.${req.query.id2}`
        const cacheKey2 = `ship_${req.query.id2}.${req.query.id1}`
        const cacheData1 = cache.get(cacheKey1)
        const cacheData2 = cache.get(cacheKey2)
        if(cacheData1 || cacheData2) {
            res.json({ buffer: cacheData1 ? cacheData1 : cacheData2})
            return;
        }
        let amor: number = Math.floor(Math.random() * 100);
    
            let emoticon: any = {
                60: "https://cdn.discordapp.com/attachments/862566063090171995/886727322496008252/coracao.png",
                40: "https://cdn.discordapp.com/attachments/862566063090171995/886727763560661022/1f937-2642.png",
                20: "https://cdn.discordapp.com/attachments/862566063090171995/886727631133892649/1f62d.png",
                70: "https://cdn.discordapp.com/attachments/862566063090171995/886727322496008252/coracao.png",
                80: "https://cdn.discordapp.com/attachments/862566063090171995/886727322496008252/coracao.png",
                90: "https://cdn.discordapp.com/attachments/862566063090171995/886727322496008252/coracao.png",
                100: "https://cdn.discordapp.com/attachments/862566063090171995/886727322496008252/coracao.png",
                99: "https://cdn.discordapp.com/attachments/862566063090171995/886727322496008252/coracao.png",
                69: "https://cdn.discordapp.com/attachments/862566063090171995/886727322496008252/coracao.png",
                67: "https://cdn.discordapp.com/attachments/862566063090171995/886727322496008252/coracao.png",
            }
        
            const canvas = createCanvas(730, 346);
            const ctx = canvas.getContext('2d');
            const emote = await loadImage(emoticon[amor] ? emoticon[amor] : "https://cdn.discordapp.com/attachments/862566063090171995/886727763560661022/1f937-2642.png");
            console.log(emote)
            
            const foto1 = await loadImage(
                `https://cdn.discordapp.com/avatars/${req.query.id1}/${req.query.avatar1}.png?size=1024`
            );
            const foto2 = await loadImage(
                `https://cdn.discordapp.com/avatars/${req.query.id2}/${req.query.avatar2}.png?size=1024`
            );

            console.log(foto1, foto2)
    
            let rand = (amor * 673) / 100
    
            let img2 = await loadImage('./images/ship/ship_layout.png')
            ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);
    
            let grd = ctx.createLinearGradient(0, rand, 200, 0);
            grd.addColorStop(0, "#ac07f2");
            grd.addColorStop(2, "red"); //#a20afa
            grd.addColorStop(0, "#a20afa");
            ctx.fillStyle = grd;
            ctx.fillRect(28, 252, rand,72)
    
            
            let img = await loadImage('./images/ship/ship.png')
            ctx.drawImage(foto1, 47, 58, 185, 185);
            ctx.drawImage(foto2, 470, 55, 185, 185);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(emote, 290, 90, 128, 128);
    
            ctx.textAlign = "center"
            ctx.font = `48px Segoe UI Black`; //sobmim
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(`${amor}%`, 355, 296)
    
            const image = canvas.toBuffer();
            cache.set(cacheKey1, image, 25);
            res.json({ buffer: image})
    
    })
}