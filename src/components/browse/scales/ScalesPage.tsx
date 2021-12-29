import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledPane } from "../../_shared/layout/Pane";
import Card from "../../_shared/ui/Card";

const StyledScalesPage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;

    ${StyledPane} {
        
    }
`;

const ScalesPage: React.FC<any> = props => {
    return (
        <StyledScalesPage>
            <BreadcrumbList id="scales" name="Scales" path={props.path} />
            <PageTitle title="Scales" subtitle={null} />
            <StyledPane>
                <Card title="Scale Basics">
                    <p>
                        A scale is a group of notes played simultaneously. They are the basic building blocks of harmony.
                    </p>
                    <Link to="/browse/scales">Explore Scales</Link>
                </Card>
            </StyledPane>
        </StyledScalesPage>
    );
};

export default ScalesPage;
