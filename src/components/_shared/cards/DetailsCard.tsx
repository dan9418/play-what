import React from "react";
import styled from 'styled-components';
import { StyledCard } from "../ui/Card";

const StyledDetailsCard = styled(StyledCard)`
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-x: auto;

        .box {
            padding: 8px 16px;
            text-align: center;
            font-size: 140%;
            .featured {
                font-size: 200%;
                font-weight: bold;
            }
            .frequency, .ratio {
                color: ${({ theme }) => theme.text.secondary};
                font-size: 80%;
                padding: 4px;
            }
        }
    }
`;

const DetailsCard: React.FC<any> = ({ model }) => {
    const intervals = model.intervals;
    const notes = model.notes;

    if (!intervals && !notes) return null;

    return (
        <StyledDetailsCard>
            <ul>
                {intervals.map((ivl, i) => {
                    return (
                        <li key={ivl.id} className={`box`}>
                            {notes && <div className={`note featured`}>{notes[i].name}<sub>{notes[i].getOctave()}</sub></div>}
                            <div className={`interval ${notes ? '' : 'featured'}`}>{ivl.getName()}</div>
                            {notes && <div className={`frequency`}>{notes[i].getFrequency(true)}</div>}
                            <div className={`ratio`}>{ivl.getRatio()}</div>
                        </li>
                    );
                })}
            </ul>
        </StyledDetailsCard>
    );
};

export default DetailsCard;