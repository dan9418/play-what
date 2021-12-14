import React from "react";
import styled from 'styled-components';
import ButtonInput from "./ButtonInput";

const StyledFilterList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   gap: 4px;
   margin-bottom: 16px;
   button {
        background-color: transparent;
        border: 1px solid ${props => props.theme.clickable};;
        color: ${props => props.theme.clickable};
        padding: 4px 8px;
        font-size: 80%;
        :hover {
            background-color: rgba(0,0,0,0.1);
        }

        &.active {
            color: white;
            background-color: ${props => props.theme.clickable};
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
            {tags.map(t => (
                <li key={t}>
                    <ButtonInput onClick={() => toggle(t)} className={selectedTags.includes(t) ? 'active' : ''}>
                        {t}
                    </ButtonInput>
                </li>
            ))}
        </StyledFilterList>
    );
};

export default FilterList;
