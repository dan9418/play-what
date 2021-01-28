import Meter from '@pw/react/src/Meter/Meter';
import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React from 'react';
import styled from 'styled-components';
import useEditContext, { EditContextProvider } from '../../../../contexts/EditContext';
import PodTableActionBox from './PodTableActionBox';
import PodTableRowManager from './PodTableRowManager';

const StyledTableLabel = styled.div`
	width: 100%;
	padding: 16px 0 8px;
	display: flex;
	align-items: center;
	& h3 {
		text-transform: capitalize;
	}

	& button {
		margin-left: auto;
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
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
`;

const HEADERS = {
	note: [
		'#',
		'Name',
		'p',
		'd',
		'freq'
	],
	interval: [
		'#',
		'Name',
		'p',
		'd',
		'ratio'
	]
};

const HeaderRow = ({ podType }) => {
	const { isEditing } = useEditContext();
	const headers = [...HEADERS[podType]];
	if (isEditing) headers.push('Delete');
	return (<tr>{headers.map(h => <th key={h}>{h}</th>)}</tr>);
};

const PTAB = props => {
	const { isEditing } = useEditContext();
	return isEditing ? <PodTableActionBox {...props} /> : null;
};

const PodTable = ({ name, editable, pods, setPods, podType }) => {
	return (
		<EditContextProvider>
			<TableLabel name={name} editable={editable} />
			<PTAB />


			<StyledPodTable>
				<thead>
					<HeaderRow podType={podType} />
				</thead>
				<tbody>
					<PodTableRowManager pods={pods} setPods={setPods} podType={podType} />
				</tbody>
			</StyledPodTable>
			<Meter pods={pods} podType={podType} />
		</EditContextProvider>
	);
};

export default PodTable;
