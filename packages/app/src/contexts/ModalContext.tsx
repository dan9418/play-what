
import React from "react";
import EditModal from "../components/create/edit-panel/EditPanel";

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
			{isOpen && <EditModal />}
		</ModalContext.Provider>
	);
};

export const useModalContext = (): IModelContext => React.useContext(ModalContext);
