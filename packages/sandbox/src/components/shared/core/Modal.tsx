
import React from "react";
import styled from "styled-components";
import THEME from "../../../styles/theme";
import ButtonInput from "../inputs/ButtonInput";
import IconButton from "../inputs/IconButton";

const StyledModal = styled.div`
	//background: ${THEME.card};
	position: fixed;
	top: 32px;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 10000;

	.header, .footer {
		position: absolute;
		left: 0;
		right: 0;
		height: 64px;
	}

	.container {
		background: white;

		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;

		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		max-width: 1024px;

		padding: 64px 0;
		
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
	}

	.header {
		top: 0;

		border-bottom: 1px solid ${({ theme }) => theme.border};
		background-color: ${THEME.card};

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
	}

	.body {
		padding: 16px;
		overflow: auto;
		height: 100%;
		width: 100%;
	}

	.footer {
		bottom: 0;
		
		border-top: 1px solid ${({ theme }) => theme.border};

		display: flex;
		align-items: center;
		justify-content: flex-end;

		padding: 0 16px;

		button:not(:last-child) {
			margin-right: 16px;
		}
	}
`;

export const Modal: React.FC<any> = ({ title, children, closeModal, onSubmit }) => {
	return (
		<StyledModal>
			<div className="container">
				<div className="header">
					<h2>{title}</h2>
					<IconButton iconId="close" onClick={closeModal} color="#555" />
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
