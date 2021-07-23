
import React, { useEffect } from "react";
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

	.container {
		background: white;
		border-radius: 8px;

		position: fixed;
		top: 112px;
		bottom: 32px;
		width: 90%;
		max-width: 512px;

		position: relative;
		padding: 16px;
	}

	.header {
		border-bottom: 1px solid ${({ theme }) => theme.border};
		padding-bottom: 8px;

		> button {
			position: absolute;
			right: 8px;
			top: 8px;
		}
	}

	.body {
		padding-top: 8px;
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
			{modalContent && (
				<StyledModal>
					<div className="container">
						<div className="header">
							<h2>{modalContent.title}</h2>
							<IconButton iconId="close" onClick={closeModal} />
						</div>
						<div className="body">
							{modalContent.content}
						</div>
					</div>
				</StyledModal>
			)}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => React.useContext(ModalContext);
