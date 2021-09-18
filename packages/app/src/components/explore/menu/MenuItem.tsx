import React from "react";
import styled from 'styled-components';
import ButtonInput from "../../../../../ui/src/inputs/ButtonInput";
import { useModalContext } from "../../../contexts/ModalContext";

export const StyledMenuItem = styled.div`
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

interface IMenuItemProps {
	name: string;
	preview?: string;
	closeMenu: Function;
}

const MenuItem: React.FC<IMenuItemProps> = ({ name, children, closeMenu }) => {

	const modalContext = useModalContext();

	return (
		<StyledMenuItem className="quick-link" type="button">
			<div className="name-advanced">
				<div className="name">{name}</div>
				<ButtonInput onClick={() => {
					modalContext.openModal();
					closeMenu();
				}}>
					Advanced
				</ButtonInput>
			</div>
			<div className="content">{children}</div>
		</StyledMenuItem>
	);
};

export default MenuItem;
