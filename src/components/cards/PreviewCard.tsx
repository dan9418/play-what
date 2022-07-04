import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import NumberUtils from "../../core/general/Number.utils";
import Note from "../../core/models/Note";
import { octaveState } from "../../state/state";
import { CardHeader, StyledCard } from "../ui/Card";

const StyledPreviewCard = styled(StyledCard)`
    h2 {
        font-size: 100%;
        padding-bottom: 8px;
    }
    .header {
        display: none;
        @media(min-width: 512px) {
            display: unset;
        }
    }
    table {
        margin: auto;
        border-collapse: collapse;

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
            font-size: 120%;
        }

        .root {
            color: red;
        }
    }
`;

const NoteCell = ({ note, i }) => {
    if (!note) return null;
    return (
        <td className={`note featured ${i === 0 ? 'root' : ''}`}>{note.name}</td>
    );
};

const IntervalCell = ({ interval, isFeatured }) => {
    return (
        <td className={`interval ${isFeatured ? 'featured' : ''}`}>{interval.getName()}</td>
    );
};

const PreviewCard: React.FC<any> = ({ model }) => {
    const intervals = model.intervals;
    const octave = useRecoilValue(octaveState);
    const notes = model.notes && model.notes.map(n => new Note([
        (octave - 4) * 12 + NumberUtils.modulo(n.pod[0], 12),
        n.pod[1]
    ]));

    if (!intervals && !notes) return null;

    return (
        <StyledPreviewCard $n={intervals.length}>
            <CardHeader title={model.name} />
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
                </tbody>
            </table>
        </StyledPreviewCard >
    );
};

export default PreviewCard;
