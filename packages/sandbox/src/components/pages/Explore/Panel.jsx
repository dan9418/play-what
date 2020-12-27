import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React, { useState } from "react";
import styled from 'styled-components';
import { EditContextProvider } from "../../../contexts/EditContext";

const StyledPanel = styled.div`
	width: 100%;
	max-width: 512px;
	@media(min-width: 512px) {
		margin: 0 16px;
	}
	& .header {
		padding: 0 16px 16px 16px;
		margin-bottom: 16px;
		border-bottom: 1px solid #ccc;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	& .body {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex-wrap: wrap;
	}
`;

export const PanelHeader = ({ name }) => {
	return (
		<div className='header'>
			<h2>
				{name || 'Panel'}
			</h2>
			<EditButton  />
		</div>
	);
};


export const Panel = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<StyledPanel>
			<EditContextProvider>
				<PanelHeader isOpen={isOpen} setIsOpen={setIsOpen} name={name} />
				{isOpen && (
					<div className='body'>
						{children}
					</div>
				)}
			</EditContextProvider>
		</StyledPanel>
	);
}

export default Panel;
