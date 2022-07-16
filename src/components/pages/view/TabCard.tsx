import React, { useState } from "react";
import styled from 'styled-components';
import { StyledCard } from "../../ui/Card";

const StyledTabCard = styled(StyledCard)`
    padding: 0;
    min-height: 256px;
    
    .content {
        padding: 16px;
    }
    .fake-border {
        position: relative;
        width: 100%;
        bottom: 2px;
        border-bottom: 2px solid #EEE;
        margin-bottom: 16px;
    }
    > ul {
        display: flex;
        align-items: center;
        overflow: auto;
        
        button {
            position: relative;
            z-index: 100000000;
            padding: 16px 16px 12px;
            appearance: none;
            border: none;
            cursor: pointer;
            background-color: ${props => props.theme.surface.card};
            border-bottom: 2px solid transparent;
            border-radius: 8px 8px 0 0;
            border-bottom: 2px solid #EEE;

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
            <div className="fake-border" />
            <div className="content">
                {tabs[index].content}
            </div>
        </StyledTabCard>
    );
};

export default TabCard;
