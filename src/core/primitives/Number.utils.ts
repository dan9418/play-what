const ROMAN_NUMERAL = {
	M: 1000,
	CM: 900,
	D: 500,
	CD: 400,
	C: 100,
	XC: 90,
	L: 50,
	XL: 40,
	X: 10,
	IX: 9,
	V: 5,
	IV: 4,
	I: 1
} as const;

const modulo = (a: number, b: number): number => {
	return ((a % b) + b) % b;
}

const moduloSum = (a: number, b: number, divisor: number): number => {
	const offset = 0;
	const subtraction = false;
	const dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
	return modulo(dividend, divisor) + offset;
};

const romanize = (n: number): string => {
	let str = '';
	for (const i of Object.keys(ROMAN_NUMERAL)) {
		var q = Math.floor(n / ROMAN_NUMERAL[i]);
		n -= q * ROMAN_NUMERAL[i];
		str += i.repeat(q);
		if (n === 0) return str;
	}
	return str;
}

export default {
	modulo,
	moduloSum,
	romanize
};
