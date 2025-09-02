// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shuffle(elements: any[]): any[] {
  return elements
    .map((val) => ({ val, random: Math.random() }))
    .sort((obj1, obj2) => obj1.random - obj2.random)
    .map((obj) => obj.val);
}
