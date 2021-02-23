import React, { useState } from 'react';
import styled from 'styled-components';
import { EditContextProvider } from '../../../contexts/EditContext';
import EditButton from '../inputs/buttons/EditButton';
import ExpandButton from '../inputs/buttons/ExpandButton';

const StyledSubpanelHeader = styled.h3`
	
	padding: 8px;
	
	white-space: nowrap;

	${({ $showBorder }) => $showBorder && 'border-bottom: 1px solid #ccc;'}

	.top {
		display: flex;
		align-items: center;
		width: 100%;
	}
	
	.caption {
		font-weight: normal;
		color: #555;
		font-size: 80%;
		margin-left: 8px;
	}

	.preview {
		font-weight: normal;
		color: ${({ theme }) => theme.accent};
		font-size: 70%;
	}

	.spacer {
		width: 100%	
	}

	& button {
		margin-left: 8px;
	}

`;

const SubpanelHeader = ({ name, caption, preview, isOpen, setIsOpen, editable }) => {
	return (
		<StyledSubpanelHeader $showBorder={isOpen}>
			<div className="top">
				<span className="name">{name}</span>
				<span className="caption">{caption}</span>
				<div className="spacer" />
				{isOpen && editable && <EditButton />}
				<ExpandButton isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			<div className="preview">
				{preview}
			</div>
		</StyledSubpanelHeader>
	);
};

const StyledSubpanel = styled.section`
	width: 100%;
	max-width: 512px;
	border: 1px solid #ccc;
	border-radius: 2px;
	background-color: #f5f5f5;
	& > .subpanel-body {
		padding: 8px;
	}
`;

const Subpanel = ({ name, caption, preview, editable = true, actions, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<StyledSubpanel>
			<EditContextProvider>
				<SubpanelHeader name={name} caption={caption} preview={preview} editable={editable} isOpen={isOpen} setIsOpen={setIsOpen} />
				{isOpen && (
					<pre className="subpanel-body">
						{children}
					</pre>
				)}
			</EditContextProvider>
		</StyledSubpanel>
	);
};

export default Subpanel;
