import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ModelId } from '../../../../core/src/models/Model.constants';
import ModelUtils from '../../../../core/src/models/Model.utils';
import { intervalsDetailsState, intervalsState } from '../../state/state';

const StyledIntervalsListDelta = styled.div`
    table {
        text-align: left;
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
                        <th></th>
                        <th>Intervals</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Before</th>
                        <td>{ModelUtils.getPreview(intervals, { podType: ModelId.Interval })}</td>
                    </tr>
                    <tr>
                        <th>After</th>
                        <td>{ModelUtils.getPreview(afterIntervals, { podType: ModelId.Interval })}</td>
                    </tr>
                </ tbody>
            </ table>
        </StyledIntervalsListDelta>
    )
}

export default IntervalsListDelta;
