const { capitalize, reverseString } = require('./string');

test('takes a string and returns it with the first character capitalized', () => {
   expect(capitalize("first")).toBe("First");
});

test('takes a string and returns it reversed', () => { 
  expect(reverseString("reverse")).toBe("esrever");
});