import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { IClickableFolderItem, IFolder, IFolderItem, IFolderNode, NodeType } from '../../../../../core/src/library/Library.constants';
import { intervalsState, rootState } from '../../../state/state';
import THEME from '../../../styles/theme';
import IntervalInput from '../inputs/IntervalInput';
import RootInput from '../inputs/RootInput';

export const StyledMenu = styled.div`
    
    background-color: ${THEME.card};
    //width: 256px;
    box-shadow: 0px 0px 16px #aaa;

    overflow-y: auto;
    padding: 8px;

    h3 {
        margin-bottom: 4px;
        margin-top: 8px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${({ theme }) => theme.medium};
    }
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

    return (

        <StyledMenu className="menu">
            <h3>Root</h3>
            <RootInput root={root} setRoot={setRoot} />
            <h3>Intervals</h3>
            <IntervalInput intervals={intervals} setIntervals={setIntervals} />
        </StyledMenu>

    );
};

export default Menu;
