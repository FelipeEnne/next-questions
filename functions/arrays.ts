export function shuffle<T>(elements: T[]): T[] {
  return elements
    .map((val) => ({ val, random: Math.random() }))
    .sort((obj1, obj2) => obj1.random - obj2.random)
    .map((obj) => obj.val);
}
