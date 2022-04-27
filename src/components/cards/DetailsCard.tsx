import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import NumberUtils from "../../core/general/Number.utils";
import Note from "../../core/models/Note";
import { octaveState } from "../../state/state";
import { CardHeader, StyledCard } from "../ui/Card";

const StyledDetailsCard = styled(StyledCard)`
    .header {
        display: none;
        @media(min-width: 512px) {
            display: unset;
        }
    }
    table {
        margin: auto;
        border-collapse: collapse;

        &.mobile {
            display: table;
            @media(min-width: 512px) {
                display: none;
            }
        }
        &.desktop {
            display: none;
            @media(min-width: 512px) {
                display: table;
            }
            th {
                display: none;
            }
        }

        td, th {
            padding: 4px;
            @media(min-width: 512px) {
                padding: 4px 8px;
            }
            text-align: center;
        }

        th {
            text-transform: uppercase;
            font-size: 80%;
        }

        .featured {
            font-weight: bold;
            font-size: 150%;
            @media(min-width: 512px) {
                font-size: 200%;
            }
        }

        .interval {
            font-size: 120%;
            @media(min-width: 512px) {
                font-size: 150%;
            }
        }

        .ratio, .frequency {
            color: ${props => props.theme.text.secondary};
            font-size: 80%;
            @media(min-width: 512px) {
                font-size: 100%;
            }
        }

        .root {
            color: red;
        }
    }
`;

const NoteCell = ({ note, i }) => {
    if (!note) return null;
    return (
        <td className={`note featured ${i === 0 ? 'root' : ''}`}>{note.name}<sub>{note.getOctave()}</sub></td>
    );
};

const IntervalCell = ({ interval, isFeatured }) => {
    return (
        <td className={`interval ${isFeatured ? 'featured' : ''}`}>{interval.getName()}</td>
    );
};

const PitchCell = ({ note }) => {
    if (!note) return null;
    return (
        <td className={`frequency`}>{note.getFrequency(true)}</td>
    );
};

const RatioCell = ({ interval }) => {
    return (
        <td className={`ratio`}>{interval.getRatio()}</td>
    );
};

const DetailsCard: React.FC<any> = ({ model }) => {
    const intervals = model.intervals;
    const octave = useRecoilValue(octaveState);
    const notes = model.notes && model.notes.map(n => new Note([
        (octave - 4) * 12 + NumberUtils.modulo(n.pod[0], 12),
        n.pod[1]
    ]));

    if (!intervals && !notes) return null;

    return (
        <StyledDetailsCard $n={intervals.length}>
            <CardHeader title={notes ? 'Notes' : 'Intervals'} />
            <table className="mobile">
                <thead>
                    <tr>
                        {notes && <th>Note</th>}
                        <th>Interval</th>
                        {notes && <th>Pitch</th>}
                        <th>Ratio</th>
                    </tr>
                </thead>
                <tbody>
                    {intervals.map((ivl, i) => {
                        const note = notes && notes[i];
                        return (
                            <tr key={ivl.modelId}>
                                <NoteCell note={note} i={i} />
                                <IntervalCell interval={ivl} isFeatured={!note} />
                                <PitchCell note={note} />
                                <RatioCell interval={ivl} />
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <table className="desktop">
                <tbody>
                    {notes && <tr>
                        <th>Note</th>
                        {notes.map((note, i) => <NoteCell note={note} key={i} i={i} />)}
                    </tr>}
                    <tr>
                        <th>Interval</th>
                        {intervals.map((ivl, i) => <IntervalCell interval={ivl} key={i} isFeatured={!notes} />)}
                    </tr>
                    {notes && <tr>
                        <th>Pitch</th>
                        {notes.map((note, i) => <PitchCell note={note} key={i} />)}
                    </tr>}
                    <tr>
                        <th>Ratio</th>
                        {intervals.map((ivl, i) => <RatioCell interval={ivl} key={i} />)}
                    </tr>
                </tbody>
            </table>
        </StyledDetailsCard >
    );
};

export default DetailsCard;
