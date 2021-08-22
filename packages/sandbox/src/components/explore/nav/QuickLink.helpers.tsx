import React from 'react';
import { useRecoilState } from 'recoil';
import { VIEWER_PRESET_MAP } from '../../../../../viewers/src/viewer.constants';
import { intervalsDetailsState, rootDetailsState, viewerState } from '../../../state/state';
import EditIntervalsModal from '../modals/EditIntervalsModal';
import EditRootModal from '../modals/EditRootModal';
import EditViewerModal from '../modals/EditViewerModal';
import QuickLink from './QuickLink';

export const IntervalsQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [intervalsDetails] = useRecoilState(intervalsDetailsState);

    return (
        <QuickLink name="Intervals" preview={intervalsDetails.name} modal={<EditIntervalsModal />} />
    );
};

export const RootQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [rootDetails] = useRecoilState(rootDetailsState);

    return (
        <QuickLink name="Root" preview={rootDetails.name} modal={<EditRootModal />} />
    );
};

export const ViewerQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [viewerId] = useRecoilState(viewerState);
    const viewerConfig = VIEWER_PRESET_MAP.get(viewerId as any);

    return (
        <QuickLink name="Viewer" preview={viewerConfig.name} modal={<EditViewerModal />} />
    );
};
