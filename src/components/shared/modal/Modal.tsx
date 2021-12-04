
import React from "react";
import styled from "styled-components";
import ButtonInput from "../../../../ui/inputs/ButtonInput";
import IconButton from "../../../../ui/inputs/IconButton";
import { useModalContext } from "../../../contexts/ModalContext";
import THEME from "../../../styles/theme";

const StyledModal = styled.div`
	background: rgba(0, 0, 0, .2);
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 10000;
	display: flex;
	align-items: center;
	justify-content: center;

	.header, .footer {
		width: 100%;
		height: 64px;

		position: absolute;
	}

	.container {

		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;

		position: absolute;
		top: 0;
		bottom: 0;
		
		width: 100%;
		max-width: 1024px;
		margin: auto;
		
		@media(min-width: 512px) {
			border-radius: 8px;
			top: 40px;
			bottom: 8px;
			width: 98%;
		}

	}

	.header {
		//background: ${THEME.surface.gradient};
		background: ${THEME.surface.nav};
		color: white;

		background-color: ${({ theme }) => theme.medium};
		padding: 0 16px;

		display: flex;
		align-items: center;
		justify-content: space-between;

		text-transform: uppercase;
		letter-spacing: 2px;

		top: 0;
		
		@media(min-width: 512px) {
			border-radius: 8px 8px 0 0;
		}

		> button {
			position: absolute;
			right: 0;
			top: 0;

			background: ${THEME.text.dark};

			height: 64px;
			width: 64px;
			border-radius: 0 8px 0 0;
		}
	}

	.body {

		margin: 64px 0;
		padding: 0 16px 228px;
		overflow: auto;
		height: 100%;
		width: 100%;

		background: ${THEME.surface.bg};
		border-left: 1px solid ${({ theme }) => theme.border};
		border-right: 1px solid ${({ theme }) => theme.border};
	}

	.footer {
		background: ${THEME.surface.bg};

		padding: 8px 16px 16px;
		border: 1px solid ${({ theme }) => theme.border};

		bottom: 0;

		@media(min-width: 512px) {
			border-radius: 0 0 8px 8px;
		}

		display: flex;
		align-items: center;
		justify-content: flex-end;

		button {
			padding: 8px 32px;
		}

		button:not(:last-child) {
			margin-right: 8px;
		}
		button:first-child {
			background-color: ${({ theme }) => theme.surface.highlight};
			color: ${({ theme }) => theme.text.mediumDark};
		}
	}
`;

export const Modal: React.FC<any> = ({ title, children, onApply, onDone }) => {

	const modalContext = useModalContext();

	return (
		<StyledModal>
			<div className="container">
				<div className="header">
					<h2>{title}</h2>
					<IconButton iconId="close" onClick={modalContext.closeModal} color="white" />
				</div>
				<div className="body">
					{children}
				</div>
				<div className="footer">
					<ButtonInput onClick={modalContext.closeModal}>Cancel</ButtonInput>
					<ButtonInput onClick={onApply}>Apply</ButtonInput>
					<ButtonInput onClick={onDone}>Done</ButtonInput>
				</div>
			</div>
		</StyledModal>
	);
};
