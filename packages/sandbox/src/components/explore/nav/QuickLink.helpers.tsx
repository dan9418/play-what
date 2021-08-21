import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { VIEWER_PRESET_MAP } from '../../../../../viewers/src/viewer.constants';
import { intervalsDetailsState, rootDetailsState, viewerState } from '../../../state/state';
import EditIntervalsModal from '../modals/EditIntervalsModal';
import EditRootModal from '../modals/EditRootModal';
import ViewerModal from '../modals/EditViewerModal';
import QuickLink from './QuickLink';

const StyledSeparator = styled.div`
    margin: 0 16px;
	height: 48px;
	width: 1px;
	background-color: ${({ theme }) => theme.border};
`

const StyledQuickLinkContainer = styled.div`
    padding: 0 16px;
	display: flex;
    align-items: center;
    border-radius: 4px;
	
	white-space: nowrap;
    .name-preview {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .root {
        font-weight: bold;
        font-size: 40px;
        line-height: 40px;
        margin-right: 8px;
    }
	.name {
		font-weight: bold;
        font-size: 120%;
	}
	.preview {
		color: ${({ theme }) => theme.accent};
        font-size: 80%;
	}
`

const IntervalsQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [intervalsDetails] = useRecoilState(intervalsDetailsState);

    return (
        <QuickLink name="Intervals" preview={intervalsDetails.preview} modal={<EditIntervalsModal />} />
    );
};

const RootQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [rootDetails] = useRecoilState(rootDetailsState);

    return (
        <QuickLink name="Root" preview={rootDetails.name} modal={<EditRootModal />} />
    );
};

const ViewerQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [viewerId, setViewerId] = useRecoilState(viewerState);

    const viewerConfig = VIEWER_PRESET_MAP.get(viewerId as any);

    return (
        <QuickLink name="Viewer" preview={viewerConfig.name} modal={<ViewerModal viewerId={viewerId} setViewerId={setViewerId} />} />
    );
};

export const QuickLinkContainer: React.FC<any> = () => {
    return (
        <StyledQuickLinkContainer>
            <StyledSeparator />
            <RootQuickLink />
            <StyledSeparator />
            <IntervalsQuickLink />
            <StyledSeparator />
            <ViewerQuickLink />
            <StyledSeparator />
        </StyledQuickLinkContainer>
    );
};
