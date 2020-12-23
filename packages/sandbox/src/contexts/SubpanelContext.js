import React, { createContext, useContext } from 'react';

const SubpanelContext = createContext(null);

const getListFunctions = (list, setList, i) => {
	const setData = data => setDataList([
		...dataList.slice(0, i),
		data,
		...dataList.slice(i + 1)
	]);
	const onInsertAbove = () => setList([
		...list.slice(0, i),
		list[i],
		...list.slice(i)
	]);
	const onInsertBelow = () => setList([
		...list,
		list[list.length - 1]
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
		setData,
		onInsertAbove,
		onInsertBelow,
		onMoveUp,
		onMoveDown,
		onDelete
	};
};

export const SubpanelContextProvider = ({ dataList, setDataList, i, children }) => {
	const data = dataList[i];

	const {
		setData,
		onInsertAbove,
		onInsertBelow,
		onMoveUp,
		onMoveDown,
		onDelete
	} = getListFunctions(dataList, setDataList, i);

	const subpanelContext = {
		data,
		setData,
		onInsertAbove,
		onInsertBelow,
		onMoveUp,
		onDelete,
		onMoveDown
	};

	return (
		<SubpanelContext.Provider value={subpanelContext}>
			{children}
		</SubpanelContext.Provider>
	);
}

const useSubpanelContext = () => useContext(SubpanelContext);

export default useSubpanelContext;
