const splitAt = (arr: (any[] | string), i: number): string[] | any[] => [arr.slice(0, i), arr.slice(i)];

const rotate = (arr: any[], count: number): any[] => {
	count -= arr.length * Math.floor(count / arr.length);
	// eslint-disable-next-line prefer-spread
	arr.push.apply(arr, arr.splice(0, count));
	return arr;
};

// @ts-ignore
const mapToArray = (map: Record<any, any>): any[] => Array.from(map).map(([k, v]) => v);

const setToArray = (map: Set<any>): any[] => Array.from(map);

export default {
	splitAt,
	rotate,
	mapToArray,
	setToArray
};
