import React from "react";
import styled, { css } from 'styled-components';
import { FEEDBACK_LINK } from "../../config/constants";
import PageLayout from "../layout/PageLayout";
import Card from "../ui/Card";
import { Table } from "../ui/Table";

const StyledComingSoonPage = styled(PageLayout)``;

const tableStyles = css`
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
`

const Page: React.FC<any> = () => {
    return (
        <StyledComingSoonPage title="Coming Soon" subtitle="Potential Features">
            <Card title="Release Schedule">
                <Table
                    styles={tableStyles}
                    thead={[
                        {
                            cols: ['Release', 'Version', 'Date']
                        }
                    ]}
                    tbody={[
                        {
                            cols: ['Public User Beta', '0.1.0', '8/5/22']
                        },
                        {
                            cols: ['Official Launch', '1.0.0', '2023']
                        },
                        {
                            cols: [{
                                colSpan: 3,
                                content: (
                                    <ul className="disc">
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
                                )
                            }]
                        },
                        {
                            cols: ['Future Versions', 'X.0.0', 'TBD']
                        },
                        {
                            cols: [{
                                colSpan: 3,
                                content: (
                                    <ul className="disc">
                                        <li>Build-your-own practice materials</li>
                                        <li>Grand staff viewer</li>
                                        <li>Chord inversions</li>
                                        <li>Rhythm support</li>
                                        <li>Sound support</li>
                                        <li>Ear training</li>
                                        <li>User accounts</li>
                                        <li>...and more!</li>
                                    </ul>
                                )
                            }]
                        },
                    ]}
                />
            </Card>
            <Card title="Request A Feature">
                <p><a target="_blank" href={FEEDBACK_LINK}>Use this form</a> to submit a feature request or provide feedback.</p>
            </Card>
        </StyledComingSoonPage >
    );
};

export default Page;
