import React from 'react';
import styled from 'styled-components';
import { ModelId } from '../../../../core/src/models/Model.constants';
import ModelUtils from '../../../../core/src/models/Model.utils';

const StyledDeltaTable = styled.div`
    table {
        text-align: center;
        font-size: 120%;
        border-collapse: collapse;
        width: 100%;
        td, th {
            padding: 4px;
        }
    }
`;

const DeltaTable: React.FC<any> = ({ before, after }) => {

    return (
        <StyledDeltaTable>
            <table>
                <thead>
                    <tr>
                        <th>Before</th>
                        <th>After</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{before}</td>
                        <td>{after}</td>
                    </tr>
                </tbody>
            </table>
        </StyledDeltaTable>
    )
}

export default DeltaTable;
