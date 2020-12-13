import React from 'react';
import InputTableHeader from './InputTableHeader';
import InputTableRowManager from './InputTableRowManager';
import styled from 'styled-components';
import useSubpanelContext from '../../../../../contexts/SubpanelContext';

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

const InputTable = () => {
	const subpanelContext = useSubpanelContext();
	const { data, setData } = subpanelContext;

	return (
		<StyledInputTable>
			<InputTableHeader />
			<tbody>
				<InputTableRowManager input={data} setInput={setData} />
			</tbody>
		</StyledInputTable>
	);
};

export default InputTable;
