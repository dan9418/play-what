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
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
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
