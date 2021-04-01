const splitAt = (arr: (any[] | string), i: number): string[] | any[] => [arr.slice(0, i), arr.slice(i)];

const rotate = (arr: any[], count: number): any[] => {
	count -= arr.length * Math.floor(count / arr.length);
	// eslint-disable-next-line prefer-spread
	arr.push.apply(arr, arr.splice(0, count));
	return arr;
};

export default {
	splitAt,
	rotate
};
