import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { detailsState, viewerDetailsState } from '../../../state/state';
import THEME from '../../../styles/theme';
import EditIntervalsModal from '../modals/EditIntervalsModal';
import EditRootModal from '../modals/EditRootModal';
import EditViewerModal from '../modals/EditViewerModal';
import QuickLink, { StyledQuickLink } from './QuickLink';

const StyledQuickLinksList = styled.ul`
    display: flex;
    height: 100%;

    li {
        margin: 0;
        padding: 0;

        ${StyledQuickLink} {
            height: 100%;
        }
    }

    &.x {
        flex-direction: row;
        li {
            height: 100%;
            border-right: 1px solid ${THEME.border};
            /*&:not(:last-child) {
                border-right: 1px solid ${THEME.border};
            }*/
            &:first-child {
                border-left: 1px solid ${THEME.border};
            }
        }

        display: none;
        @media(min-width: 1024px) {
            display: flex;
        }
    }
    &.y {
        flex-direction: column;
        li {
            height: 64px;
            border-bottom: 1px solid ${THEME.border};
            /*&:not(:last-child) {
                border-bottom: 1px solid ${THEME.border};
            }*/
            /*&:first-child {
                border-left: 1px solid ${THEME.border};
            }*/
            ${StyledQuickLink} {
                width: 100%;
                padding-right: 24px;
            }
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
            {/*<li>
                <QuickLink name="Sound" preview="Sine, 40db" modal={null} />
            </li>
            <li>
                <QuickLink name="Color" preview="By Degree" modal={null} />
            </li>*/}
        </StyledQuickLinksList>
    );
};
