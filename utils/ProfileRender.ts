import { renderEmoji } from './Utils';
import BadgesEmojis from './Badges';
import { UserFlagsBitField } from 'discord.js';
import { createCanvas, loadImage, Canvas, Image } from 'canvas';
import { NextApiRequest, NextApiResponse } from 'next';
type BadgeKey = "Staff" | "Partner" | "Hypesquad" | "BugHunterLevel1" | "MFASMS" | "PremiumPromoDismissed" | "HypeSquadOnlineHouse1" | "HypeSquadOnlineHouse2" | "HypeSquadOnlineHouse3" | /* ... adicione outras insígnias aqui */ "RestrictedCollaborator";
type UserData = {
    profileLayout: 'default'
}


interface Data {
  profileAboutMe: string;
  flags: any;
  profileLayout: 'default' | 'new'
}

//wtf

export default class ProfileRender {
  async default(req: NextApiRequest, res: NextApiResponse<any>, userData: Data) {
    const response = await fetch(`https://discord.com/api/v9/users/${req.query.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bot ${process.env.TOKEN}` ,
      },
    }).catch(() => {});

    if (!response) return res.status(404).end();

    const user = await response.json();

    console.log(user);

    if (!user) return res.status(404).end();

    const canvas: Canvas = createCanvas(600, 400);
    const ctx = canvas.getContext('2d');

    const layout: Image = await loadImage('./images/jujuba_profile.png');
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height);

    const userAvatarURL = `https://cdn.discordapp.com/avatars/${user.avatar ? req.query.id : '882593474086572123'}/${user.avatar ? user.avatar : '39afa047ad848bdfe7ea1600c4981998'}.png`;
    const userAvatar: Image = await loadImage(userAvatarURL);

    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';

    const username = user.username ? user.username : 'NotFound';
    ctx.fillText(username.slice(0, 20), 172, 155);

    const data: Data = userData;
    const badge: BadgeKey = BadgesEmojis as unknown as BadgeKey

    ctx.font = '15px';
    const flags = new UserFlagsBitField(user.flags).toArray() as Array<string>;
    const badges: string = flags.map((flag: any) => badge[flag]).join('');

    await renderEmoji(ctx, userData.flags ? JSON.parse(data.flags).map((flag: any) => badge[flag]).join('') : badges, 170, 275);

    ctx.font = '18px Arial';
    ctx.fillStyle = 'white';

    const bout: string = data.profileAboutMe?.match(/.{1,62}/g)?.join('\n') || '';

    ctx.fillText(bout, 30, 300);

    ctx.beginPath();
    ctx.arc(100, 126, 70, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(userAvatar, 30, 56, 140, 140);

    return canvas.toBuffer();
  }
}
