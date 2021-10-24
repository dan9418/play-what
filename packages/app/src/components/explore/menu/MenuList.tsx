
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import IntervalsInputBasic from '../../../../../ui/src/inputs/IntervalsInputBasic';
import RootInputBasic from '../../../../../ui/src/inputs/RootInputBasic';
import ViewerInputBasic from '../../../../../ui/src/inputs/ViewerInputBasic';
import useEditProps from '../../../hooks/useEditProps';
import { detailsState, viewerDetailsState } from '../../../state/state';
import THEME from '../../../styles/theme';
import MenuItem, { StyledMenuItem } from './MenuItem';

const StyledMenuList = styled.ul`
    display: flex;
    height: 100%;

    li {
        margin: 0;
        padding: 0;

        ${StyledMenuItem} {
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
            ${StyledMenuItem} {
                width: 100%;
                padding-right: 24px;
            }
        }
    }
`
export const MenuList: React.FC<any> = ({ isVertical, closeMenu }) => {
    // @ts-ignore
    const details = useRecoilValue(detailsState);
    // @ts-ignore
    const viewerDetails = useRecoilValue(viewerDetailsState);

    const editProps = useEditProps();

    return (
        <StyledMenuList className={isVertical ? 'y' : 'x'}>
            <li>
                <MenuItem name="Root" preview={details.root.preview} closeMenu={closeMenu} >
                    <RootInputBasic {...editProps} />
                </MenuItem>
            </li>
            <li>
                <MenuItem name="Intervals" preview={details.intervals.preview} closeMenu={closeMenu} >
                    <IntervalsInputBasic {...editProps} />
                </MenuItem>
            </li>
        </StyledMenuList>
    );
};
