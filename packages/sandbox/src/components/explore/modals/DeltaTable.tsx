import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';
import viewerUtils from '../../../../../viewers/src/viewer.utils';
import { intervalsState, rootState, viewerIdState, viewerPropsState } from '../../../state/state';
import HighlightBox from '../../shared/ui/HighlightBox';
import Viewer from '../Viewer';
import PodTable from './PodTable';

export const StyledDeltaTable = styled.div`
    table {
        text-align: center;
        font-size: 120%;
        border-collapse: collapse;
        width: 100%;
        td, th {
            padding: 4px 8px;
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

const DeltaTable: React.FC<any> = ({
    beforeRoot,
    afterRoot,
    beforeIntervals,
    afterIntervals,
    beforeViewerId,
    afterViewerId,
    beforeViewerProps,
    afterViewerProps
}) => {

    // @ts-ignore
    const root = useRecoilValue(rootState);
    // @ts-ignore
    const intervals = useRecoilValue(intervalsState);
    // @ts-ignore
    const viewerId = useRecoilValue(viewerIdState);
    // @ts-ignore
    const viewerProps = useRecoilValue(viewerPropsState);

    // RAW DATA

    const _beforeRoot = beforeRoot ? beforeRoot : root;
    const _afterRoot = afterRoot ? afterRoot : root;

    const _beforeIntervals = beforeIntervals ? beforeIntervals : intervals;
    const _afterIntervals = afterIntervals ? afterIntervals : intervals;

    const _beforeViewerId = beforeViewerId ? beforeViewerId : viewerId;
    const _afterViewerId = afterViewerId ? afterViewerId : viewerId;

    const _beforeViewerProps = beforeViewerProps ? beforeViewerProps : viewerProps;
    const _afterViewerProps = afterViewerProps ? afterViewerProps : viewerProps

    // COMPUTED

    const beforeDetails = PodListUtils.getDetails(_beforeRoot, _beforeIntervals);
    const afterDetails = PodListUtils.getDetails(_afterRoot, _afterIntervals);

    const beforeViewerDetails = viewerUtils.getDetails(_beforeViewerId, _beforeViewerProps);
    const afterViewerDetails = viewerUtils.getDetails(_afterViewerId, _afterViewerProps);

    return (
        <StyledDeltaTable>
            <HighlightBox>
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
                                <Viewer details={beforeDetails} viewerDetails={beforeViewerDetails} hideLabel />
                                <PodTable root={_beforeRoot} intervals={_beforeIntervals} notes={beforeDetails.notes.value} />
                            </td>
                            <td>
                                <Viewer details={afterDetails} viewerDetails={afterViewerDetails} hideLabel />
                                <PodTable root={_afterRoot} intervals={_afterIntervals} notes={afterDetails.notes.value} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HighlightBox>
        </StyledDeltaTable>
    )
}

export default DeltaTable;
