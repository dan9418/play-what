import React, { useState } from 'react';
import styled from 'styled-components';
import { FolderItemType, IFolder, IFolderItem } from '../../../../../core/src/library/Library.constants';
import { LIBRARY } from '../../../../../core/src/library/Library.utils';
import THEME from '../../../styles/theme';
import Icon from '../ui/Icon';

const StyledMenu = styled.div`
    width: 100%;
    max-width: 256px;

    position: fixed;
    z-index: 1999;
    top: 64px;
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

const MenuItem: React.FC<any> = ({ item, level }) => {
    return (
        <li><button className="item" type="button">{item.name}</button></li>
    );
};

const MenuFolder: React.FC<any> = ({ folder, level, getMenuItems }) => {
    const [isOpen, setIsOpen] = useState(level < 2);
    return (
        <>
            <li>
                <button className="folder" type="button" onClick={() => setIsOpen(!isOpen)}>{folder.name}</button>
                <Icon iconId={isOpen ? 'minus' : 'plus'} />
            </li>
            {isOpen && <ul>{folder.items.map((item) => getMenuItems(item, level + 1))}</ul>}
        </>
    );
};

const getMenuItems = (folderItem: IFolder | IFolderItem, level) => {
    return folderItem.itemType === FolderItemType.Folder ?
        <MenuFolder folder={folderItem} level={level + 1} getMenuItems={getMenuItems} /> :
        <MenuItem item={folderItem} level={level} />;
}

const Menu: React.FC = () => {
    return (
        <StyledMenu>
            {getMenuItems(LIBRARY, 0)}
        </StyledMenu>
    );
};

export default Menu;
