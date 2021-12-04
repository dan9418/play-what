import React from "react";
import styled from 'styled-components';
import ButtonInput from "../../../ui/inputs/ButtonInput";

const StyledFilterList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   gap: 16px;
   padding: 16px;

   button {
        background-color: transparent;
        border: 1px solid green;
        color: green;
        padding: 4px 8px;
        font-size: 80%;
   }
`;


const FilterList: React.FC<any> = ({ tag }) => {
    const tags = Object.values(tag)

    return (
        <StyledFilterList>
            {tags.map(t => (
                <li key={t}><ButtonInput>{t}</ButtonInput></li>
            ))}
        </StyledFilterList>
    );
};

export default FilterList;
