import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import BreadcrumbList from "../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import { StyledPane } from "../_shared/layout/Pane";
import Card from "../_shared/ui/Card";
import Icon from "../_shared/ui/Icon";

const StyledBrowsePage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;

    ${StyledPane} {
        max-width: 512px;
        margin: 16px auto;
        p {
            margin: 16px 0 48px;
        }

        a {
            display: block;
            font-size: 140%;
            text-align: right;
        }
    }
`;


const BrowsePage: React.FC<any> = props => {

    return (
        <StyledBrowsePage>
            <BreadcrumbList id="browse" name="Browse" path={props.path} />
            <PageTitle title="Browse" subtitle={null} />
            <StyledPane>
                <Card title="Chords">
                    <p>
                        A chord is a group of notes played simultaneously. They are the basic building blocks of harmony.
                    </p>
                    <Link to="/browse/chords">Explore Chords <Icon iconId="next" /></Link>
                </Card>
                <Card title="Scales">
                    <p>
                        A scale is a group of notes played sequentially. They are the basic building blocks of melody.
                    </p>
                    <Link to="/browse/scales">Explore Scales <Icon iconId="next" /></Link>
                </Card>
            </StyledPane>
        </StyledBrowsePage>
    );
};

export default BrowsePage;
