import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../../../layout/PageBody";
import PageTitle from "../../../layout/PageTitle";
import Card, { CardHeader, StyledCard } from "../../../ui/Card";

const StyledNotebookPage = styled(StyledPageBody)`
    ${StyledCard} {
        margin-top: 16px;
        h3, h4 {
            margin-top: 16px;
        }
        li {
            padding: 8px;
            font-size: 120%;
        }
    }
`;

const NotebookPage: React.FC<any> = () => {
    return (
        <StyledNotebookPage>
            <PageTitle title="Music Notebook" subtitle="A work in progress" />
            <Card title="Pages" >
                <CardHeader as="h3" title="Intervals" />
                <CardHeader as="h4" title="Basics" />
                <ul>
                    <li>Table of intervals and # semitones</li>
                    <li>Table of intervals from fret positions</li>
                    <li>Table of intervals mapped to harmonics</li>
                </ul>
                <CardHeader as="h4" title="Advanced" />
                <ul>
                    <li>Table of extended intervals vs standard intervals</li>
                    <li>
                        <Link to='/dev/notebook/extensions'>Possible extensions in basic chords</Link>
                    </li>
                </ul>

                <CardHeader as="h3" title="Chords" subtitle="A work in progress" />
                <CardHeader as="h4" title="Basics" />
                <ul>
                    <li>Comparison of intervals in common chords</li>
                    <li>Comparison of common chords on fretboard</li>
                </ul>

                <CardHeader as="h4" title="Voicings" />
                <ul>
                    <li>Chord inversions</li>
                    <li>Triad/seventh voicings from E/A/G/G roots</li>
                    <li>Shell voicings from E/A/D roots</li>
                    <li>
                        <Link to='/dev/notebook//voicings'>Chord Voicings</Link>
                    </li>
                </ul>

                <CardHeader as="h4" title="Extended Chords" />
                <ul>
                    <li>Table of extensions found/possible in chords</li>
                    <li>Table of common chords and possible voicings</li>
                </ul>

                <CardHeader as="h4" title="Altered Chords" />
                <ul>
                    <li>List of common examples</li>
                </ul>

                <CardHeader as="h3" title="Scales" subtitle="A work in progress" />
                <CardHeader as="h4" title="Basics" />
                <ul>
                    <li>Comparison of intervals in common scales</li>
                    <li>Comparison of common scales on fretboard</li>
                </ul>
                <CardHeader as="h4" title="Diatonic Modes" />
                <ul>
                    <li>Table of intervals, degrees (#/b), extensions</li>
                    <li>Table of roman numerals</li>
                    <li>7 guitar shapes and links</li>
                </ul>

                <CardHeader as="h3" title="Chord Progressions" subtitle="A work in progress" />
                <ul>
                    <li>List of common progressions with roman numerals</li>
                    <li>
                        <Link to='/dev/notebook//chord-progressions'>Chord Progressions</Link>
                    </li>
                </ul>

                <CardHeader as="h3" title="The CAGED System" subtitle="A work in progress" />
                <ul>
                    <li>
                        <Link to='/dev/notebook//caged'>CAGED Shapes</Link>
                    </li>
                    <li>5 shapes</li>
                    <li>Links between shapes</li>
                    <li>Chords/scales within shapes</li>
                </ul>

                <CardHeader as="h3" title="Chord Charts" subtitle="A work in progress" />
                <ul>
                    <li>
                        <Link to='/dev/notebook//charts'>Chord Charts</Link>
                    </li>
                </ul>

            </Card>
        </StyledNotebookPage >
    )
};

export default NotebookPage;
