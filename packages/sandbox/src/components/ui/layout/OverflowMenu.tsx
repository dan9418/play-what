import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';

const StyledWrapper = styled.div`
	position: relative;
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
			color: #555;
			cursor: pointer;

			:hover {
				color: black;
			}
		}
	}
	
	width: 256px;
	
`;

const ListItem = ({ action }) => {
	return (
		<li>
			<button type="button" onClick={action.onClick}>{action.name}</button>
		</li>
	);
};

const getActionItems = (items) => {
	const listItems = [];
	for (let i = 0; i < items.length; i++) {
		const action = items[i];
		listItems.push(
			<ListItem key={i} action={action} />
		);
	}
	return listItems;
}

interface IOverflowMenuProps {
	items?: any[];
	iconProps?: any;
	direction?: 'left' | 'right'
}

const OverflowMenu: React.FC<IOverflowMenuProps> = ({ items = [], iconProps = {}, direction = 'right' }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;

		const listener = document.addEventListener(
			"click",
			(e) => {
				// @ts-ignore
				const isBtnClick = e.target.matches(".button-close-overflow");
				// @ts-ignore
				const isOutClick = !e.target.closest(".overflow");

				if (isBtnClick || isOutClick) setIsOpen(false);
			},
			false
		);
		// @ts-ignore
		return () => document.removeEventListener("click", listener);

	}, [isOpen]);

	const onClick = isOpen ? null : () => setIsOpen(true);

	return (
		<StyledWrapper className="overflow">
			{/* @ts-ignore */}
			<IconButton iconId={'more'} onClick={onClick} className="button-close-overflow" iconProps={iconProps} />
			{isOpen && <StyledOverflowMenu $direction={direction}>{getActionItems(items)}</StyledOverflowMenu>}
		</StyledWrapper>
	);
};

export default OverflowMenu;
