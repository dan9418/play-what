import React from 'react';
import styled from 'styled-components';
import { ModelId } from '../../../../core/src/models/Model.constants';
import ModelUtils from '../../../../core/src/models/Model.utils';

const StyledIntervalsListDelta = styled.div`
    table {
        text-align: center;
        font-size: 120%;
        border-collapse: collapse;
        width: 100%;
        td, th {
            padding: 4px;
        }
    }
`;

const IntervalsListDelta: React.FC<any> = ({ intervals, afterIntervals }) => {

    return (
        <StyledIntervalsListDelta>
            <table>
                <thead>
                    <tr>
                        <th>Before</th>
                        <th>After</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ModelUtils.getPreview(intervals, { podType: ModelId.Interval })}</td>
                        <td>{ModelUtils.getPreview(afterIntervals, { podType: ModelId.Interval })}</td>
                    </tr>
                </ tbody>
            </ table>
        </StyledIntervalsListDelta>
    )
}

export default IntervalsListDelta;
