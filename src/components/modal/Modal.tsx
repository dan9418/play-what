
import React from "react";
import styled from "styled-components";
import { useModalContext } from "../../../contexts/ModalContext";
import ButtonInput from "../inputs/ButtonInput";

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
		max-width: 1920px;
		margin: auto;
		
		@media(min-width: 512px) {
			border-radius: 8px;
			top: 40px;
			bottom: 8px;
			width: 98%;
		}

	}

	.header {
		background: ${props => props.theme.brand.nav};
		color: ${({ theme }) => theme.white};

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

			background: ${props => props.theme.dark3};

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

		background: ${props => props.theme.light1};
		border-left: 1px solid ${({ theme }) => theme.utils.border};
		border-right: 1px solid ${({ theme }) => theme.utils.border};
	}

	.footer {
		background: ${props => props.theme.light1};

		padding: 8px 16px 16px;
		border: 1px solid ${({ theme }) => theme.utils.border};

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
			background-color: ${({ theme }) => theme.light3};
			color: ${({ theme }) => theme.dark1};
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
					<button /*iconId="close"*/ onClick={modalContext.closeModal} color="white" />
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