import React from "react";
import styled from 'styled-components';
import { IPod } from "../../../../core/src/models/Model.constants";
import { INTERVAL_PRESETS } from "../../../../core/src/models/Pod/Interval/Interval.constants";
import { ACCIDENTAL_VALUES } from "../../../../core/src/models/Pod/Note/Note.constants";
import NoteUtils from "../../../../core/src/models/Pod/Note/Note.utils";
import PodUtils from "../../../../core/src/models/Pod/Pod.utils";
import { DEGREE_PRESETS } from "../../../../core/src/theory/Degree.constants";
import { DIATONIC_VALUES } from "../../../../core/src/theory/Diatonic.constants";
import THEME from "../../styles/theme";

const StyledTestPage = styled.div`

    padding: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 32px;
    bottom: 0;
    left: 0;
    right: 0;
    

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
            color: ${THEME.medium};
            font-size: 80%;
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

            const rootName = `${spelling}${a}`;
            const rootPod: IPod = [diatonicPitch + offset, d];

            const intervals = INTERVAL_PRESETS.map(ivl => {
                const ivlPod = PodUtils.addPod(rootPod, ivl.value);
                const ivlName = NoteUtils.getName(ivlPod);
                return {
                    name: ivlName,
                    pod: ivlPod
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
                                INTERVAL_PRESETS.map(ivl => {
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
                                                    <td key={ivl.id + 'n'}>{ivl.name}</td>
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
