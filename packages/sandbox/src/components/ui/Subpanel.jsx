import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React from 'react';
import styled from 'styled-components';
import { EditContextProvider } from '../../contexts/EditContext';
import ActionBox from './ActionBox';

const StyledSubpanelHeader = styled.div`
	width: 100%;
	padding: 8px 16px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ccc;

	& h3 {
		text-transform: capitalize;
	}

	& button {
		margin-left: auto;
	}
`;

const SubpanelHeader = ({ name, editable }) => {
	return (
		<StyledSubpanelHeader>
			<h3>
				{name || 'Panel'}
			</h3>
			{editable && <EditButton />}
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

const Subpanel = ({ name, editable, actions, children }) => {
	return (
		<StyledSubpanel>
			<EditContextProvider>
				<SubpanelHeader name={name} editable={editable} />
				<div className="body">
					<ActionBox actions={actions} />
					{children}
				</div>
			</EditContextProvider>
		</StyledSubpanel>
	);
};

export default Subpanel;
