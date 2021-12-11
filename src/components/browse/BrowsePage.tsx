import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import THEME from "../../styles/theme";
import BreadcrumbList from "../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";

const StyledBrowsePage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;

    .tile-container {
        padding: 16px;
        gap: 16px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            aspect-ratio: 1;

            text-decoration: none;
            border: 2px solid ${THEME.clickable};
            color: ${THEME.clickable};
            border-radius: 8px;
            font-size: 140%;
            font-weight: bold;

            height: 128px;
            width: 128px;

            &:hover {
                background-color: rgba(0,0,0,0.1)
            }
        }
    }
`;


const BrowsePage: React.FC<any> = props => {

    return (
        <StyledBrowsePage>
            <BreadcrumbList id="browse" name="Browse" path={props.path} />
            <PageTitle title="Browse Ideas" subtitle="Select a category to get started..." />
            <div className="tile-container">
                <Link to="/browse/notes">Notes</Link>
                <Link to="/browse/intervals">Intervals</Link>
                <Link to="/browse/chords">Chords</Link>
                <Link to="/browse/scales">Scales</Link>
            </div>
        </StyledBrowsePage>
    );
};

export default BrowsePage;
