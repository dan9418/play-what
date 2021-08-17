
import React from "react";
import styled from "styled-components";
import ButtonInput from "../ui/inputs/buttons/ButtonInput";
import IconButton from "../ui/inputs/buttons/IconButton";

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
		top: 16px;
		bottom: 32px;
		width: 90%;
		max-width: 768px;
		max-height: 768px;
		overflow: auto;

		position: relative;
	}

	.header {
		border-bottom: 1px solid ${({ theme }) => theme.border};
		background-color: ${({ theme }) => theme.medium};
		color: white;

		padding-bottom: 8px;

		padding: 16px 16px 8px;

		> button {
			position: absolute;
			right: 8px;
			top: 8px;
		}
	}

	.body {
		padding: 0 16px;
	}

	.footer {
		padding: 8px 16px 16px;
		border-top: 1px solid ${({ theme }) => theme.border};

		display: flex;
		align-items: center;
		justify-content: flex-end;

		button:not(:last-child) {
			margin-right: 8px;
		}
	}
`;

export const Modal: React.FC<any> = ({ title, children, closeModal, onSubmit }) => {
	return (
		<StyledModal>
			<div className="container">
				<div className="header">
					<h2>{title}</h2>
					<IconButton iconId="close" onClick={closeModal} color="white" />
				</div>
				<div className="body">
					{children}
				</div>
				<div className="footer">
					<ButtonInput onClick={closeModal}>Cancel</ButtonInput>
					<ButtonInput onClick={onSubmit}>Apply</ButtonInput>
				</div>
			</div>
		</StyledModal>
	);
};

export const useModalContext = () => React.useContext(ModalContext);
