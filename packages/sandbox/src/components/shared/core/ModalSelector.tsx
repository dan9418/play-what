
import React from "react";
import styled from "styled-components";
import { ModalId, useModalContext } from "../../../contexts/ModalContext";
import THEME from "../../../styles/theme";
import ButtonInput from "../inputs/ButtonInput";

const StyledModalSelector = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding-bottom: 8px;
	gap: 8px;

	button {
		font-weight: bold;
		font-size: 120%;
		color: ${THEME.primary};
		background-color: transparent;
		width: 100%;

		&:hover {
			background-color: rgba(0,0,0,0.1)
		}
	}

	button.active {
		color: white;
		background-color: ${THEME.active};

		&:hover {
			background-color: white;
			color: ${THEME.active};
		}
	}
`;

export const ModalSelector: React.FC<any> = () => {

	const modalContext = useModalContext();

	return (
		<StyledModalSelector>
			<ButtonInput
				onClick={() => modalContext.setModalId(ModalId.Root)}
				className={modalContext.modalId === ModalId.Root ? "active" : ''}
			>
				Root
			</ButtonInput>
			<ButtonInput
				onClick={() => modalContext.setModalId(ModalId.Intervals)}
				className={modalContext.modalId === ModalId.Intervals ? "active" : ''}
			>
				Intervals
			</ButtonInput>
			<ButtonInput
				onClick={() => modalContext.setModalId(ModalId.Viewer)}
				className={modalContext.modalId === ModalId.Viewer ? "active" : ''}
			>
				Viewer
			</ButtonInput>
		</StyledModalSelector>
	);
};
