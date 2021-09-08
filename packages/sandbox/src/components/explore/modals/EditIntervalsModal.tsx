import IntervalUtils from '@pw/core/src/models/Pod/Interval/Interval.utils';
import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../shared/core/Modal';
import IntervalsInputPreset from '../../shared/inputs/IntervalsInputPreset';
import IntervalsInputTable from '../../shared/inputs/IntervalsInputTable';
import { StyledHighlightBox } from '../../shared/ui/HighlightBox';
import useEditProps from './useEditProps';

const StyledIntervalAnalysis = styled(StyledHighlightBox)`

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
 
    .interval {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 8px 16px;

        .name {
            font-weight: bold;
            font-size: 200%;
        }

        .ratio {
            margin-top: 4px;
            color: ${({ theme }) => theme.text.mediumDark};
        }
    }
`;

const IntervalsAnalysisAdapter = ({ afterModelDetails }) => {
    const intervals = afterModelDetails.intervals.value;
    return (
        <StyledIntervalAnalysis>
            <ul>
                {intervals.map((ivl, i) => {
                    const name = IntervalUtils.getName(ivl);
                    const ratio = IntervalUtils.getRatio(ivl);
                    return (
                        <li className="interval" key={i}>
                            <div className="name">{name}</div>
                            <div className="ratio">{ratio}</div>
                        </li>
                    );
                })}
            </ul>
            <div className="subtitle">{afterModelDetails.intervals.formattedName}</div>
        </StyledIntervalAnalysis>
    );
}


const EditIntervalsModal: React.FC = () => {
    const editProps = useEditProps();
    return (
        <Modal
            title="Edit Intervals"
            onClose={editProps.onCancel}
        >
            <IntervalsInputTable intervals={editProps.afterIntervals} setIntervals={editProps.setAfterIntervals} />
            <IntervalsInputPreset intervals={editProps.afterIntervals} setIntervals={editProps.setAfterIntervals} />
            <IntervalsAnalysisAdapter {...editProps} />
        </Modal >
    )
}

export default EditIntervalsModal;
