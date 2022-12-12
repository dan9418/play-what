import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { FEEDBACK_LINK } from "../../config/constants";
import PageLayout from "../layout/PageLayout";
import Card, { CardHeader, StyledCard } from "../ui/Card";

const StyledHelpPage = styled(PageLayout)`

    ${StyledCard} {
        li {
            list-style-type: disc;
            margin: 8px 0 8px 16px;
        }
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
        margin-top: 64px;
        padding-bottom: 8px;
        border-bottom: 1px solid ${props => props.theme.utils.border};
    }
    
    h4 {
        margin-top: 16px;
        text-transform: uppercase;
        color: ${props => props.theme.text.secondary};
    }
`;


const Page: React.FC<any> = props => {
    return (
        <StyledHelpPage title="Help" >
            <Card title="Website Sections">
                <p>
                    Play What is currently comprised of 3 different domains:                    </p>
                <CardHeader level={3} title="Browse" />
                <p>
                    The <Link to="/browse">browse</Link> section is an extensive directory of many <Link to="/browse/chords">chords</Link> and <Link to="/browse/scales">scales</Link>.
                    <CardHeader level={4} title="Landing Pages" />
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
                    <CardHeader level={4} title="Template Model Pages" />
                    There is a "template model page" for each individual chord and scale shape. It contains information on the intervals used to define each shape.
                    Template pages do not have a root (key center), so they cannot contain any information on specific notes.
                    <CardHeader level={4} title="Rooted Model Pages" />
                    A "rooted model page" is simply a template page with a root. Since a key center is available, rooted pages include notes, frequencies, and instrument previews.
                </p>
                <CardHeader level={3} title="View" />
                <p>The <Link to="/view">view pages</Link> provide an interface to view any chord or scale on an instrument.</p>
                <p>Play What currently supports a <Link to="/view/fretboard">fretboard</Link> and a <Link to="/view/keyboard">keyboard</Link>. The fretboard paramaters can be configured to suit a number of instruments like guitar, bass, mandolin, etc..
                </p>
                <p>
                    There are 3 tabs for viewing/editing the viewer
                </p>
                <CardHeader level={4} title="Summary" />
                <p>
                    The summary tab provides a quick preview of the instrument, tuning, notes, and intervals. It contains a link to the rooted model page.
                </p>
                <CardHeader level={4} title="Notes" />
                <p>
                    The notes tabs contains inputs for chaning the key center, intervals, and display colors.
                </p>
                <CardHeader level={4} title="Instrument" />
                <p>
                    The instrument tab contains inputs for configuring the instrument, like tuning and range.
                </p>

                <CardHeader level={3} title="Search" />
                <p>
                    The <Link to="/search">search page</Link> provides an interface for finding specific chords and scales by name. This page is still experimental and unoptimized.
                </p>
                <p>
                    The search query can include the name and/or key center for any chord or scale in the Play What library. It also understands some other common keywords:
                    <ul>
                        <li>Major</li>
                        <li>Minor</li>
                        <li>Triad</li>
                        <li>Suspended</li>
                        <li>Dominant</li>
                        <li>Diatonic</li>
                        <li>Diminished</li>
                        <li>Augmented</li>
                        <li>Perfect</li>
                        <li>Pentatonic</li>
                        <li>Hexatonic</li>
                        <li>Heptatonic</li>
                        <li>Octatonic</li>
                    </ul>
                </p>
            </Card>
            <Card title="FAQ">
                <ul>
                    <li>
                        <div className="q">When will the site be finished?</div>
                        <div className="ans">The first public beta will open on 8/5/22. The official launch will be sometime in 2023. More information is available on the <Link to='/coming-soon'>Coming Soon Page</Link></div>
                    </li>
                    <li>
                        <div className="q">Where can I submit feedback? Report bugs? Request features?</div>
                        <div className="ans"><a target="_blank" href={FEEDBACK_LINK}>Use this form</a>.</div>
                    </li>
                    <li>
                        <div className="q">Where can I find more information about Play What and the author?</div>
                        <div className="ans">A good place to start might be the <Link to='/about'>About Page</Link>.</div>
                    </li>
                    <li>
                        <div className="q">Is the software open source?</div>
                        <div className="ans">No, but it will be once all logistics and documentation concerns have been addressed.</div>
                    </li>
                    <li>
                        <div className="q">Can I customize the theme?</div>
                        <div className="ans"><Link to='/dev/experimental/theme'>You can try</Link>, but it's not officially supported.</div>
                    </li>
                </ul>
            </Card>
        </StyledHelpPage>
    );
};

export default Page;
