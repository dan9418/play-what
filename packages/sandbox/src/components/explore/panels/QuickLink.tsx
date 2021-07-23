import React from "react";
import styled from 'styled-components';
import { useModalContext } from "../../../contexts/ModalContext";
import IconButton from "../../shared/ui/inputs/buttons/IconButton";

const StyledQuickLink = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 64px;
	
	> div {
		display: flex;
		&.name-preview {
			width: 100%;
			padding-right: 16px;
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
		<StyledQuickLink className="quick-link">
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
				<IconButton iconId="edit" onClick={() => modalContext.setModalContent(modal)} />
			</div>
		</StyledQuickLink>
	);
};

export default QuickLink;
