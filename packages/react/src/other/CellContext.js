import Cell from '@pw/core/src/modules/models/podList/Cell';
import React, { createContext, useContext, useState } from 'react';

const CellContext = createContext(null);

export const CellContextProvider = ({ children }) => {

	const [cell, setCell] = useState(new Cell({}));

	const cellContext = {
		cell,
		setCell
	};

	return (
		<CellContext.Provider value={cellContext}>
			{children}
		</CellContext.Provider>
	);
}

const useCellContext = () => useContext(CellContext);

export default useCellContext;
