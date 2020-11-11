import React, { createContext, useContext, useState } from 'react';

const EditContext = createContext(null);

export const EditContextProvider = ({ children }) => {
	const [isEditing, setIsEditing] = useState(false);
	const editContext = { isEditing, setIsEditing };
	return (
		<EditContext.Provider value={editContext}>
			{children}
		</EditContext.Provider>
	);
}

const useEditContext = () => useContext(EditContext);

export default useEditContext;
