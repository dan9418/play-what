import React from "react";
import styled from 'styled-components';
import IntervalSpan from "../../core/models/Interval";
import { ACCIDENTAL_VALUES, IPod } from "../../core/models/Model.constants";
import { INTERVAL_PRESETS } from "../../core/models/Model.presets";
import Note from "../../core/models/Note";
import { addPods } from "../../core/models/Pod.static";
import { DEGREE_PRESETS } from "../../core/theory/Degree.constants";
import { DIATONIC_VALUES } from "../../core/theory/Diatonic.constants";

const FIRST_OCTAVE_INTERVALS = INTERVAL_PRESETS.filter(ivl => ivl.value[0] < 12);
const ACCIDENTALS = ACCIDENTAL_VALUES.filter(a => Math.abs(a.value) < 2);
const SHOW_PODS = false;

const StyledTest = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto; 
        
    table {
        border-collapse: collapse;

        td, th {
            border: 1px solid ${({ theme }) => theme.utils.border};

            height: 40px;
            width: 40px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        th {
            text-align: left;
            white-space: nowrap;
        }

        th {
            background-color: ${({ theme }) => theme.utils.hoverDark};
        }

        .pod {
            color: ${props => props.theme.text.secondary};
            font-size: 80%;
        }

        .invalid {
            color: ${({ theme }) => theme.status.negative};
            font-weight: bold;
        }
    }
`;


const getRoots = () => {
    const roots = [];
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
                    name: note ? note.name : '?',
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

const AllIntervalsFromAllRoots: React.FC<any> = () => {
    const roots = getRoots();
    return (
        <StyledTest>
            <table>
                <thead>
                    <tr>
                        <th>Root</th>
                        {
                            FIRST_OCTAVE_INTERVALS.map(ivl => {
                                return <th colSpan={SHOW_PODS ? 2 : 1} key={ivl.id}>{IntervalSpan.fromValue(ivl.value).getName()}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        roots.map(r => {
                            return (
                                <tr key={r.name}>
                                    <th>{r.name}</th>
                                    {SHOW_PODS && <th>{JSON.stringify(r.pod)}</th>}
                                    {
                                        r.intervals.map(ivl => {
                                            return <>
                                                <td key={ivl.id + 'n'} className={ivl.isInvalid ? 'invalid' : ''}>
                                                    {ivl.name}
                                                </td>
                                                {SHOW_PODS &&
                                                    <td key={ivl.id + 'p'} className="pod">
                                                        {JSON.stringify(ivl.pod)}
                                                    </td>}
                                            </>
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </StyledTest>
    );
};

export default AllIntervalsFromAllRoots;
