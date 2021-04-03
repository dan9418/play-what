import React, { useEffect, useState } from "react";
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
			<IconButton iconId={'more'} onClick={onClick} className="button-close-overflow" />
			{isOpen && <StyledOverflowMenu>{getActionItems(actions)}</StyledOverflowMenu>}
		</StyledWrapper>
	);
};

export default OverflowMenu;
