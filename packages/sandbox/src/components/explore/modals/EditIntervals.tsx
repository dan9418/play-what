import React from 'react';
import IntervalInput from '../../shared/inputs/IntervalInput';
import HighlightBox from '../../shared/ui/HighlightBox';
import EditModal from './EditModal';

const IntervalsInputAdapter = ({ afterIntervals, setAfterIntervals }) => <IntervalInput intervals={afterIntervals} setIntervals={setAfterIntervals} />

const IntervalsAnalysisAdapter = ({ afterModelDetails }) => {
    return (
        <HighlightBox title={afterModelDetails.intervals.preview} subtitle={afterModelDetails.intervals.formattedName} />
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
