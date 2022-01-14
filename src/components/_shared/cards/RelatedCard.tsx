import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRootSuffix } from "../../../contexts/PagePropsContext";
import { ModelId } from "../../../core/models/Model.constants";
import { CHORD_PRESETS, NOTE_PRESETS, SCALE_PRESETS } from "../../../core/models/Model.presets";
import CollectionTable from "../../collection/CollectionTable";
import Card from "../../_shared/ui/Card";

const StyledRelated = styled.div`
    overflow-x: auto;
`;


const RelatedCard: React.FC<any> = ({ model }) => {

    const rootSuffix = useRootSuffix();

    const subchords = model.getSubchords();
    const subscales = model.getSubscales();
    const superchords = model.getSuperchords();
    const superscales = model.getSuperscales();

    const semitones = model.intervals.map(ivl => ivl.pod[0] + 1);

    return (
        <>
            {false && <Card title="Other Roots">
                <StyledRelated>
                    <ul>
                        {NOTE_PRESETS.map(s => (
                            <li key={s.id}><Link to={`/browse/chords/${model.id}/${s.id}/${rootSuffix}`}>{s.name} {/*model.name*/}</Link></li>
                        ))}
                    </ul>
                </StyledRelated>
            </Card>}

            {subchords.length > 0 &&
                <Card title="Child Chords">
                    <StyledRelated>
                        <CollectionTable data={subchords} semitones={semitones} />
                    </StyledRelated>
                </Card>
            }
            {superchords.length > 0 &&
                <Card title="Parent Chords">
                    <StyledRelated>
                        <CollectionTable data={superchords} semitones={semitones} />
                    </StyledRelated>
                </Card>
            }
            {subscales.length > 0 &&
                <Card title="Child Scales">
                    <StyledRelated>
                        <CollectionTable data={subscales} semitones={semitones} />
                    </StyledRelated>
                </Card>
            }
            {superscales.length > 0 &&
                <Card title="Parent Scales">
                    <StyledRelated>
                        <CollectionTable data={superscales} semitones={semitones} />
                    </StyledRelated>
                </Card>
            }
            {model.modelId === ModelId.Chord &&
                <Card title="Other Chords">
                    <StyledRelated>
                        <CollectionTable data={CHORD_PRESETS} semitones={semitones} />
                    </StyledRelated>
                </Card>
            }
            {model.modelId === ModelId.Scale &&
                <Card title="Other Scales">
                    <StyledRelated>
                        <CollectionTable data={SCALE_PRESETS} semitones={semitones} />
                    </StyledRelated>
                </Card>
            }
        </>
    );
};

export default RelatedCard;
