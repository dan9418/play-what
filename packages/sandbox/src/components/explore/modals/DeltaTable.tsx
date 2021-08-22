import React from 'react';
import styled from 'styled-components';
import PodUtils from '../../../../../core/src/models/Pod/Pod.utils';
import Viewer from '../Viewer';
import PodTable from './PodTable';

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
            max-width: 64px;
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

const DeltaTable: React.FC<any> = ({ beforeRoot, afterRoot, beforeIntervals, afterIntervals, beforeViewerId, afterViewerId }) => {
    const beforeNotes = PodUtils.addPodList(beforeRoot, beforeIntervals);
    const afterNotes = PodUtils.addPodList(afterRoot, afterIntervals);

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
                        <td>
                            <Viewer viewerId={beforeViewerId} notes={beforeNotes} hideLabel />
                            <PodTable root={beforeRoot} intervals={beforeIntervals} notes={beforeNotes} />
                        </td>
                        <td>
                            <Viewer viewerId={afterViewerId} notes={afterNotes} hideLabel />
                            <PodTable root={afterRoot} intervals={afterIntervals} notes={afterNotes} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledDeltaTable>
    )
}

export default DeltaTable;
