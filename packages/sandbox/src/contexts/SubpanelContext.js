import React, { createContext, useContext } from 'react';

const SubpanelContext = createContext(null);

export const SubpanelContextProvider = ({ dataList, setDataList, i, children }) => {
	const data = dataList[i];
	const setData = data => setDataList([...dataList.slice(0, i), data, ...dataList.slice(i + 1)]);

	const onInsertAbove = () => setDataList([...dataList.slice(0, i), dataList[i], ...dataList.slice(i)]);
	const onInsertBelow = () => setDataList([...dataList, dataList[dataList.length - 1]]);
	const onMoveUp = () => setDataList([...dataList.slice(0, i - 1), dataList[i], dataList[i - 1], ...dataList.slice(i + 1)]);
	const onDelete = () => setDataList([...dataList.slice(0, i), ...dataList.slice(i + 1)]);
	const onMoveDown = () => setDataList([...dataList.slice(0, i), dataList[i + 1], dataList[i], ...dataList.slice(i + 2)]);

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
