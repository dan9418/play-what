import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React from 'react';
import styled from 'styled-components';
import useEditContext, { EditContextProvider } from '../../../../contexts/EditContext';
import InputTableRowManager from './InputTableRowManager';
import KeyCenterRow from './KeyCenterRow';

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
	}
`;

const getHeaders = (podType, isEditing) => ['#', 'Pod', 'P', 'O', 'D', podType, isEditing ? 'Delete' : undefined];

const getKeyHeaders = () => ['Pod', 'P', 'O', 'D', 'Key'];

const HeaderRow = ({ podType }) => {
	const { isEditing } = useEditContext();
	return (<tr>{getHeaders(podType, isEditing).map((h, i) => h ? <th key={i}>{h}</th> : null)}</tr>);
};

const InputTable = () => {

	const podType = 'interval';

	return (
		<>
			{true &&
				<>
					<EditContextProvider>
						<TableLabel name="Key Center" editable />
						<StyledInputTable>
							<thead>
								<tr>
									{getKeyHeaders(podType).map((h, i) => <th key={i}>{h}</th>)}
								</tr>
							</thead>
							<tbody>
								<KeyCenterRow />
							</tbody>
						</StyledInputTable>
					</EditContextProvider>
					<EditContextProvider>
						<TableLabel name="Intervals" editable />
						<StyledInputTable>
							<thead>
								<HeaderRow podType="interval" />
							</thead>
							<tbody>
								<InputTableRowManager podType="interval" />
							</tbody>
						</StyledInputTable>
					</EditContextProvider>
				</>
			}
			<EditContextProvider>
				<TableLabel name="Notes" editable={podType === 'note'} />
				<StyledInputTable>
					<thead>
						<HeaderRow podType="note" />
					</thead>
					<tbody>
						<InputTableRowManager podType="note" />
					</tbody>
				</StyledInputTable>
			</EditContextProvider>
		</>
	);
};

export default InputTable;
