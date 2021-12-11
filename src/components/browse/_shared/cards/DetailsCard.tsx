import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledDetailsCard = styled.div`
    table {
        border-collapse: collapse;
    
        th {
            text-align: right;
            padding: 4px 8px 4px 4px;
            font-size: 80%;
            text-transform: uppercase;
            color: #555;
        }

        td {
            padding: 4px;
            text-align: center;
            &.featured {
                font-size: 140%;
                font-weight: bold;
            }
            &.frequency, &.ratio {
                font-size: 80%;
                color: #555;
                font-style: italic;
            }
        }
    }
`;

const DetailsCard: React.FC<any> = ({ model }) => {
    const intervals = model.getIntervalListClasses && model.getIntervalListClasses();
    const notes = model.getNoteListClasses && model.getNoteListClasses();

    if (!intervals && !notes) return null;

    return (
        <Card title="Details">
            <StyledDetailsCard>
                <table>
                    <tbody>
                        {notes &&
                            <tr>
                                <th>Notes</th>
                                {notes.map((note, i) => {
                                    return (

                                        <td key={note.id} className={`note featured`}>{note.getName()}</td>

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
                                        <td key={note.id} className={`frequency`}>{note.getFrequency()}</td>
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
