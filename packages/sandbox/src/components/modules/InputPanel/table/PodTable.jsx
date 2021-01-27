import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React from 'react';
import styled from 'styled-components';
import useEditContext, { EditContextProvider } from '../../../../contexts/EditContext';
import PodTableRowManager from './PodTableRowManager';

const StyledTableLabel = styled.div`
	width: 100%;
	padding: 16px 0 8px;
	border-bottom: 1px solid #ccc;
	display: flex;
	align-items: center;
	justify-content: space-between;
	& h3 {
		text-transform: capitalize;
	}	
`;

const TableLabel = ({ name, editable }) => {
	return (
		<StyledTableLabel>
			<h3>
				{name || 'Panel'}
			</h3>
			{editable && <EditButton />}
		</StyledTableLabel>
	);
};

const StyledPodTable = styled.table`
	text-align: center;
    border-collapse: collapse;
    margin: auto;
	width: 100%;
	
	& td, th {
		padding: 8px 4px;
	}

	& th {
		text-transform: uppercase;
		font-size: 80%;
	}

	& thead tr {
		border-bottom: 1px solid #ccc;
	}
`;


const HeaderRow = () => {
	const { isEditing } = useEditContext();
	return (<tr></tr>);
};

const PodTable = ({ name, editable }) => {

	return (
		<EditContextProvider>
			<TableLabel name={name} editable={editable} />
			<StyledPodTable>
				<thead>
					<HeaderRow />
				</thead>
				<tbody>
					<PodTableRowManager />
				</tbody>
			</StyledPodTable>
		</EditContextProvider>
	);
};

export default PodTable;
