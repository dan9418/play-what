import PodUtils from '@pw/core/src/Pod.utils';
import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React from 'react';
import styled from 'styled-components';
import useEditContext, { EditContextProvider } from '../../../contexts/EditContext';
import PodListTableActionBox from '../PodList/PodListTableActionBox';

const StyledTableLabel = styled.div`
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

const StyledPodListTable = styled.table`
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
		'index',
		'value',
		'max',
		'mod.',
		'rem.'
	],
	interval: [
		'index',
		'value',
		'max',
		'mod.',
		'rem.'
	]
};

const HeaderRow = ({ podType }) => {
	const { isEditing } = useEditContext();
	const headers = [...HEADERS[podType]];
	return (<tr>{headers.map(h => <th key={h}>{h}</th>)}</tr>);
};

const PTAB = props => {
	const { isEditing } = useEditContext();
	return isEditing ? <PodListTableActionBox {...props} /> : null;
};


const StyledPodPanel = styled.section`
	border: 1px solid #ccc;
	padding: 8px 16px;
	border-radius: 2px;
	background-color: #f5f5f5;
`;

const PodTable = ({ name, editable, pod, setPod, podType }) => {
	return (
		<StyledPodPanel>
			<EditContextProvider>
				<TableLabel name={name} editable={editable} />
				<PTAB />
				<StyledPodListTable>
					<thead>
						<HeaderRow podType={podType} />
					</thead>
					<tbody>
						<tr>
							<td>p</td>
							<td>{pod[0]}</td>
							<td>12</td>
							<td>{PodUtils.getPitchClass(pod)}</td>
							<td>{PodUtils.getOctave(pod)}</td>
						</tr>
						<tr>
							<td>d</td>
							<td>{pod[1]}</td>
							<td>7</td>
							<td>{PodUtils.getDegree(pod)}</td>
							<td>{PodUtils.getX(pod)}</td>
						</tr>
					</tbody>
				</StyledPodListTable>
			</EditContextProvider>
		</StyledPodPanel>
	);
};

export default PodTable;
