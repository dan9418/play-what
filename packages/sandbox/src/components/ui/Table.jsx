import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
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
		background-color: #eee;
		border: 1px solid #ccc;
	}

	& tbody tr:not(:last-child) {
		border-bottom: 1px solid #ddd;
	}
`;

const Table = ({ rows, cols }) => {
	return (
		<StyledTable>
			<thead>
				<tr>
					{cols}
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</StyledTable>
	);
};

export default Table;
