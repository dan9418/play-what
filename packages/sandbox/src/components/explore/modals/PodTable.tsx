import React from 'react';
import styled from 'styled-components';
import { ModelId } from '../../../../../core/src/models/Model.constants';
import ModelUtils from '../../../../../core/src/models/Model.utils';

const StyledPodTable = styled.div`
    text-align: left;

    label {
        font-weight: bold;
        font-size: 80%;
        color: ${({ theme }) => theme.primary};
        margin-bottom: 4px;
    }
    .preview {
        color: ${({ theme }) => theme.primary};
        margin-bottom: 4px;
    }
    .pods {
        font-size: 80%;
        color: ${({ theme }) => theme.accent};

        margin-bottom: 8px;
    }
`;

const PodTable: React.FC<any> = ({ root, intervals, notes }) => {
    return (
        <StyledPodTable>
            <label>Root</label>
            <div className="preview">{ModelUtils.getPreview([root], { podType: ModelId.Note })}</div>
            <div className="pods">{JSON.stringify(root)}</div>
            <label>Intervals</label>
            <div className="preview">{ModelUtils.getPreview(intervals, { podType: ModelId.Interval })}</div>
            <div className="pods">{JSON.stringify(intervals)}</div>
            <label>Notes</label>
            <div className="preview">{ModelUtils.getPreview(notes, { podType: ModelId.Note })}</div>
            <div className="pods">{JSON.stringify(notes)}</div>
        </StyledPodTable>
    );
}

export default PodTable;
