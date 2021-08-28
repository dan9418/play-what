import React from 'react';
import { useRecoilValue } from 'recoil';
import { detailsState, viewerDetailsState } from '../../../state/state';
import EditIntervalsModal from '../modals/EditIntervals';
import EditRootModal from '../modals/EditRootModal';
import EditViewerModal from '../modals/EditViewerModal';
import QuickLink from './QuickLink';

export const IntervalsQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const details = useRecoilValue(detailsState);

    return (
        <QuickLink name="Intervals" preview={details.intervals.preview} modal={<EditIntervalsModal />} />
    );
};

export const RootQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const details = useRecoilValue(detailsState);

    return (
        <QuickLink name="Root" preview={details.root.preview} modal={<EditRootModal />} />
    );
};

export const ViewerQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const viewerDetails = useRecoilValue(viewerDetailsState);

    return (
        <QuickLink name="Viewer" preview={viewerDetails.viewerName} modal={<EditViewerModal />} />
    );
};

export const SoundQuickLink: React.FC<any> = () => {
    return (
        <QuickLink name="Sound" preview="Sine, 40db" modal={null} />
    );
};

export const ColorQuickLink: React.FC<any> = () => {
    return (
        <QuickLink name="Color" preview="By Degree" modal={null} />
    );
};
