const splitAt = (arr: (any[] | string), i: number): string[] | any[] => [arr.slice(0, i), arr.slice(i)];

const rotate = (arr: any[], count: number): any[] => {
	count -= arr.length * Math.floor(count / arr.length);
	// eslint-disable-next-line prefer-spread
	arr.push.apply(arr, arr.splice(0, count));
	return arr;
};


const mapToArray = (m: Map<any, any>) => Array.from(m).map(([k, v]) => v);

const setToArray = (s: Set<any>) => Array.from(s);

export default {
	splitAt,
	rotate,
	mapToArray,
	setToArray
};
