import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import THEME from "../../styles/theme";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";

const StyledBrowsePage = styled(StyledPageBody)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .tile-container {
        padding: 16px;
        gap: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;

        a {
            width: 100%;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;

            text-decoration: none;
            background-color: ${THEME.clickable};
            color: white;
            border-radius: 8px;
            font-size: 200%;

            &:hover {
                background-color: ${THEME.active};
            }
        }
    }
`;


const BrowsePage: React.FC<any> = () => {

    return (
        <StyledBrowsePage>
            <PageTitle title="Browse Ideas" subtitle="Select a category to get started..." />
            <div className="tile-container">
                <Link to="/browse/chords">Chords</Link>
                <Link to="/browse/scales">Scales</Link>
                <Link to="/browse/intervals">Intervals</Link>
                <Link to="/browse/songs">Songs</Link>
            </div>
        </StyledBrowsePage>
    );
};

export default BrowsePage;
