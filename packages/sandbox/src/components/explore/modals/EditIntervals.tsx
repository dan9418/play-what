import React from 'react';
import styled from 'styled-components';
import IntervalUtils from '../../../../../core/src/models/Pod/Interval/Interval.utils';
import IntervalInput from '../../shared/inputs/IntervalInput';
import { StyledHighlightBox } from '../../shared/ui/HighlightBox';
import EditModal from './EditModal';

const IntervalsInputAdapter = ({ afterIntervals, setAfterIntervals }) => <IntervalInput intervals={afterIntervals} setIntervals={setAfterIntervals} />

const StyledIntervalAnalysis = styled(StyledHighlightBox)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

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
            color: #555;
        }
    }
`;

const IntervalsAnalysisAdapter = ({ afterModelDetails }) => {
    const intervals = afterModelDetails.intervals.value;
    return (
        <StyledIntervalAnalysis>
            {intervals.map((ivl, i) => {
                const name = IntervalUtils.getName(ivl);
                const ratio = IntervalUtils.getRatio(ivl);
                return (
                    <div className="interval" key={i}>
                        <div className="name">{name}</div>
                        <div className="ratio">{ratio}</div>
                    </div>
                );
            })}
        </ StyledIntervalAnalysis>
    );
}


const EditIntervalsModal: React.FC = () => {
    return (
        <EditModal
            modalTitle="Edit Intervals"
            InputComponent={IntervalsInputAdapter}
            AnalysisComponent={IntervalsAnalysisAdapter}
        />
    )
}

export default EditIntervalsModal;
