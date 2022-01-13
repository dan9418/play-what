import React from "react";
import styled from 'styled-components';
import ButtonInput from "./ButtonInput";

const StyledFilterList = styled.div`

    border: 1px solid ${props => props.theme.action.interactive};
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 16px;

    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;

        > li {
            margin: 0  !important;
            list-style-type: none !important;
        }

        button {
            background-color: ${({ theme }) => theme.utils.transparent};;
            border: 1px solid ${props => props.theme.action.interactive};;
            color: ${props => props.theme.action.interactive};
            padding: 4px 8px;
            font-size: 80%;
            :hover {
                background-color: ${({ theme }) => theme.utils.hoverDark};
            }

            &.active {
                color: ${({ theme }) => theme.text.inverted};;
                background-color: ${props => props.theme.action.interactive};
            }
        }
    }
`;


const FilterList: React.FC<any> = ({ tags, selectedTags, setSelectedTags }) => {

    const toggle = t => {
        if (selectedTags.includes(t)) {
            setSelectedTags(selectedTags.filter(x => x !== t));
        }
        else {
            setSelectedTags([...selectedTags, t]);
        }
    };
    return (
        <StyledFilterList>
            {false && <div className="top">
                {selectedTags.length > 0 &&
                    <button
                        type="button"
                        onClick={() => setSelectedTags([])}
                        className="clear"
                    >Clear</button>
                }
            </div>}
            <ul>
                {tags.map(t => (
                    <li key={t}>
                        <ButtonInput onClick={() => toggle(t)} className={selectedTags.includes(t) ? 'active' : ''}>
                            {t}
                        </ButtonInput>
                    </li>
                ))}
            </ul>
        </StyledFilterList>
    );
};

export default FilterList;
