
export const getListHelpers = (list, setList, i) => {
	const isLast = i === list.length - 1;
	const data = list[i];
	const setData = data => setList([
		...list.slice(0, i),
		data,
		...list.slice(i + 1)
	]);
	const onInsertAbove = data => setList([
		...list.slice(0, i),
		data,
		...list.slice(i)
	]);
	const onInsertAtEnd = data => setList([
		...list,
		data
	]);
	const onMoveUp = () => setList([
		...list.slice(0, i - 1),
		list[i],
		list[i - 1],
		...list.slice(i + 1)
	]);
	const onDelete = () => setList([
		...list.slice(0, i),
		...list.slice(i + 1)
	]);
	const onMoveDown = () => setList([
		...list.slice(0, i),
		list[i + 1],
		list[i],
		...list.slice(i + 2)
	]);

	return {
		isLast,
		data,
		setData,
		onInsertAbove,
		onInsertAtEnd,
		onMoveUp,
		onMoveDown,
		onDelete
	};
};

export default getListHelpers;
