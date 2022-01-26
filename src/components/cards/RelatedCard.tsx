import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRootSuffix } from "../../contexts/PagePropsContext";
import { ModelId } from "../../core/models/Model.constants";
import { CHORD_PRESETS, NOTE_PRESETS, SCALE_PRESETS } from "../../core/models/Model.presets";
import CollectionTable from "../collection/CollectionTable";
import Card from "../ui/Card";

const StyledCollectionList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    a {
        padding: 4px 8px;
    }
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
                <ul>
                    {NOTE_PRESETS.map(s => (
                        <li key={s.id}><Link to={`/browse/chords/${model.id}/${s.id}/${rootSuffix}`}>{s.name} {/*model.name*/}</Link></li>
                    ))}
                </ul>
            </Card>}

            {subchords.length > 0 &&
                <Card title="Child Chords">
                    <CollectionTable data={subchords} semitones={semitones} />
                </Card>
            }
            {superchords.length > 0 &&
                <Card title="Parent Chords">
                    <CollectionTable data={superchords} semitones={semitones} />
                </Card>
            }
            {subscales.length > 0 &&
                <Card title="Child Scales">
                    <CollectionTable data={subscales} semitones={semitones} />
                </Card>
            }
            {superscales.length > 0 &&
                <Card title="Parent Scales">
                    <CollectionTable data={superscales} semitones={semitones} />
                </Card>
            }
            {model.modelId === ModelId.Chord &&
                <Card title="Other Chords">
                    <StyledCollectionList>
                        {CHORD_PRESETS.map(p => <li key={p.id}>
                            <Link to={`/browse/chords/${p.id}/${rootSuffix}`}>
                                {p.name}
                            </Link>
                        </li>)}
                    </StyledCollectionList>
                </Card>
            }
            {model.modelId === ModelId.Scale &&
                <Card title="Other Scales">
                    <StyledCollectionList>
                        {SCALE_PRESETS.map(p => <li key={p.id}>
                            <Link to={`/browse/scales/${p.id}/${rootSuffix}`}>
                                {p.name}
                            </Link>
                        </li>)}
                    </StyledCollectionList>
                </Card>
            }

        </>
    );
};

export default RelatedCard;
