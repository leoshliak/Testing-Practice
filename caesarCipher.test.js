const caesarCipher = require('./caesarCipher');

 test('wrapping from z to a test ', () => {
   expect(caesarCipher('xyz', 3)).toBe('abc');
 });

 test('case preservation test', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('punctuation test', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });