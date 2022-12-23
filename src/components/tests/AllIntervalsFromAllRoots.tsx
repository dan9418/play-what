import React from "react";
import styled, { css } from 'styled-components';
import IntervalSpan from "../../core/models/Interval";
import { ACCIDENTAL_VALUES, IPod } from "../../core/models/Model.constants";
import { INTERVAL_PRESETS } from "../../core/models/Model.presets";
import Note from "../../core/models/Note";
import { addPods } from "../../core/models/Pod.static";
import { DEGREE_PRESETS } from "../../core/theory/Degree.constants";
import { DIATONIC_VALUES } from "../../core/theory/Diatonic.constants";
import { Table } from "../ui/Table";
import { TABLE_STYLES_1 } from "../ui/Table.styles";

const FIRST_OCTAVE_INTERVALS = INTERVAL_PRESETS.filter(ivl => ivl.value[0] < 12);
const ACCIDENTALS = ACCIDENTAL_VALUES.filter(a => Math.abs(a.value) < 2);

const StyledTest = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;

    .invalid {
        color: ${({ theme }) => theme.status.negative};
        font-weight: bold;
    }
`;

interface ITestShape {
    name: string;
    pod: IPod;
    intervals: {
        name: string;
        pod: IPod;
        isInvalid: boolean;
    }[]
}

const getRoots = (): ITestShape[] => {
    const roots: ITestShape[] = [];
    DEGREE_PRESETS.forEach((degree) => {
        const spelling = degree.id;
        const d = degree.value;

        const diatonicPitch = DIATONIC_VALUES[d].value[0];
        ACCIDENTALS.forEach((accidental) => {
            const a = accidental.symbol;
            const offset = accidental.value;

            const rootName = `${spelling}${a}`;
            const rootPod: IPod = [diatonicPitch + offset, d];

            const intervals = FIRST_OCTAVE_INTERVALS.map(ivl => {
                const ivlPod = addPods(rootPod, ivl.value);
                let note;
                let isInvalid = false;

                try {
                    note = new Note(ivlPod);
                }
                catch (e) {
                    isInvalid = true;
                }

                //const isInvalid = ivlName.length > 5;

                return {
                    name: note ? note.name as string : '?',
                    pod: ivlPod,
                    isInvalid
                }
            })

            roots.push({
                name: rootName,
                pod: rootPod,
                intervals
            });
        });
    });
    return roots;
}

const HEAD = [
    {
        cols: [
            'Root',
            ...FIRST_OCTAVE_INTERVALS.map(ivl => IntervalSpan.fromValue(ivl.value).getName())
        ]
    }
];

const BODY = getRoots().map(r => ({
    cols: [
        r.name,
        ...r.intervals.map(ivl => ({
            className: ivl.isInvalid ? 'invalid' : '',
            content: ivl.name
        }))
    ]
}))

const AllIntervalsFromAllRoots: React.FC<any> = () => {
    return (
        <StyledTest>
            <Table
                styles={TABLE_STYLES_1}
                headerColIndicies={[0]}
                thead={HEAD}
                tbody={BODY}
            />
        </StyledTest>
    );
};

export default AllIntervalsFromAllRoots;
