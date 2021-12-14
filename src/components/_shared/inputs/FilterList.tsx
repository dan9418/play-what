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
        background-color: ${({ theme }) => theme.transparent};;
        border: 1px solid ${props => props.theme.state.interactive};;
        color: ${props => props.theme.state.interactive};
        padding: 4px 8px;
        font-size: 80%;
        :hover {
            background-color: ${({ theme }) => theme.state.hoverDark};
        }

        &.active {
            color: ${({ theme }) => theme.white};;
            background-color: ${props => props.theme.state.interactive};
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
