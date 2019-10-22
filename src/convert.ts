/** Tone 1 e.g. Mā */
export const MACRON = '\u0304';
/** Tone 2 e.g. Má */
export const ACUTE = '\u0301';
/** Tone 3 e.g. Mǎ */
export const CARON = '\u030c';
/** Tone 4 e.g. Mà */
export const GRAVE = '\u0300';
/** E.g. Nü */
export const UMLAUT = '\u0308';

export const toneToChar = (tone: number) => {
  switch (tone) {
    case 1: return MACRON;
    case 2: return ACUTE;
    case 3: return CARON;
    case 4: return GRAVE;
  }
  throw new Error('Expected a number from 1 to 4');
};

export const convert = (input: string) => {
  const output = input
    .replace(/([aeiou])([1-4])/ig, (_, vowel, tone) => (
      vowel + toneToChar(Number(tone))
    ))
    .replace(/v/g, 'u' + UMLAUT + CARON);
  return output;
};

export const VOWELS = Object.freeze(new Set(['a', 'e', 'i', 'o', 'u']));

export const getVowelAt = (input: string, index: number) => {
  const character = input.charAt(index);
  if (character === undefined) return null;
  if (!VOWELS.has(character)) return null;
  return character;
};
