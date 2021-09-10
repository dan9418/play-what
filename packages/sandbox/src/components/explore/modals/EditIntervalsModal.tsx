import IntervalUtils from '@pw/core/src/models/Pod/Interval/Interval.utils';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../shared/core/Modal';
import IntervalsInputPreset from '../../shared/inputs/IntervalsInputPreset';
import IntervalsInputTable from '../../shared/inputs/IntervalsInputTable';
import { StyledHighlightBox } from '../../shared/ui/HighlightBox';
import ModalSection from './ModalSection';
import useEditProps from './useEditProps';
import ViewerComparison from './ViewerComparison';

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

    const [isAdvanced, setIsAdvanced] = useState(false);

    const buttonProps = isAdvanced ? {
        buttonText: 'Cancel',
        buttonAction: () => setIsAdvanced(false)
    } : {
        buttonText: 'Advanced',
        buttonAction: () => setIsAdvanced(true)
    };

    return (
        <Modal
            title="Edit"
            {...editProps}
        >
            <IntervalsAnalysisAdapter {...editProps} />
            <ModalSection title="Import Preset" {...buttonProps} />
            {isAdvanced ?
                <IntervalsInputTable intervals={editProps.afterIntervals} setIntervals={editProps.setAfterIntervals} />
                :
                <IntervalsInputPreset intervals={editProps.afterIntervals} setIntervals={editProps.setAfterIntervals} />
            }
             <ViewerComparison {...editProps} />
        </Modal >
    )
}

export default EditIntervalsModal;
