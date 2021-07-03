
import React from "react";
import styled from "styled-components";
import IconButton from "../components/shared/ui/inputs/buttons/IconButton";

const ModalContext = React.createContext(null);

const StyledModal = styled.div`
	background: rgba(0, 0, 0, .2);
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 1001;
	display: flex;
	align-items: center;
	justify-content: center;

	> div {
		background: white;
		border-radius: 8px;
		margin: 8px;
		height: 90%;
		width: 90%;
		margin-top: 32px;
		position: relative;
		max-width: 512px;
		padding: 16px;

		> button {
			position: absolute;
			right: 8px;
			top: 8px;
		}
	}
`;

export const ModalContextProvider: React.FC = ({ children }) => {
	const [modalContent, setModalContent] = React.useState(null);

	const closeModal = () => setModalContent(null);

	const modalContext = {
		modalContent,
		setModalContent,
		closeModal
	};

	return (
		<ModalContext.Provider value={modalContext}>
			{children}
			{modalContent && <StyledModal onClick={closeModal}><div><IconButton iconId="close" onClick={closeModal} />{modalContent}</div></StyledModal>}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => React.useContext(ModalContext);
