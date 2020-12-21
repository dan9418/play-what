import React from 'react';
import styled from 'styled-components';
import useSubpanelContext from '../../../../../contexts/SubpanelContext';
import InputTableRowManager from './InputTableRowManager';

const StyledInputTable = styled.table`
	text-align: center;
    border-collapse: collapse;
    margin: auto;
	width: 100%;
	
	& td, th {
		padding: 8px 4px;
	}

	& th {
		padding: 8px;
		text-transform: uppercase;
		font-size: 80%;
		border-bottom: 2px solid #ccc;
	}

	& .pod-table tbody tr:not(:last-child) {
		border-bottom: 1px solid #ccc;
	}

	& .pod-table td:nth-child(2), .pod-table td:nth-child(6) {
		font-weight: bold;
	}
`;

const getHeaders = (podType) => ['#', 'Pod', 'P', 'O', 'D', podType, 'Edit'];

const InputTable = ({ podType }) => {
	const subpanelContext = useSubpanelContext();
	const { data, setData } = subpanelContext;

	const { keyCenter, intervals, notes } = data;
	const tableData = keyCenter ? intervals : notes;

	return (
		<>
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
