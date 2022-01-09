import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRootSuffix } from "../../../contexts/PagePropsContext";
import { NOTE_PRESETS } from "../../../core/models/Model.presets";
import Card from "../../_shared/ui/Card";

const StyledRelated = styled.div`
    ul {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        a {
            padding: 4px;
        }
    }
`;


const RelatedCard: React.FC<any> = ({ model }) => {

    const rootSuffix = useRootSuffix();

    const subchords = model.getSubchords();
    const subscales = model.getSubscales();
    const superchords = model.getSuperchords();
    const superscales = model.getSuperscales();

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
                        <ul>
                            {subchords.map(s => (
                                <li key={s.id}><Link to={`/browse/chords/${s.id}/${rootSuffix}`}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </StyledRelated>
                </Card>
            }
            {superchords.length > 0 &&
                <Card title="Parent Chords">
                    <StyledRelated>
                        <ul>
                            {superchords.map(s => (
                                <li key={s.id}><Link to={`/browse/chords/${s.id}/${rootSuffix}`}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </StyledRelated>
                </Card>
            }
            {subscales.length > 0 &&
                <Card title="Child Scales">
                    <StyledRelated>
                        <ul>
                            {subscales.map(s => (
                                <li key={s.id}><Link to={`/browse/scales/${s.id}/${rootSuffix}`}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </StyledRelated>
                </Card>
            }
            {superscales.length > 0 &&
                <Card title="Parent Scales">
                    <StyledRelated>
                        <ul>
                            {superscales.map(s => (
                                <li key={s.id}><Link to={`/browse/scales/${s.id}/${rootSuffix}`}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </StyledRelated>
                </Card>
            }
        </>
    );
};

export default RelatedCard;
