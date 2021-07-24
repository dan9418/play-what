
import React from "react";

const ModalContext = React.createContext(null);

export const ModalContextProvider: React.FC = ({ children }) => {
	const [modal, setModal] = React.useState(null);

	const closeModal = () => setModal(null);

	const modalContext = {
		setModal,
		closeModal
	};

	return (
		<ModalContext.Provider value={modalContext}>
			{children}
			{modal}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => React.useContext(ModalContext);
