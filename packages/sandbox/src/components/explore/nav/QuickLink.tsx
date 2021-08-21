import React from "react";
import styled from 'styled-components';
import { useModalContext } from "../../../contexts/ModalContext";
import Icon from "../../shared/ui/Icon";

const StyledQuickLink = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	padding: 0 16px;
	white-space: nowrap;

	cursor: pointer;
	border: none;
	background-color: transparent;
	&:hover {
		background-color: rgba(255, 255, 255, 0.25);
	}
	
	> div {
		display: flex;
		&.name-preview {
			width: 100%;
			padding-right: 8px;
			flex-direction: column;
			.name {
				font-weight: bold;
			}
			.preview {
				color: ${({ theme }) => theme.accent};
			}
		}
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
				<h3 className="name">
					{name}
				</h3>
				<div className="preview">
					{preview}
				</div>
				{children}
			</div>
			<div>
				<Icon iconId="edit" />
			</div>
		</StyledQuickLink>
	);
};

export default QuickLink;
