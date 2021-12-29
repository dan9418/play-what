import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledRelated = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;
    @media(min-width: 512px) {
		grid-template-columns: auto auto;
        & > :first-child:not(:only-child) {
            padding-right: 16px;
            border-right: 1px solid #ccc;
        }
	}

    h2 {
        text-transform: uppercase;
        font-size: 90%;
        color: #${({ theme }) => theme.text.secondary};
    }

    h2, h3, h4 {
        margin-bottom: 8px;
    }

    ul {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        a {
            padding: 4px;
        }
        margin-bottom: 16px;
    }
`;


const RelatedCard: React.FC<any> = ({ model }) => {

    const subchords = model.getSubchords();
    const subscales = model.getSubscales();
    const superchords = model.getSuperchords();
    const superscales = model.getSuperscales();

    return (
        <>
            {subchords.length > 0 &&
                <Card title="Child Chords">
                    <StyledRelated>
                        <ul>
                            {subchords.map(s => (
                                <li key={s.id}><Link to={`/browse/chords/${s.id}`}>{s.name}</Link></li>
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
                                <li key={s.id}><Link to={`/browse/chords/${s.id}`}>{s.name}</Link></li>
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
                                <li key={s.id}><Link to={`/browse/scales/${s.id}`}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </StyledRelated>
                </Card>
            }
            {superscales.length > 0 &&
                <Card title="Parent Chords">
                    <StyledRelated>
                        <ul>
                            {superscales.map(s => (
                                <li key={s.id}><Link to={`/browse/scales/${s.id}`}>{s.name}</Link></li>
                            ))}
                        </ul>
                    </StyledRelated>
                </Card>
            }
        </>
    );
};

export default RelatedCard;
