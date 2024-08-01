const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtract 5 - 2 equals 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
})

test('divide 4 / 2 equals 2', () => {
    expect(calculator.divide(4, 2)).toBe(2);
})

test('multiply 2 * 2 equals 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
})