
import React from "react";
import styled from "styled-components";
import ButtonInput from "../inputs/ButtonInput";
import IconButton from "../inputs/IconButton";
import { StyledHighlightBox } from "../ui/HighlightBox";

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
	}

	.container {
		background: white;

		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;

		position: absolute;
		top: 112px;
		bottom: 16px;

		width: 100%;
		max-width: 1024px;
		margin: auto;
		
		@media(min-width: 512px) {
			border-radius: 8px;
		}

	}

	.header {
		border-bottom: 1px solid ${({ theme }) => theme.border};
		background-color: ${({ theme }) => theme.medium};
		color: white;

		padding-bottom: 8px;
		
		@media(min-width: 512px) {
			border-radius: 8px 8px 0 0;
		}

		padding: 16px 16px 8px;

		> button {
			position: absolute;
			right: 8px;
			top: 8px;
		}
	}

	.body {
		padding: 16px;
		overflow: auto;
		height: 100%;
		width: 100%;
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
