import React from 'react';
import styled from 'styled-components';
import ModelUtils from '../../../../core/src/models/Model.utils';

const StyledDeltaTable = styled.div`
    margin: 16px 0;
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

const getRows = (beforePods, afterPods, nameFn) => {

    const rows = [];
    for (let i = 0; i < beforePods.length || i < afterPods.length; i++) {
        if (beforePods[i] && afterPods[i]) {
            rows.push(<tr>
                <td>{nameFn(beforePods[i])}</td>
                <td>{JSON.stringify(beforePods[i])}</td>
                <td>{nameFn(afterPods[i])}</td>
                <td>{JSON.stringify(afterPods[i])}</td>
            </tr>)
        }
        else if (beforePods[i]) {
            rows.push(<tr>
                <td>{nameFn(beforePods[i])}</td>
                <td>{JSON.stringify(beforePods[i])}</td>
                <td></td>
                <td></td>
            </tr>)
        }
        else if (afterPods[i]) {
            rows.push(<tr>
                <td></td>
                <td></td>
                <td>{nameFn(afterPods[i])}</td>
                <td>{JSON.stringify(afterPods[i])}</td>
            </tr>)
        }
    }
    return rows;
}

const DeltaTable: React.FC<any> = ({ beforePods, afterPods, isInterval }) => {
    const nameFn = isInterval ? ModelUtils.getIntervalName : ModelUtils.getNoteName;
    return (
        <StyledDeltaTable>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Before</th>
                        <th colSpan={2}>After</th>
                    </tr>
                </thead>
                <tbody>
                    {getRows(beforePods, afterPods, nameFn)}
                </tbody>
            </table>
        </StyledDeltaTable>
    )
}

export default DeltaTable;
