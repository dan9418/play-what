import React from 'react';
import styled from 'styled-components';
import { PodType } from '../../../../../core/src/models/Model.constants';
import NoteUtils from '../../../../../core/src/models/Pod/Note/Note.utils';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';

const StyledPodTable = styled.div`
    text-align: left;

    label {
        font-weight: bold;
        font-size: 80%;
        color: ${({ theme }) => theme.primary};
        margin-bottom: 4px;
    }
    .preview {
        color: ${({ theme }) => theme.medium};
        margin-bottom: 4px;
    }
    .pods {
        display: none;
        font-size: 80%;
        color: ${({ theme }) => theme.accent};

        margin-bottom: 8px;
    }
`;

const PodTable: React.FC<any> = ({ root, intervals, notes }) => {
    return (
        <StyledPodTable>
            <label>Root</label>
            <div className="preview">{NoteUtils.getName(root)}</div>
            <div className="pods">{JSON.stringify(root)}</div>
            <label>Intervals</label>
            <div className="preview">{PodListUtils.getName(intervals, PodType.Interval)}</div>
            <div className="pods">{JSON.stringify(intervals)}</div>
            <label>Notes</label>
            <div className="preview">{PodListUtils.getName(notes, PodType.Note)}</div>
            <div className="pods">{JSON.stringify(notes)}</div>
        </StyledPodTable>
    );
}

export default PodTable;
