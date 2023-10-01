
import React from "react";

interface IModelContext {
	isOpen: boolean,
	openModal: () => void
	closeModal: () => void
}

const ModalContext = React.createContext<IModelContext>(null);

export const ModalContextProvider: React.FC = ({ children }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const modalContext = {
		isOpen,
		openModal,
		closeModal
	};

	return (
		<ModalContext.Provider value={modalContext}>
			{children}
			{isOpen && <div>modal</div>}
		</ModalContext.Provider>
	);
};

export const useModalContext = (): IModelContext => React.useContext(ModalContext);
