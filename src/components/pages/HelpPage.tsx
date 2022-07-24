import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import { StyledPane } from "../layout/Pane";
import Card, { CardHeader } from "../ui/Card";

const StyledHelpPage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;

    li {
        //list-style-type: disc;
        //margin-left: 16px;
        margin: 8px 0;
    }

    p + p {
        margin-top: 16px;
    }

    .q {
        font-weight: bold;
    }

    .ans {
        font-style: italic;
        color: ${props => props.theme.text.secondary};
    }

    h3 {
        width: 100%;
        padding-bottom: 8px;
        border-bottom: 1px solid ${props => props.theme.utils.border};
    }

    h3, h4 {
        margin-top: 16px;
    }

    h4 {
        text-transform: uppercase;
        color: ${props => props.theme.text.secondary};
    }
`;


const HelpPage: React.FC<any> = props => {


    return (
        <StyledHelpPage>
            <PageTitle title="Help" subtitle={null} />
            <StyledPane>
                <Card title="Website Sections">
                    <p>
                        Play What is currently comprised of 3 different domains:                    </p>
                    <CardHeader as="h3" title="Browse" />
                    <p>
                        The <Link to="/browse">browse</Link> section is an extensive directory of many <Link to="/browse/chords">chords</Link> and <Link to="/browse/scales">scales</Link>.
                        <CardHeader as="h4" title="Landing Pages" />
                        There is a landing page for each of the "model types"
                        <ul>
                            <li>
                                <Link to="/browse/chords">Chords</Link>
                            </li>
                            <li>
                                <Link to="/browse/scales">Scales</Link>
                            </li>
                        </ul>
                        <p>
                            Each landing page contains a brief description of the musical concept and a few subcategories. There is also a table comparing the intervals used to define each chord or scale.
                        </p>
                        <CardHeader as="h4" title="Template Pages" />
                        There is a "template page" for each individual chord and scale shape. It contains information on the intervals used to define each shape.
                        Template pages do not have a root (key center), so they cannot contain any information on specific notes.
                        <CardHeader as="h4" title="Rooted Pages" />
                        A "rooted page" is simply a template page with a root. Since a key center is available, rooted pages include notes, frequencies, and instrument previews. 
                    </p>
                    <CardHeader as="h3" title="View" />
                    <p>
                        The <Link to="/view">view</Link> section allows you to view any chord or scale from the browse section on an instrument.
                    </p>
                    <CardHeader as="h3" title="Search" />
                    <p>
                        The <Link to="/search">search page</Link> provides an interface for finding specific chords and scales by name.
                    </p>
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
