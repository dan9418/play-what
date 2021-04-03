import React, { useState } from "react";
import styled, { css } from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';

const StyledWrapper = styled.div`
	position: relative;
`;

const StyledOverflowMenu = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	z-index: 99;

	padding: 8px;
	background-color: white;
	border-radius: 8px;

	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

	li {
		padding: 8px;
		color: #555;
		cursor: pointer;

		:hover {
			color: black;
		}
	}
	
	width: 256px;
	
`;

const getActionItems = actions => {

	const items = [];
	for (let i = 0; i < actions.length; i++) {
		const action = actions[i];
		items.push(
			<li key={i}>
				{action.name}
			</li>
		);
	}
	return items;
}

const OverflowMenu = ({ actions }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<StyledWrapper>
			<IconButton iconId={'more'} onClick={() => setIsOpen(!isOpen)} />
			{isOpen && <StyledOverflowMenu>{getActionItems(actions)}</StyledOverflowMenu>}
		</StyledWrapper>
	);
};

export default OverflowMenu;
