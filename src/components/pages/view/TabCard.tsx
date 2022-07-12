import React, { useState } from "react";
import styled from 'styled-components';
import { StyledCard } from "../../ui/Card";

const StyledTabCard = styled(StyledCard)`
    > ul {
        display: flex;
        align-items: center;
        //justify-content: space-between;
        //border-bottom: 1px solid ${props => props.theme.utils.border};
        margin-bottom: 16px;

        button {
            padding: 8px 16px;
            appearance: none;
            border: none;
            cursor: pointer;
            background-color: ${props => props.theme.surface.card};
            border-bottom: 2px solid ${props => props.theme.utils.border};

            font-size: 120%;

            color: ${props => props.theme.text.secondary};

            &:hover {
                border-bottom: 2px solid  ${props => props.theme.action.interactive};
                color: ${props => props.theme.text.primary};
            }
            
            &.active {
                border-color: ${props => props.theme.action.active};
                font-weight: bold;
                color: ${props => props.theme.text.primary};
            }
        }
    }
`;

const TabCard: React.FC<any> = ({ tabs }) => {
    const [index, setIndex] = useState(0);

    return (
        <StyledTabCard>
            <ul>
                {tabs.map((t, i) => (
                    <li key={t.text}>
                        <button
                            type="button"
                            onClick={() => setIndex(i)}
                            className={i === index ? 'active' : ''}
                        >
                            {t.text}
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                {tabs[index].content}
            </div>
        </StyledTabCard>
    );
};

export default TabCard;
