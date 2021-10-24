import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';
import viewerUtils from '../../../../../ui/src/viewers/Viewer.utils';
import { intervalsState, rootState, viewerIdState, viewerPropsState } from '../../../state/state';
import Viewer from '../viewer/Viewer';
import PodTable from './_PodTable';

export const StyledDeltaTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
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
        <>
            <>
                <div>
                    <Viewer details={beforeDetails} viewerDetails={beforeViewerDetails} hideLabel />
                    <PodTable root={_beforeRoot} intervals={_beforeIntervals} notes={beforeDetails.notes.value} />
                </div>
                <div>
                    <Viewer details={afterDetails} viewerDetails={afterViewerDetails} hideLabel />
                    <PodTable root={_afterRoot} intervals={_afterIntervals} notes={afterDetails.notes.value} />
                </div>
            </>
        </>
    )
}

export default DeltaTable;
