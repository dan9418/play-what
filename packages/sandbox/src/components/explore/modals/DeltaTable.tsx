import React from 'react';
import styled from 'styled-components';

const StyledDeltaTable = styled.div`
    margin: 16px 0;
    table {
        text-align: center;
        font-size: 120%;
        border-collapse: collapse;
        width: 100%;
        td, th {
            padding: 4px;
            width: 50%;
        }
    }
`;

/*const getRows = (beforePods, afterPods, nameFn) => {

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
}*/

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
