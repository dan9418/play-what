import IntervalUtils from '@pw/core/src/models/Pod/Interval/Interval.utils';
import React from 'react';
import styled from 'styled-components';
import IntervalsInputTable from '@pw/ui/src/inputs/IntervalsInputTable';
import { HELP_INTERVALS_EDIT, HELP_PREVIEW } from '../../../app/src/utils/help';
import { StyledHighlightBox } from '../ui/HighlightBox';
import ModalSection from '../../../app/src/components/explore/edit-modal/ModalSection';
import useEditProps from '../../../app/src/hooks/useEditProps';
import ViewerComparison from '../../../app/src/components/explore/edit-modal/ViewerComparison';

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


const IntervalsInputAdvanced: React.FC = () => {
    const editProps = useEditProps();

    return (
        <>
            <IntervalsAnalysisAdapter {...editProps} />

            <ModalSection title="Edit Intervals" helpText={HELP_INTERVALS_EDIT}>
                <IntervalsInputTable intervals={editProps.afterIntervals} setIntervals={editProps.setAfterIntervals} />
            </ModalSection>
            <ModalSection title="Preview" helpText={HELP_PREVIEW}>
                <ViewerComparison {...editProps} />
            </ModalSection>
        </>
    )
}

export default IntervalsInputAdvanced;
