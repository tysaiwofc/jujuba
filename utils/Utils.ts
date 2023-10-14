import emoji from "node-canvas-with-twemoji-and-discord-emoji";

const renderEmoji = async (ctx: any, message: string, x: number, y: number) => {
  return await emoji.fillTextWithTwemoji(ctx, message, x, y);
};

const abbrev = (num: any): string => {
  if (!num || isNaN(Number(num))) return "0";
  if (typeof num === "string") num = parseInt(num);
  let decPlaces = Math.pow(10, 1);
  var abbrev = ["K", "M", "B", "T"];
  for (var i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);
    if (size <= num) {
      num = Math.round((num * decPlaces) / size) / decPlaces;
      if (num === 1000 && i < abbrev.length - 1) {
        num = 1;
        i++;
      }
      num += abbrev[i];
      break;
    }
  }
  return num.toString();
};

const convertAbbrev = (num: any): number | string => {
  if (!num) return "0";

  const number = parseFloat(num.substr(0, num.length - 1));
  const unit: string = num.substr(-1);
  const zeros: { [key: string]: number } = { K: 1e3, k: 1e3, M: 1e6, m: 1e6 };

  if (!zeros[unit]) return parseFloat(num);

  num = number * zeros[unit];

  return num;
};

export { abbrev, renderEmoji, convertAbbrev };
