import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React from 'react';
import styled from 'styled-components';
import { EditContextProvider } from '../../contexts/EditContext';
import ActionBox from './ActionBox';

const StyledSubpanelHeader = styled.div`
	width: 100%;
	padding: 8px 0;
	display: flex;
	align-items: center;
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
	padding: 8px 16px;
	border-radius: 2px;
	background-color: #f5f5f5;
`;

const Subpanel = ({ name, editable, actions, children }) => {
	return (
		<StyledSubpanel>
			<EditContextProvider>
				<SubpanelHeader name={name} editable={editable} />
				<ActionBox actions={actions} />
				{children}
			</EditContextProvider>
		</StyledSubpanel>
	);
};

export default Subpanel;
