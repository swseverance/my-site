export const indexOfFirstNonWhitespaceCharacter = (str: string): number => {
  let index: number;

  try {
    index = /\S/gi.exec(str).index;
  } catch (e) {
    index = 0;
  }

  return index;
};

export const indexOfLastNonWhitespaceCharacter = (str: string): number => {
  let index: number;

  try {
    index =
      str.length -
      1 -
      /\S/gi.exec(
        str
          .split('')
          .reverse()
          .join('')
      ).index;
  } catch (e) {
    index = str.length - 1;
  }

  return index;
};

export const removeLeadingNewlineCharacters = (str: string): string => {
  const indexToSliceAt = indexOfFirstNonWhitespaceCharacter(str);
  const leftStr = str.slice(0, indexToSliceAt).replace(/\n/gi, '');
  const rightStr = str.slice(indexToSliceAt);

  return leftStr + rightStr;
};

export const removeTrailingNewlineCharacters = (str: string): string => {
  const indexToSliceAt = indexOfLastNonWhitespaceCharacter(str);
  const leftStr = str.slice(0, indexToSliceAt);
  const rightStr = str.slice(indexToSliceAt).replace(/\n/gi, '');

  return leftStr + rightStr;
};

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x)
});

export const formatter = (str: string): string => {
  str = removeLeadingNewlineCharacters(str);
  str = removeTrailingNewlineCharacters(str);
  const padding = indexOfFirstNonWhitespaceCharacter(str);

  return str
    .split('\n')
    .map(s => s.slice(padding))
    .join('\n')
    .trim();
};
