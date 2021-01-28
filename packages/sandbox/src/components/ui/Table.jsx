import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React from 'react';
import styled from 'styled-components';
import useEditContext, { EditContextProvider } from '../../contexts/EditContext';
import TableActionBox from './TableActionBox';

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

const StyledTableContainer = styled.section`
	border: 1px solid #ccc;
	padding: 8px 16px;
	border-radius: 2px;
	background-color: #f5f5f5;
`;

const Table = ({ name, editable, rows, cols, actions }) => {
	return (
		<StyledTableContainer>
			<EditContextProvider>
				<TableLabel name={name} editable={editable} />
				<TableActionBox actions={actions} />
				<StyledPodListTable>
					<thead>
						<tr>
							{cols}
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</StyledPodListTable>
			</EditContextProvider>
		</StyledTableContainer>
	);
};

export default Table;
