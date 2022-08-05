import React from "react";
import styled from 'styled-components';
import { FEEDBACK_LINK } from "../../config/constants";
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Public User Beta</td>
                            <td>0.1.0</td>
                            <td>8/5/22</td>
                        </tr>
                        <tr>
                            <td>Official Launch</td>
                            <td>1.0.0</td>
                            <td>2023</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <ul>
                                    <li>Possible name change</li>
                                    <li>Fresh logo</li>
                                    <li>Sharing features</li>
                                    <li>Chord progressions</li>
                                    <li>Cadences</li>
                                    <li>More tunings/voicings</li>
                                    <li>Open source license</li>
                                    <li>Technical documentation</li>
                                    <li>Bug fixes</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Future Versions</td>
                            <td>X.0.0</td>
                            <td>TBD</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <ul>
                                    <li>Build-your-own practice materials</li>
                                    <li>Grand staff viewer</li>
                                    <li>Chord inversions</li>
                                    <li>Rhythm support</li>
                                    <li>Sound support</li>
                                    <li>Ear training</li>
                                    <li>User accounts</li>
                                    <li>...and more!</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Card>
            <Card title="Request A Feature">
                <p><a target="_blank" href={FEEDBACK_LINK}>Use this form</a> to submit a feature request or provide feedback.</p>
            </Card>
        </StyledComingSoonPage >
    );
};

export default IndexPage;
