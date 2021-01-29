import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import ExpandButton from '@pw/react/src/ui/ButtonInput/ExpandButton';
import React, { useState } from 'react';
import styled from 'styled-components';
import { EditContextProvider } from '../../contexts/EditContext';
import ActionBox from './ActionBox';

const StyledSubpanelHeader = styled.h3`
	width: 100%;
	padding: 8px 16px;
	display: flex;
	align-items: center;
	white-space: nowrap;

	${({ $showBorder }) => $showBorder && 'border-bottom: 1px solid #ccc;'}
	

	& >:nth-child(2) {
		font-weight: normal;
		color: #555;
		font-size: 80%;
		margin-left: 8px;
	}

	& >:nth-child(3) {
		width: 100%	
	}

	& button {
		margin: 0 8px;
	}
`;

const SubpanelHeader = ({ name, caption, isOpen, setIsOpen, editable }) => {
	return (
		<StyledSubpanelHeader $showBorder={isOpen}>
			<span>{name}</span>
			<span>{caption}</span>
			<div />
			{isOpen && editable && <EditButton />}
			<ExpandButton isOpen={isOpen} setIsOpen={setIsOpen} />
		</StyledSubpanelHeader>
	);
};

const StyledSubpanel = styled.section`
	border: 1px solid #ccc;
	border-radius: 2px;
	background-color: #f5f5f5;
	& > .body {
		padding: 8px 16px;
	}
`;

const Subpanel = ({ name, caption, editable, actions, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<StyledSubpanel>
			<EditContextProvider>
				<SubpanelHeader name={name} caption={caption} editable={editable} isOpen={isOpen} setIsOpen={setIsOpen} />
				{isOpen && (
					<div className="body">
						<ActionBox actions={actions} />
						{children}
					</div>
				)}
			</EditContextProvider>
		</StyledSubpanel>
	);
};

export default Subpanel;
