import pipe from '.';

describe('pipe', () => {
  it('should return a function', () => {
    expect(pipe()).toBeInstanceOf(Function);
  });

  it('should return the same value if no functions are passed', () => {
    const result = pipe()(1);
    expect(result).toBe(1);
  });

  it('should return the result of the function passed', () => {
    const result = pipe((x: number) => x + 1)(1);
    expect(result).toBe(2);
  });

  it('should return the result of all functions passed', () => {
    const result = pipe(
      (x: number) => x + 1,
      (x: number) => x * 2,
      (x: number) => x - 1,
    )(1);
    expect(result).toBe(3);
  });
});
