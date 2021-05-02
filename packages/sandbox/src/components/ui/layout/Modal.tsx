import { ModelId } from "@pw/core/src/models/Model.constants";
import React from "react";
import styled from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';

const StyledModal = styled.div`
	width: 100%;
	height: 50%;
	padding: 0 16px;
	background-color: ${({ theme }) => theme.card};
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

	@media(min-width: 512px) {
		height: unset;
		max-width: 512px;
		border-radius: 16px;
	}

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 3000;
	@media(min-width: 512px) {
		bottom: 50%;
		margin: auto;
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
	border-bottom: 1px solid ${({ theme }) => theme.border};

	.description {
		font-weight: normal;
		color: ${({ theme }) => theme.accent};
		font-size: 80%;
	}
`;

export interface IModalAction {
	name: string;
	description: string;
	component: any;
	props?: any;
	validTypes?: ModelId[]
}

interface IModalProps {
	name: string;
	description: string;
	onClose: any;
	children: any;
}

const Modal: React.FC<IModalProps> = ({ children, onClose, name, description }) => {
	return (
		<>
			<StyledOverlay onClick={onClose} />
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
		</>
	);
};

export default Modal;
