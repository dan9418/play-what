import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledDetailsCard = styled.div`
    //aspect-ratio: 1.5;

    display: flex;
    align-items: center;
    justify-content: center;

    table {
        border-collapse: collapse;
   
        th {
            text-align: right;
            padding-right: 16px;
            text-transform: uppercase;
            color: ${({ theme }) => theme.text.secondary};
            border-right: 1px solid ${({ theme }) => theme.utils.border};
        }

        td {
            padding: 8px 16px;
            text-align: center;
            font-size: 140%;
            &.featured {
                font-size: 200%;
                font-weight: bold;
                border-bottom: 1px solid ${({ theme }) => theme.utils.border};
            }
            &.frequency, &.ratio {
                color: ${({ theme }) => theme.text.secondary};
                font-size: 80%;
            }
        }
    }
`;

const DetailsCard: React.FC<any> = ({ model }) => {
    const intervals = model.intervals;
    const notes = model.notes;

    if (!intervals && !notes) return null;

    return (
        <Card>
            <StyledDetailsCard>
                <table>
                    <tbody>
                        {notes &&
                            <tr>
                                <th>Notes</th>
                                {notes.map((note, i) => {
                                    return (
                                        <td key={note.id} className={`note featured`}>
                                            {note.name}
                                            <sub>{note.getOctave()}</sub>
                                        </td>
                                    );
                                })}
                            </tr>
                        }
                        {notes &&
                            <tr>
                                <th>Pods</th>
                                {notes.map((note, i) => {
                                    return (
                                        <td key={note.id} className={`ratio`}>
                                            {JSON.stringify(note.pod)}
                                        </td>
                                    );
                                })}
                            </tr>
                        }
                        <tr>
                            <th>Intervals</th>
                            {intervals.map((ivl, i) => {
                                return (
                                    <td key={ivl.id} className={`interval ${notes ? '' : 'featured'}`}>{ivl.getName()}</td>
                                );
                            })}
                        </tr>
                        {notes &&
                            <tr>
                                <th>Frequency</th>
                                {notes.map((note, i) => {
                                    return (
                                        <td key={note.id} className={`frequency`}>{note.getFrequency(true)}</td>
                                    );
                                })}
                            </tr>
                        }
                        <tr>
                            <th>Ratio</th>
                            {intervals.map((ivl, i) => {
                                return (
                                    <td key={ivl.id} className={`ratio`}>{ivl.getRatio()}</td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </StyledDetailsCard>
        </Card >
    );
};

export default DetailsCard;
