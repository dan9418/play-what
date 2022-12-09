import { Link } from "gatsby";
import React, { ReactNode } from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../../../layout/PageBody";
import PageTitle from "../../../layout/PageTitle";
import Card, { CardHeader, StyledCard } from "../../../ui/Card";

const StyledNotebookPage = styled(StyledPageBody)`
    ${StyledCard} {
        margin-top: 16px;
    }
`;

interface IListItem {
    text: string;
    link?: string;
}

interface IList {
    title?: string;
    subtitle?: string;
    lists?: IList[];
    items?: | IListItem[];
}

const StyledList = styled.section`
    li:not(:first-child) {
        margin-top: 4px;
    }
    h1, h2, h3, h4, h5, h6, h7 {
        font-weight: bold;
    }
    h1, h2, h3, h4, h5, h6, h7, ul {
        margin-top: 16px;
        margin-left: 8px;
    }
`;

const List: React.FC<IList & { level?: number, prefix?: string }> = ({ title, subtitle, items, lists, level = 1, prefix = '' }) => {
    const Title = `h${level}` as any;
    const Subtitle = `h${level + 1}` as any;
    return (
        <StyledList>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            <ul>
                {items && items.length > 0 && (
                    items.map(({ text, link }) => (
                        <li key={text}>{
                            link ? <Link to={`${prefix}${link}`}>{text}</Link> : text
                        }</li>
                    ))
                )}
                {lists && (
                    <li>
                        {lists.map(l => <List {...l} key={l.title} level={level + 1} prefix={prefix} />)}
                    </li>
                )}
            </ul>
        </StyledList>
    );
}

const LINK_PREFIX = '/dev/notebook';

const LISTS: IList[] = [
    {
        title: 'Intervals',
        lists: [
            {
                title: 'Basics',
                items: [
                    {
                        text: 'Table of intervals and # semitones'
                    },
                    {
                        text: 'Table of intervals from fret positions'
                    },
                    {
                        text: 'Table of intervals mapped to harmonics'
                    }
                ]
            },
            {
                title: 'Advanced',
                items: [
                    {
                        text: 'Table of extended intervals vs standard intervals'
                    },
                    {
                        text: 'Possible extensions in basic chords',
                        link: '/extensions'
                    }
                ]
            }
        ]
    },
    {
        title: 'Chords',
        lists: [
            {
                title: 'Voicings',
                items: [
                    {
                        text: 'Chord inversions'
                    },
                    {
                        text: 'Triad/seventh voicings from E/A/G/G roots'
                    },
                    {
                        text: 'Shell voicings from E/A/D roots'
                    },
                    {
                        text: 'Chord Voicings',
                        link: '/voicings'
                    }
                ]
            },
            {
                title: 'Extended Chords',
                items: [
                    {
                        text: 'Table of extensions found/possible in chords'
                    },
                    {
                        text: 'Table of common chords and possible voicings'
                    }
                ]
            },
            {
                title: 'Altered Chords',
                items: [
                    {
                        text: 'List of common examples'
                    },

                ]
            }
        ]
    },
    {
        title: 'Scales',
        lists: [
            {
                title: 'Basics',
                items: [
                    {
                        text: 'Comparison of intervals in common scales',
                        link: ''
                    },
                    {
                        text: 'Comparison of common scales on fretboard',
                        link: ''
                    }
                ]
            },
            {
                title: 'Diatonic Modes',
                items: [
                    {
                        text: 'Table of intervals, degrees (#/b), extensions',
                        link: ''
                    },
                    {
                        text: 'Table of roman numerals',
                        link: ''
                    },
                    {
                        text: '7 guitar shapes and links',
                        link: ''
                    }
                ]
            }
        ]
    },
    {
        title: 'Chord Progressions',
        items: [
            {
                text: 'List of common progressions with roman numerals',
                link: ''
            },
            {
                text: 'Chord Progressions',
                link: '/chord-progressions'
            }
        ]
    },
    {
        title: 'The CAGED System',
        items: [
            {
                text: 'CAGED Shapes',
                link: '/caged'
            },
            {
                text: '5 shapes',
                link: ''
            },
            {
                text: 'Links between shapes',
                link: ''
            },
            {
                text: 'Chords/scales within shapes',
                link: ''
            }
        ]
    },
    {
        title: 'Chord Charts',
        items: [
            {
                text: 'Jazz Standards',
                link: '/charts'
            }
        ]
    }
];

const NotebookPage: React.FC<any> = () => {
    return (
        <StyledNotebookPage>
            <PageTitle title="Music Notebook" subtitle="A work in progress" />
            <Card title="Pages" >
                <List lists={LISTS} prefix={LINK_PREFIX} />
            </Card>
        </StyledNotebookPage >
    );
};

export default NotebookPage;
