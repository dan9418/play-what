import React from "react";
import styled from 'styled-components';
import { INTERVAL_PRESETS } from "../../core/models/Interval/Interval.constants";
import { IPod } from "../../core/models/Model.constants";
import ModelUtils from "../../core/models/Model.utils";
import { ACCIDENTAL_VALUES } from "../../core/models/Note/Note.constants";
import NoteUtils from "../../core/models/Note/Note.utils";
import { DEGREE_PRESETS } from "../../core/theory/Degree.constants";
import { DIATONIC_VALUES } from "../../core/theory/Diatonic.constants";
import THEME from "../../styles/theme";
import { StyledPageBody } from "../_shared/layout/PageBody";

const CORE_INTERVALS = INTERVAL_PRESETS.filter(ivl => ivl.value[0] < 12);

const StyledTestPage = styled(StyledPageBody)`
    max-width: unset;

    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        height: 100%;
        width: 100%;
        overflow: auto; 
    }
        
    table {
        border-collapse: collapse;

        td, th {
            padding: 4px;
        }
        th {
            text-align: left;
        }

        thead th {
            background-color: rgba(0, 0, 0, .2);
        }

        tbody td:nth-child(2), tbody th:nth-child(2) {
            border-right: 1px solid ${THEME.border};
        }
        tr:nth-child(2n+1) {
            background-color: rgba(0, 0, 0, .1);
        }

        .pod {
            color: ${THEME.surface.bg};
            font-size: 80%;
        }

        .invalid {
            color: red;
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
        ACCIDENTAL_VALUES.forEach((accidental) => {
            const a = accidental.symbol;
            const offset = accidental.value;

            const invalidSymbol = offset > 0 ? 'b' : offset < 0 ? '#' : null;

            const rootName = `${spelling}${a}`;
            const rootPod: IPod = [diatonicPitch + offset, d];

            const intervals = CORE_INTERVALS.map(ivl => {
                const ivlPod = ModelUtils.addPod(rootPod, ivl.value);
                const ivlName = NoteUtils.getName(ivlPod);

                //const isInvalid = ivlName.includes(invalidSymbol);
                const isInvalid = ivlName.length > 5;

                return {
                    name: ivlName,
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

const TestPage: React.FC<any> = () => {
    const roots = getRoots();
    return (
        <StyledTestPage>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>Root</th>
                            {
                                CORE_INTERVALS.map(ivl => {
                                    return <th colSpan={2} key={ivl.id}>{ivl.id}</th>
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
                                        <th>{JSON.stringify(r.pod)}</th>
                                        {
                                            r.intervals.map(ivl => {
                                                return <>
                                                    <td key={ivl.id + 'n'} className={ivl.isInvalid ? 'invalid' : ''}>
                                                        {ivl.name}
                                                    </td>
                                                    <td key={ivl.id + 'p'} className="pod">
                                                        {JSON.stringify(ivl.pod)}
                                                    </td>
                                                </>
                                            })
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </StyledTestPage>
    );
};

export default TestPage;
