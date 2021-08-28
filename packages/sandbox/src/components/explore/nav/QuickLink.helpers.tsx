import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { detailsState, viewerDetailsState } from '../../../state/state';
import EditIntervalsModal from '../modals/EditIntervals';
import EditRootModal from '../modals/EditRootModal';
import EditViewerModal from '../modals/EditViewerModal';
import QuickLink, { StyledQuickLink } from './QuickLink';
import THEME from '../../../styles/theme';

const StyledQuickLinksList = styled.ul`
    display: flex;
    height: 100%;

    li {
        height: 100%;
        margin: 0;
        padding: 0;

        ${StyledQuickLink} {
            height: 100%;
        }
    }

    &.x {
        flex-direction: row;
        li {
            &:not(:last-child) {
                border-right: 1px solid ${THEME.border};
            }
            &:first-child {
                border-left: 1px solid ${THEME.border};
            }
        }
        ${StyledQuickLink} {
            
        }
    }
    &.y {
        flex-direction: column;
        ${StyledQuickLink} {
            width: 100%;
        }
    }
`
export const QuickLinksList: React.FC<any> = ({ isVertical }) => {
    // @ts-ignore
    const details = useRecoilValue(detailsState);
    // @ts-ignore
    const viewerDetails = useRecoilValue(viewerDetailsState);

    return (
        <StyledQuickLinksList className={isVertical ? 'y' : 'x'}>
            <li>
                <QuickLink name="Root" preview={details.root.preview} modal={<EditRootModal />} />
            </li>
            <li>
                <QuickLink name="Intervals" preview={details.intervals.preview} modal={<EditIntervalsModal />} />
            </li>
            <li>
                <QuickLink name="Viewer" preview={viewerDetails.viewerName} modal={<EditViewerModal />} />
            </li>
            <li>
                <QuickLink name="Sound" preview="Sine, 40db" modal={null} />
            </li>
            <li>
                <QuickLink name="Color" preview="By Degree" modal={null} />
            </li>
        </StyledQuickLinksList>
    );
};
