import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRootSuffix } from "../../contexts/PagePropsContext";
import { ChordId, ScaleId } from "../../core/models/Model.constants";
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import { StyledPane } from "../layout/Pane";
import Card, { StyledCard } from "../ui/Card";
import Icon from "../ui/Icon";

const StyledBrowsePage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;

    ${StyledPane} {
        display: grid;
        grid-template-columns: 1fr;
        @media(min-width: 512px) {
            grid-template-columns: 1fr 1fr;
        }

        margin: 16px auto;

        a.all {
            display: block;
            font-size: 140%;
            text-align: right;
            margin-top: 32px;
        }

        li {
            list-style-type: disc;
            margin-left: 16px;
        }
    }
`;


const BrowsePage: React.FC<any> = props => {

    const rootSuffix = useRootSuffix();

    return (
        <StyledBrowsePage>
            <PageTitle title="Browse" subtitle={null} />
            <StyledPane>
                <Card title="Chords">
                    <ul>
                        <li><Link to={`/browse/chords/${ChordId.MajTriad}/${rootSuffix}`}>Major Triad</Link></li>
                        <li><Link to={`/browse/chords/${ChordId.MinTriad}/${rootSuffix}`}>Minor Triad</Link></li>
                        <li><Link to={`/browse/chords/${ChordId.Maj7}/${rootSuffix}`}>Major 7th</Link></li>
                        <li><Link to={`/browse/chords/${ChordId.Min7}/${rootSuffix}`}>Minor 7th</Link></li>
                        <li><Link to={`/browse/chords/${ChordId.Dom7}/${rootSuffix}`}>Dominant 7th</Link></li>
                        <li><Link to={`/browse/chords/${ChordId.HalfDim7}/${rootSuffix}`}>Half-Diminished 7th</Link></li>
                    </ul>
                    <Link to="/browse/chords" className="all">See All Chords <Icon iconId="next" size={12} /></Link>
                </Card>
                <Card title="Scales">
                    <ul>
                        <li><Link to={`/browse/scales/${ScaleId.Ionian}/${rootSuffix}`}>Major (Ionian)</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Aeolian}/${rootSuffix}`}>Natural Minor (Aeolian)</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.MelodicMinor}/${rootSuffix}`}>Melodic Minor</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.HarmonicMinor}/${rootSuffix}`}>Harmonic Minor</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.MajorPentatonic}/${rootSuffix}`}>Major Pentatonic</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.MinorPentatonic}/${rootSuffix}`}>Minor Pentatonic</Link></li>
                    </ul>
                    <Link to="/browse/scales" className="all">See All Scales <Icon iconId="next" size={12} /></Link>
                </Card>
            </StyledPane>
        </StyledBrowsePage>
    );
};

export default BrowsePage;
