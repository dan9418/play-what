import React from 'react';
import styled from 'styled-components';
import { PodType } from '../../../../../core/src/models/Model.constants';
import NoteUtils from '../../../../../core/src/models/Pod/Note/Note.utils';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';

const StyledPodTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    .root {
        text-align: center;
        padding: 16px;
        font-size: 200%;
        font-weight: bold;
    }
    .intervals {
        display: grid;
        grid-template-columns: repeat(${props => props.$cols}, 1fr);

        > div {
            padding: 4px;

            display: flex;
            align-items: center;
            justify-content: center;

            &.note {
                font-weight: bold;
                font-size: 120%;
            }
            &.interval {
                color: #555;
            }
        }
    }
`;

const PodTable: React.FC<any> = ({ root, intervals, notes }) => {
    const rootName = NoteUtils.getName(root);
    const intervalNames = PodListUtils.getName(intervals, PodType.Interval).split(', ');
    const noteNames = PodListUtils.getName(notes, PodType.Note).split(', ');

    return (
        <StyledPodTable $cols={intervals.length}>
            <div className="root">{rootName}</div>
            <div className="intervals">
                {noteNames.map(n => <div className="note">{n}</div>)}
                {intervalNames.map(ivl => <div className="interval">{ivl}</div>)}
            </div>
        </StyledPodTable>
    );
}

export default PodTable;
