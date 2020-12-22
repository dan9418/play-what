import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React from 'react';
import styled from 'styled-components';
import useEditContext from '../../../../../contexts/EditContext';
import useSubpanelContext from '../../../../../contexts/SubpanelContext';
import InputTableRowManager from './InputTableRowManager';
import KeyCenterRow from './KeyCenterRow';

const StyledTableLabel = styled.div`
	padding: 8px 0;
	border-bottom: 1px solid #ccc;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	& h3 {
		margin: 16px 0 8px 0;
		text-transform: capitalize;
	}	
`;

const TableLabel = ({ name }) => {
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;
	return (
		<StyledTableLabel>
			<h3>
				{name || 'Panel'}
			</h3>
			<EditButton  />
		</StyledTableLabel>
	);
};

const StyledInputTable = styled.table`
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
`;

const getHeaders = (podType) => ['#', 'Pod', 'P', 'O', 'D', podType, 'Edit'];

const getKeyHeaders = () => ['Pod', 'P', 'O', 'D', 'Key', 'Edit'];

const InputTable = ({ podType }) => {
	const subpanelContext = useSubpanelContext();
	const { data, setData } = subpanelContext;

	const { keyCenter, intervals, notes } = data;
	const tableData = keyCenter ? intervals : notes;

	return (
		<>
			{podType === 'interval' &&
				<>
					<TableLabel name="Key Center" />
					<StyledInputTable>
						<thead>
							<tr>
								{getKeyHeaders(podType).map((h, i) => <th key={i}>{h}</th>)}
							</tr>
						</thead>
						<tbody>
							<KeyCenterRow keyCenter={keyCenter} />
						</tbody>
					</StyledInputTable>
				</>
			}
			<TableLabel name={`${podType}s`} />
			<StyledInputTable>
				<thead>
					<tr>
						{getHeaders(podType).map((h, i) => <th key={i}>{h}</th>)}
					</tr>
				</thead>
				<tbody>
					<InputTableRowManager podType={podType} data={tableData} setData={null} />
				</tbody>
			</StyledInputTable>
		</>
	);
};

export default InputTable;
