import React, { useState } from "react";
import styled from 'styled-components';
import { StyledCard } from "../../ui/Card";

const StyledTabCard = styled(StyledCard)`
    > ul {
        display: flex;
        align-items: center;
        //justify-content: space-between;
        border-bottom: 1px solid ${props => props.theme.utils.border};

        button {
            padding: 8px 16px;
            width: 100%;
            appearance: none;
            border: none;
            cursor: pointer;
            background-color: white;
            border-bottom: 2px solid white;

            font-size: 120%;

            &:hover {
                background-color: #DEDEDE;
            }
            
            &.active {
                border-color: ${props => props.theme.action.active};
                font-weight: bold;
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
