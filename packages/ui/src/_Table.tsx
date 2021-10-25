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
		border: 1px solid #bbb;
	}

	& tbody tr:not(:last-child) {
		border-bottom: 1px solid #ddd;
	}
`;

const StyledTableHeader = styled.h3`
	padding: 4px 0;
`;

const Table = ({ title, rows, headers }) => {

	const headerCells = headers.map(h => <td key={h}>{h}</td>);

	const bodyRows = rows.map((r, i) => {
		return (
			<tr key={i}>
				{r.cols.map((c, j) => {
					return <td key={j}>{c}</td>;
				})}
			</tr>
		);
	});

	return (
		<>
			{title && <StyledTableHeader>{title}</StyledTableHeader>}
			<StyledTable>
				<thead>
					<tr>
						{headerCells}
					</tr>
				</thead>
				<tbody>
					{bodyRows}
				</tbody>
			</StyledTable>
		</>
	);
};

export default Table;
