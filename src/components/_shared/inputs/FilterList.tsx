import React from "react";
import styled from 'styled-components';
import ButtonInput from "./ButtonInput";

const StyledFilterList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   gap: 8px;
   margin-bottom: 16px;
   button {
        background-color: transparent;
        border: 1px solid green;
        color: green;
        padding: 4px 8px;
        font-size: 80%;
        :hover {
            background-color: rgba(0,0,0,0.1);
        }
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
