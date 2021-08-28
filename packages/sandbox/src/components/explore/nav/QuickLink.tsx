import React from "react";
import styled from 'styled-components';
import { useModalContext } from "../../../contexts/ModalContext";
import Icon from "../../shared/ui/Icon";

export const StyledQuickLink = styled.button`
	height: 100%;
	padding: 0 16px;

	white-space: nowrap;
	cursor: pointer;
	border: none;
	text-align: left;

	display: flex;
	align-items: center;

	.name {
		font-weight: bold;
		margin-bottom: 2px;
		color: ${({ theme }) => theme.primary};
	}

	.preview {
		color: ${({ theme }) => theme.accent};
		font-size: 140%;
	}

	svg {
		margin-left: 16px;

		fill: ${({ theme }) => theme.primary};
		* {
			fill: ${({ theme }) => theme.primary};
		}
	}

	background-color: transparent;
	&:hover {
		background-color: rgba(255, 255, 255, 0.25);
	}
`;

interface IQuickLinkProps {
	name: string;
	preview?: string;
	modal: any;
}

const QuickLink: React.FC<IQuickLinkProps> = ({ name, preview, modal, children }) => {

	const modalContext = useModalContext();

	return (
		<StyledQuickLink className="quick-link" type="button" onClick={() => modalContext.setModal(modal)}>
			<div className="name-preview">
				<div className="name">{name}</div>
				<div className="preview">{preview}</div>
			</div>
			<Icon iconId="edit" />
		</StyledQuickLink>
	);
};

export default QuickLink;
