
import React from 'react';
import styled from 'styled-components';
import useEditProps from '../../../hooks/useEditProps';
import THEME from '../../../styles/theme';

const StyledMenuList = styled.ul`
    display: flex;
    flex-direction: column;

    li {
        margin: 0;
        padding: 16px 0;

        .name {
            margin-bottom: 8px;
            font-weight: bold;
            font-size: 1.25em;
            color: ${({ theme }) => theme.text.dark};
        }

        &:not(:last-child) {
            border-bottom: 1px solid ${THEME.border};
        }
    }
`
export const MenuList: React.FC<any> = ({ menuItems = [] }) => {

    const editProps = useEditProps();

    return (
        <StyledMenuList>
            {menuItems.map(item => (
                <li key={item.text}>
                    <div className="name">{item.text}</div>
                    <item.component {...editProps} />
                </li>
            ))}
        </StyledMenuList>
    );
};
