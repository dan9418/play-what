import ButtonInput from "@pw/ui/src/inputs/ButtonInput";
import React from "react";
import styled from 'styled-components';
import { useModalContext } from "../../../contexts/ModalContext";

export const StyledQuickLink = styled.div`
	height: 100%;
	padding: 0 16px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	white-space: nowrap;

	.name-advanced {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 8px 0;
		button {
			background: transparent;
			&:hover {
				background: rgba(0,0,0,0.05);
			}
			color: ${({ theme }) => theme.clickable};
			padding: 4px 8px;
			margin-left: 8px;
			font-size: 80%;
		}
	}

	.name {
		padding: 4px 0;
		font-weight: bold;
		font-size: 120%;
		color: ${({ theme }) => theme.text.dark};
	}

	.preview {
		color: ${({ theme }) => theme.clickable};
		font-size: 140%;
	}

	background-color: transparent;
	/*&:hover {
		background-color: rgba(255, 255, 255, 0.25);
	}*/
`;

interface IQuickLinkProps {
	name: string;
	preview?: string;
	modalId: any;
	closeMenu: Function;
}

const QuickLink: React.FC<IQuickLinkProps> = ({ name, children, modalId, closeMenu }) => {

	const modalContext = useModalContext();

	return (
		<StyledQuickLink className="quick-link" type="button">
			<div className="name-advanced">
				<div className="name">{name}</div>
				<ButtonInput onClick={() => {
					modalContext.setModalId(modalId);
					closeMenu();
				}}>
					Advanced
				</ButtonInput>
			</div>
			<div className="content">{children}</div>
			{/*<IconButton iconId="edit" color={THEME.text.dark} onClick={() => {
				modalContext.setModalId(modalId);
				closeMenu();
			}} />*/}
		</StyledQuickLink>
	);
};

export default QuickLink;
