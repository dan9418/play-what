import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { VIEWER_PRESET_MAP } from '../../../../../viewers/src/viewer.constants';
import { detailsState, viewerDetailsState } from '../../../state/state';
import EditIntervalsModal from '../modals/EditIntervalsModal';
import EditRootModal from '../modals/EditRootModal';
import EditViewerModal from '../modals/EditViewerModal';
import QuickLink from './QuickLink';

export const IntervalsQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const details = useRecoilValue(detailsState);

    return (
        <QuickLink name="Intervals" preview={details.intervals.name} modal={<EditIntervalsModal />} />
    );
};

export const RootQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const details = useRecoilValue(detailsState);

    return (
        <QuickLink name="Root" preview={details.intervals.preview} modal={<EditRootModal />} />
    );
};

export const ViewerQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const viewerDetails = useRecoilValue(viewerDetailsState);

    return (
        <QuickLink name={viewerDetails.viewerName} preview={viewerDetails.presetName} modal={<EditViewerModal />} />
    );
};
