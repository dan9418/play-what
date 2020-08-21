export const modulo = (a, b) => ((a % b) + b) % b;

export const moduloSum = (a, b, divisor, offset = 0, subtraction = false) => {
  const dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
  return modulo(dividend, divisor) + offset;
};

export const splitAt = (str, i) => [str.slice(0, i), str.slice(i)];

export const rotate = (arr, count) => {
  count -= arr.length * Math.floor(count / arr.length);
  arr.push.apply(arr, arr.splice(0, count));
  return arr;
};
