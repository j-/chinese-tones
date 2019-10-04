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

export const convert = (input: string) => {
  const output = input
    .replace(/1/g, MACRON)
    .replace(/2/g, ACUTE)
    .replace(/3/g, CARON)
    .replace(/4/g, GRAVE)
    .replace(/v/g, 'u' + UMLAUT + CARON);
  return output;
};
