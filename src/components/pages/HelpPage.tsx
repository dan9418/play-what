import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import { StyledPane } from "../layout/Pane";
import Card from "../ui/Card";

const StyledHelpPage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;

    li {
        //list-style-type: disc;
        //margin-left: 16px;
        margin: 8px 0;
    }

    p {
        margin: 16px 0;
    }

    ${StyledPane} a {
        font-size: 120%;
        margin: 0 16px;
    }

    .q {
        font-weight: bold;
    }

    .ans {
        font-style: italic;
        color: ${props => props.theme.text.secondary};
    }
`;


const HelpPage: React.FC<any> = props => {


    return (
        <StyledHelpPage>
            <PageTitle title="Help" subtitle={null} />
            <StyledPane>
                <Card title="Website Breakdown">
                    <p>Play What is currently comprised of 3 different domains:</p>
                    <ul>
                        <li>
                            <Link to="/browse">Browse</Link>
                            for exploring chords and scales in detail</li>
                        <li>
                            <Link to="/view">View</Link>
                            for viewing chords and scales on different instruments</li>
                        <li>
                            <Link to="/search">Search</Link>
                            for finding specific chords and scales</li>
                    </ul>
                </Card>
                <Card title="FAQ">
                    <ul>
                        <li>
                            <div className="q">When will the site be finished?</div>
                            <div className="ans">The official beta will be launched on 8/5/22.</div>
                        </li>
                    </ul>
                </Card>
            </StyledPane>
        </StyledHelpPage>
    );
};

export default HelpPage;
