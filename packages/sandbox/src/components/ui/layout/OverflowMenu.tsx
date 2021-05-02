import React, { useState } from "react";
import styled from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';

const StyledWrapper = styled.div`
	position: relative;
`;

const StyledOutClickArea = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 98;
`;

const StyledOverflowMenu = styled.div`
	position: absolute;
	top: 100%;
	z-index: 99;

	padding: 8px;
	background-color: white;
	border-radius: 8px;

	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

	${({ $direction }) => `${$direction}: 0;`}

	li {
		> button {
			text-align: left;
			width: 100%;
			border: 0;
			background-color: transparent;
			appearance: none;
			padding: 8px;
			cursor: pointer;
			border-radius: 4px;

			:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}
	}
	
	width: 256px;
	
`;

const ListItem = ({ action, onClose }) => {
	const onClick = () => {
		onClose();
		action.onClick();
	};

	return (
		<li>
			<button type="button" onClick={onClick}>{action.name}</button>
		</li>
	);
};

const getActionItems = (items, onClose) => {
	const listItems = [];
	for (let i = 0; i < items.length; i++) {
		const action = items[i];
		listItems.push(
			<ListItem key={i} action={action} onClose={onClose} />
		);
	}
	return listItems;
}

export interface IAction {
	name: string;
	onClick: any;
}

interface IOverflowMenuProps {
	items?: IAction[];
	iconProps?: any;
	direction?: 'left' | 'right'
}

const OverflowMenu: React.FC<IOverflowMenuProps> = ({ items = [], iconProps = {}, direction = 'right' }) => {
	const [isOpen, setIsOpen] = useState(false);

	const onClose = () => setIsOpen(false);

	return (
		<StyledWrapper className="overflow">
			{/* @ts-ignore */}
			<IconButton iconId={'more'} onClick={() => setIsOpen(true)} className="button-close-overflow" iconProps={iconProps} />
			{isOpen &&
				<>
					<StyledOverflowMenu $direction={direction}>{getActionItems(items, onClose)}</StyledOverflowMenu>
					<StyledOutClickArea onClick={onClose} />
				</>
			}
		</StyledWrapper>
	);
};

export default OverflowMenu;
