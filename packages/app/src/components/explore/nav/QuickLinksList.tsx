import IntervalsInputBasic from '@pw/ui/src/inputs/IntervalsInputBasic';
import RootInputBasic from '@pw/ui/src/inputs/RootInputBasic';
import ViewerInputBasic from '@pw/ui/src/inputs/ViewerInputBasic';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ModalId } from '../../../contexts/ModalContext';
import { detailsState, viewerDetailsState } from '../../../state/state';
import THEME from '../../../styles/theme';
import useEditProps from '../modals/useEditProps';
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
            height: 128px;
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
export const QuickLinksList: React.FC<any> = ({ isVertical, closeMenu }) => {
    // @ts-ignore
    const details = useRecoilValue(detailsState);
    // @ts-ignore
    const viewerDetails = useRecoilValue(viewerDetailsState);

    const editProps = useEditProps();

    return (
        <StyledQuickLinksList className={isVertical ? 'y' : 'x'}>
            <li>
                <QuickLink name="Root" preview={details.root.preview} modalId={ModalId.Root} closeMenu={closeMenu} >
                    <RootInputBasic {...editProps} />
                </QuickLink>
            </li>
            <li>
                <QuickLink name="Intervals" preview={details.intervals.preview} modalId={ModalId.Intervals} closeMenu={closeMenu} >
                    <IntervalsInputBasic {...editProps} />
                </QuickLink>
            </li>
            <li>
                <QuickLink name="Viewer" preview={viewerDetails.viewerName} modalId={ModalId.Viewer} closeMenu={closeMenu} >
                    <ViewerInputBasic {...editProps} />
                </QuickLink>
            </li>
            {/*<li>
                <QuickLink name="Sound" preview="Sine, 40db" modalId={null} />
            </li>
            <li>
                <QuickLink name="Color" preview="By Degree" modalId={null} />
            </li>*/}
        </StyledQuickLinksList>
    );
};
