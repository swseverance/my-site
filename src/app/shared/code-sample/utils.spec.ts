import {
  indexOfFirstNonWhitespaceCharacter, indexOfLastNonWhitespaceCharacter,
  removeLeadingNewlineCharacters, removeTrailingNewlineCharacters,
  formatter } from './utils';

/**
 * TODO - firm up these unit tests a bit
 */
describe('CodeSampleComponent Utility Functions', () => {
  describe('indexOfFirstNonWhitespaceCharacter', () => {
    it('works #1', () => {
      expect(indexOfFirstNonWhitespaceCharacter('  ab')).toBe(2);
    });

    it('works #2', () => {
      expect(indexOfFirstNonWhitespaceCharacter(' \n ab')).toBe(3);
    });

    it('works #3', () => {
      expect(indexOfFirstNonWhitespaceCharacter('ab')).toBe(0);
    });
  });

  describe('indexOfLastNonWhitespaceCharacter', () => {
    it('works #1', () => {
      expect(indexOfLastNonWhitespaceCharacter('ab')).toBe(1);
    });

    it('works #2', () => {
      expect(indexOfLastNonWhitespaceCharacter(' \n ab \n')).toBe(4);
    });

    it('works #3', () => {
      expect(indexOfLastNonWhitespaceCharacter('ab  ')).toBe(1);
    });
  });

  describe('removeLeadingNewlineCharacters', () => {
    it('removes leading newline characters from a string #1', () => {
      const input = '\n\nabc';
      const expected = 'abc';

      expect(removeLeadingNewlineCharacters(input)).toBe(expected);
    });

    it('removes leading newline characters from a string #2', () => {
      const input = 'abc';
      const expected = 'abc';

      expect(removeLeadingNewlineCharacters(input)).toBe(expected);
    });

    it('removes leading newline characters from a string #3', () => {
      const input = '  a\nb c\n';
      const expected = '  a\nb c\n';

      expect(removeLeadingNewlineCharacters(input)).toBe(expected);
    });
  });

  describe('removeTrailingNewlineCharacters', () => {
    it('removes Trailing newline characters from a string #1', () => {
      const input = '\n\nabc\n';
      const expected = '\n\nabc';

      expect(removeTrailingNewlineCharacters(input)).toBe(expected);
    });

    it('removes Trailing newline characters from a string #2', () => {
      const input = 'ab\nc';
      const expected = 'ab\nc';

      expect(removeTrailingNewlineCharacters(input)).toBe(expected);
    });

    it('removes Trailing newline characters from a string #3', () => {
      const input = '  a\nb c\n';
      const expected = '  a\nb c';

      expect(removeTrailingNewlineCharacters(input)).toBe(expected);
    });
  });

  describe('formatter', () => {
    it('works #1', () => {
      const input = '.hello { font-size: 12px; }';
      const expected = '.hello { font-size: 12px; }';

      expect(formatter(input)).toBe(expected);
    });

    it('works #2', () => {
      const input = '\n .hello { font-size: 12px; }';
      const expected = '.hello { font-size: 12px; }';

      expect(formatter(input)).toBe(expected);
    });

    it('works #3', () => {
      const input = `
        .hello {
          font-size: 12px;
        }
      `;
      const expected = `.hello {\n  font-size: 12px;\n}`;

      expect(formatter(input)).toBe(expected);
    });
  });
});
