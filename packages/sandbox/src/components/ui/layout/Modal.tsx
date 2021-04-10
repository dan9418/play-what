import React from "react";
import styled from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';

const StyledModal = styled.div`
	position: fixed;
	width: 100%;
	padding: 0 16px;
	z-index: 3000;
	background-color: #f5f5f5;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
	left: 0;
	top: 50%;
	bottom: 0;
	@media(min-width: 512px) {
		top: 25%;
		bottom: unset;
		left: 25%;
		max-width: 512px;
		border-radius: 16px;
	}
`;

const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 2999;
	
	background-color: rgba(0, 0, 0, 0.2);
`;

const StyledModalHeader = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding: 16px 0;
	border-bottom: 1px solid #ccc;

	.description {
		font-weight: normal;
		color: ${({ theme }) => theme.accent};
		font-size: 80%;
	}
`;

const Modal = ({ children, onClose, name, description }) => {
	return (
		<>
			<StyledModal>
				<StyledModalHeader>
					<div>
						<h3 className="name">{name}</h3>
						<div className="description">{description}</div>
					</div>
					<IconButton iconId="close" onClick={onClose} />
				</StyledModalHeader>
				{children}
			</StyledModal>
			<StyledOverlay />
		</>
	);
};

export default Modal;
