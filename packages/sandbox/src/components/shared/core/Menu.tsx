import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { IClickableFolderItem, IFolder, IFolderItem, IFolderNode, NodeType } from '../../../../../core/src/library/Library.constants';
import { intervalsState, rootState, viewerIdState, viewerPropsState } from '../../../state/state';
import THEME from '../../../styles/theme';
import IntervalInput from '../inputs/IntervalInput';
import RootInput from '../inputs/RootInput';
import ViewerInput from '../inputs/ViewerInput';
import Icon from '../ui/Icon';

export const StyledMenu = styled.div`
    background-color: ${THEME.card};
    //width: 256px;
    box-shadow: 0px 0px 16px #aaa;
    overflow-y: auto;
`;

const StyledOverlay = styled.div`
    position: fixed;
    z-index: 1998;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background: rgba(0,0,0,.25);
`;


export const StyledMenuSection = styled.div`
    > button {
        height: 32px;
        width: 100%;
        padding: 0 8px;

        appearance: none;
        border: none;

        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bold;

        background-color: ${THEME.medium};
        color: white;

        cursor: pointer;
        &:hover{
            background-color: ${THEME.accent};
        }

        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            transition: transform .25s;
        }
    }
    > .content {
        padding: 8px;
    }
`;

const attachClickHandler = (node: IFolderNode, clickHandler: Function): IFolder | IClickableFolderItem<any> => {
    return node.nodeType === NodeType.Folder ?
        {
            ...(node as IFolder),
            items: (node as IFolder).items.map(item => attachClickHandler(item, clickHandler))
        } :
        {
            ...(node as IFolderItem<any>),
            onClick: () => clickHandler((node as IFolderItem<any>).value)
        };
};

const MenuSection: React.FC<any> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <StyledMenuSection>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <Icon iconId="up" color="white" rotate={isOpen ? 180 : 90} />
            </button>

            {isOpen &&
                <div className="content">
                    {children}
                </div>
            }

        </StyledMenuSection>
    );
};

const Menu: React.FC<any> = ({ closeMenu }) => {

    useEffect(() => {
        document.addEventListener(
            "click",
            e => {
                // @ts-ignore
                if (!e.target.closest(".menu")) {
                    closeMenu()
                }
            },
            false
        )
    }, []);

    // @ts-ignore
    const [root, setRoot] = useRecoilState(rootState);
    // @ts-ignore
    const [intervals, setIntervals] = useRecoilState(intervalsState);
    // @ts-ignore
    const [viewerId, setViewerId] = useRecoilState(viewerIdState);
    // @ts-ignore
    const [viewerProps, setViewerProps] = useRecoilState(viewerPropsState);

    return (
        <StyledMenu className="menu">
            <MenuSection title="Root">
                <RootInput root={root} setRoot={setRoot} />
            </MenuSection>
            <MenuSection title="Intervals">
                <IntervalInput intervals={intervals} setIntervals={setIntervals} />
            </MenuSection>
            <MenuSection title="Viewer">
                <ViewerInput viewerId={viewerId} setViewerId={setViewerId} viewerProps={viewerProps} setViewerProps={setViewerProps} />
            </MenuSection>
            <MenuSection title="Sound">
            </MenuSection>
            <MenuSection title="Color">
            </MenuSection>
        </StyledMenu>
    );
};

export default Menu;
