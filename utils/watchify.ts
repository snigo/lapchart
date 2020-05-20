export function padNumber(num: number):string {
  return num.toString().padStart(2, '0');
}

export function watchifyTime(ms: number): string {
  let p = 0;
  if (ms >= 3600000) p = 1;

  const output = [
    Math.floor(ms / 10 % 100),
    Math.floor(ms / 1000 % 60),
    Math.floor(ms / 60000 % 60),
    Math.floor(ms / 3600000 % 100),
  ];

  return `${padNumber(output[2 + p])}:${padNumber(output[1 + p])}${p ? ':' : '.'}${padNumber(output[0 + p])}`;
}
