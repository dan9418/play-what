import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import Card, { StyledCard } from "../ui/Card";



const StyledComingSoonPage = styled(StyledPageBody)`
    table {
        border-collapse: collapse;
        width: 100%;
        
        td, th {
            padding: 8px;
            text-align: left;
            vertical-align: top;
        }

        th {
            border-bottom: 1px solid ${props => props.theme.utils.border};
        }

        tr:not(:last-child) {
            td {
                border-bottom: 1px solid ${props => props.theme.utils.border};
            }
        }
    }

	${StyledCard} {
        margin-top: 16px;
        li {
            margin-bottom: 8px;
            list-style-type: disc;
            margin-left: 16px;
        }
    }
`;

const IndexPage: React.FC<any> = () => {

    return (
        <StyledComingSoonPage>
            <PageTitle title="Coming Soon" subtitle="Potential Features" />
            <Card title="Release Schedule">
                <table>
                    <thead>
                        <tr>
                            <th>Release</th>
                            <th>Version</th>
                            <th>Date</th>
                            <th>Features</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Public User Beta</td>
                            <td>0.1.0</td>
                            <td>8/5/22</td>
                            <td>
                                <ul>
                                    <li>New home page</li>
                                    <li>Customizable note labels</li>
                                    <li>Customizable note colors</li>
                                    <li>Better extended chords experience</li>
                                    <li>Feedback / feature request form</li>
                                    <li>Basic documentation</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Official Launch</td>
                            <td>1.0.0</td>
                            <td>2023</td>
                            <td>
                                <ul>
                                    <li>Finalized Name</li>
                                    <li>Fresh Logo</li>
                                    <li>Sharing Features</li>
                                    <li>Chord Progressions</li>
                                    <li>Cadences</li>
                                    <li>More tunings/voicings</li>
                                    <li>Open Source License</li>
                                    <li>Code Documentation</li>
                                    <li>Bug Fixes</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Future Versions</td>
                            <td>X.0.0</td>
                            <td>TBD</td>
                            <td>
                                <ul>
                                    <li>Build-Your-Own Practice Materials</li>
                                    <li>Grand Staff Viewer</li>
                                    <li>Chord Inversions</li>
                                    <li>Rhythm Features</li>
                                    <li>Sound Features</li>
                                    <li>Ear Training</li>
                                    <li>User Accounts</li>
                                    <li>...and more!</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Card>
            <Card title="Request A Feature">
                <p>A form for submitting feature requests, bugs, and general feedback will be provided soon.</p>
            </Card>
        </StyledComingSoonPage>
    );
};

export default IndexPage;
