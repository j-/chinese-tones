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

export const convert = (input: string) => (
  input
    .replace(/([aeiou])1/ig, '$1\u0304')
    .replace(/([aeiou])2/ig, '$1\u0301')
    .replace(/([aeiou])3/ig, '$1\u030c')
    .replace(/([aeiou])4/ig, '$1\u0300')
    .replace(/v/g, 'u\u0308\u030c')
    .replace(/V/g, 'U\u0308\u030c')
);

export const VOWELS = Object.freeze(new Set(['a', 'e', 'i', 'o', 'u']));

export const getVowelAt = (input: string, index: number) => {
  const character = input.charAt(index);
  if (character === undefined) return null;
  if (!VOWELS.has(character)) return null;
  return character;
};
