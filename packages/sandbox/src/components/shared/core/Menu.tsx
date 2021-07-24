import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NodeType, IFolder, IFolderItem, IFolderNode, IClickableFolderItem } from '../../../../../core/src/library/Library.constants';
import { LIBRARY } from '../../../../../core/src/library/Library.utils';
import THEME from '../../../styles/theme';
import Icon from '../ui/Icon';

const StyledMenu = styled.div`
    width: 100%;
    max-width: 256px;

    position: fixed;
    z-index: 1999;
    top: 96px;
    bottom: 0;
    right: 0;

    background-color: ${THEME.card};
    box-shadow: 0px 0px 16px #aaa;

    overflow-y: auto;
    padding: 8px;

    button {
        background-color: transparent;
        appearance: none;
        width: 100%;
        border: none;
        text-align: left;
        border-radius: 4px;
        &:hover {
            background-color: rgba(0,0,0,.1);
            cursor: pointer;
        }
    }

    li {
        position: relative;
        font-size: 160%;
    }

    svg {
        position: absolute;
        right: 0;
        height: 8px;
        width: 8px;
        margin: 8px;
    }

    ul {
        margin-left: 8px;
    }

    .folder {
        font-weight: bold;
    }

    .item {
       
    }

    .item, .folder {
        padding: 4px;
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

const MenuItem: React.FC<any> = ({ item, level }) => {
    return (
        <li><button className="item" type="button" onClick={item.onClick}>{item.text}</button></li>
    );
};

const MenuFolder: React.FC<any> = ({ folder, level, getMenuItems }) => {
    const [isOpen, setIsOpen] = useState(level < 1);
    return (
        <>
            <li>
                <button className="folder" type="button" onClick={() => setIsOpen(!isOpen)}>{folder.text}</button>
                <Icon iconId={isOpen ? 'minus' : 'plus'} />
            </li>
            {isOpen && <ul>{folder.items.map((item) => getMenuItems(item, level + 1))}</ul>}
        </>
    );
};

const getMenuItems = (node: IFolderNode, level) => {
    return node.nodeType === NodeType.Folder ?
        <MenuFolder folder={node} level={level + 1} getMenuItems={getMenuItems} /> :
        <MenuItem item={node} level={level} />;
}

const EDIT_MENU_CONFIG: IFolder = {
    nodeType: NodeType.Folder,
    text: 'Edit',
    items: [
        {
            nodeType: NodeType.Item,
            text: 'Edit Root'
        },
        {
            nodeType: NodeType.Item,
            text: 'Edit Intervals'
        },
        {
            nodeType: NodeType.Item,
            text: 'Edit Viewer'
        }
    ]
}

const MY_LIBRARY_MENU_CONFIG: IFolder = {
    nodeType: NodeType.Folder,
    text: 'My Library',
    items: []
}

const PRESETS_MENU_CONFIG: IFolder = LIBRARY;

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

const Menu: React.FC<any> = ({ setExploreState, closeMenu }) => {
    useEffect(() => {
        document.addEventListener(
            "click",
            e => {
                if (!e.target.closest(".menu")) {
                    closeMenu()
                }
            },
            false
        )
    }, []);

    const editMenuConfig = attachClickHandler(EDIT_MENU_CONFIG, null);
    const presetsConfig = attachClickHandler(PRESETS_MENU_CONFIG, v => setExploreState(v));

    return (
        <>
            <StyledOverlay />
            <StyledMenu className="menu">
                <h2>Menu</h2>
                {getMenuItems(editMenuConfig, 0)}
                {getMenuItems(presetsConfig, 0)}
                {getMenuItems(MY_LIBRARY_MENU_CONFIG, 0)}
            </StyledMenu>
        </>
    );
};

export default Menu;
