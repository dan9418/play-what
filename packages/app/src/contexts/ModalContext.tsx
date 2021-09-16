
import React, { ReactNode } from "react";
import EditIntervalsModal from "../components/explore/modals/EditIntervalsModal";
import EditRootModal from "../components/explore/modals/EditRootModal";
import EditViewerModal from "../components/explore/modals/EditViewerModal";

export enum ModalId {
	None = 0,
	Root = 1,
	Intervals = 2,
	Viewer = 3
}

const MODAL_MAP = new Map<ModalId, ReactNode>([
	// eslint-disable-next-line
	[ModalId.Root, <EditRootModal />],
	// eslint-disable-next-line
	[ModalId.Intervals, <EditIntervalsModal />],
	// eslint-disable-next-line
	[ModalId.Viewer, <EditViewerModal />]
]);

interface IModelContext {
	modalId: ModalId,
	setModalId: (modalId: ModalId) => void,
	closeModal: () => void
}

const ModalContext = React.createContext<IModelContext>(null);


export const ModalContextProvider: React.FC = ({ children }) => {
	const [modalId, setModalId] = React.useState(ModalId.None);

	const closeModal = () => setModalId(ModalId.None);

	const modalContext = {
		modalId,
		setModalId,
		closeModal
	};

	const modal = MODAL_MAP.get(modalId) ?? null;

	return (
		<ModalContext.Provider value={modalContext}>
			{children}
			{modal}
		</ModalContext.Provider>
	);
};

export const useModalContext = (): IModelContext => React.useContext(ModalContext);
