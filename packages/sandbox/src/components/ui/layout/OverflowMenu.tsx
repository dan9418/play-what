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

const StyledModal = styled.div`
	position: fixed;
	width: 100%;
	padding: 16px;
	padding-top: 32px;
	z-index: 3000;
	background-color: #f5f5f5;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
	left: 0;
	top: 50%;
	bottom: 0;
	@media(min-width: 512px) {
		top: 25%;
		bottom: unset;
		left: 25%;
		max-width: 512px;
		border-radius: 16px;
	}

	.btn-close {
		position: absolute;
		top: 8px;
		right: 8px;
	}
`;

const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 2999;
	
	background-color: rgba(0, 0, 0, 0.2);
`;

const Modal = ({ children, onClose }) => {
	return (
		<>
			<StyledModal>
				<IconButton iconId="close" onClick={onClose} />
				{children}
			</StyledModal>
			<StyledOverlay />
		</>
	);
};

const ListItem = ({ action, setModalComponent }) => {
	return (
		<li>
			<button type="button" onClick={() => setModalComponent(() => action.component)}>{action.name}</button>
		</li>
	);
};

const getActionItems = (actions, setModalComponent) => {
	const items = [];
	for (let i = 0; i < actions.length; i++) {
		const action = actions[i];
		items.push(
			<ListItem key={i} action={action} setModalComponent={setModalComponent} />
		);
	}
	return items;
}

const OverflowMenu = ({ actions, pathHead, setPathHeadConfig }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [ModalComponent, setModalComponent] = useState(null);

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
			{isOpen && <StyledOverflowMenu>{getActionItems(actions, setModalComponent)}</StyledOverflowMenu>}
			{ModalComponent !== null && <Modal onClose={() => setModalComponent(null)}>
				<ModalComponent pathHead={pathHead} setPathHeadConfig={setPathHeadConfig} />
			</Modal>}
		</StyledWrapper>
	);
};

export default OverflowMenu;
