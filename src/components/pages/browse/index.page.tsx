import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRootSuffix } from "../../../contexts/PagePropsContext";
import { ChordId, ScaleId } from "../../../core/models/Model.constants";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";
import Card from "../../ui/Card";
import Icon from "../../ui/Icon";
import { SimpleList } from "../../ui/List";

const StyledBrowsePage = styled(PageLayout)`
    a.all {
        display: block;
        font-size: 140%;
        text-align: right;
        margin-top: 32px;
    }
`;


const Page: React.FC<any> = props => {

    const rootSuffix = useRootSuffix();

    return (
        <StyledBrowsePage title="Browse">
            <ColumnManager desktop={["1fr", "1fr"]}>
                <Card title="Chords">
                    <SimpleList
                        items={[
                            ['Major Triad', `/browse/chords/${ChordId.MajTriad}/${rootSuffix}`],
                            ['Minor Triad', `/browse/chords/${ChordId.MinTriad}/${rootSuffix}`],
                            ['Major 7th', `/browse/chords/${ChordId.Maj7}/${rootSuffix}`],
                            ['Minor 7th', `/browse/chords/${ChordId.Min7}/${rootSuffix}`],
                            ['Dominant 7th', `/browse/chords/${ChordId.Dom7}/${rootSuffix}`],
                            ['Half-Diminished 7th', `/browse/chords/${ChordId.HalfDim7}/${rootSuffix}`]
                        ]}
                    />
                    <Link to="/browse/chords" className="all">See All Chords <Icon iconId="next" size={12} /></Link>
                </Card>
                <Card title="Scales">
                    <SimpleList
                        items={[
                            ['Major (Ionian)', `/browse/scales/${ScaleId.Ionian}/${rootSuffix}`],
                            ['Natural Minor (Aeolian)', `/browse/scales/${ScaleId.Aeolian}/${rootSuffix}`],
                            ['Melodic Minor', `/browse/scales/${ScaleId.MelodicMinor}/${rootSuffix}`],
                            ['Harmonic Minor', `/browse/scales/${ScaleId.HarmonicMinor}/${rootSuffix}`],
                            ['Major Pentatonic', `/browse/scales/${ScaleId.MajorPentatonic}/${rootSuffix}`],
                            ['Minor Pentatonic', `/browse/scales/${ScaleId.MinorPentatonic}/${rootSuffix}`]
                        ]}
                    />
                    <Link to="/browse/scales" className="all">See All Scales <Icon iconId="next" size={12} /></Link>
                </Card>
            </ColumnManager>
        </StyledBrowsePage>
    );
};

export default Page;
