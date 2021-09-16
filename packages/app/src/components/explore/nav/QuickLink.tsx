import React from "react";
import styled from 'styled-components';
import { useModalContext } from "../../../contexts/ModalContext";
import THEME from "../../../styles/theme";
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
	justify-content: space-between;

	.name-preview {
		margin-right: 24px;
	}

	.name {
		font-weight: bold;
		margin-bottom: 2px;
		color: ${({ theme }) => theme.text.dark};
	}

	.preview {
		color: ${({ theme }) => theme.clickable};
		font-size: 140%;
	}

	background-color: transparent;
	&:hover {
		background-color: rgba(255, 255, 255, 0.25);
	}
`;

interface IQuickLinkProps {
	name: string;
	preview?: string;
	modalId: any;
	closeMenu: Function;
}

const QuickLink: React.FC<IQuickLinkProps> = ({ name, preview, modalId, closeMenu }) => {

	const modalContext = useModalContext();

	return (
		<StyledQuickLink className="quick-link" type="button" onClick={() => {
			modalContext.setModalId(modalId);
			closeMenu();
		}}>
			<div className="name-preview">
				<div className="name">{name}</div>
				<div className="preview">{preview}</div>
			</div>
			<Icon iconId="edit" color={THEME.text.dark} />
		</StyledQuickLink>
	);
};

export default QuickLink;
