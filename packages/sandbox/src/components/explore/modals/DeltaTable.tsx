import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import PodUtils from '../../../../../core/src/models/Pod/Pod.utils';
import { intervalsState, rootState, viewerState } from '../../../state/state';
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
    // @ts-ignore
    const viewerId = useRecoilValue(viewerState);
    // @ts-ignore
    const intervals = useRecoilValue(intervalsState);
    // @ts-ignore
    const root = useRecoilValue(rootState);

    const _beforeRoot = beforeRoot ? beforeRoot : root;
    const _afterRoot = afterRoot ? afterRoot : root;
    const _beforeIntervals = beforeIntervals ? beforeIntervals : intervals;
    const _afterIntervals = afterIntervals ? afterIntervals : intervals;
    const _beforeViewerId = beforeRoot ? beforeRoot : viewerId;
    const _afterViewerId = beforeRoot ? beforeRoot : viewerId

    const beforeNotes = PodUtils.addPodList(_beforeRoot, _beforeIntervals);
    const afterNotes = PodUtils.addPodList(_afterRoot, _afterIntervals);

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
                            <Viewer viewerId={_beforeViewerId} notes={beforeNotes} hideLabel />
                            <PodTable root={_beforeRoot} intervals={_beforeIntervals} notes={beforeNotes} />
                        </td>
                        <td>
                            <Viewer viewerId={_afterViewerId} notes={afterNotes} hideLabel />
                            <PodTable root={_afterRoot} intervals={_afterIntervals} notes={afterNotes} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledDeltaTable>
    )
}

export default DeltaTable;
