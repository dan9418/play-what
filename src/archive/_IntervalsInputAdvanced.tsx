
// import React from 'react';
// import styled from 'styled-components';
// import ModalSection from '../../../app/src/components/shared/modal/ModalSection';
// import useEditProps from '../../../app/src/hooks/useEditProps';
// import { HELP_INTERVALS_EDIT } from '../../../app/src/utils/help';
// import IntervalUtils from '../../../core/src/models/Interval/Interval.utils';
// import { StyledHighlightBox } from '../HighlightBox';
// import IntervalExtensionsInput from './IntervalExtensionsInput';
// import IntervalsInputTable from './IntervalsInputTable';

// const StyledIntervalAnalysis = styled(StyledHighlightBox)`

//     ul {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         flex-direction: row;
//         flex-wrap: wrap;
//     }

//     .interval {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;

//         padding: 8px 16px;

//         .name {
//             font-weight: bold;
//             font-size: 200%;
//         }

//         .ratio {
//             margin-top: 4px;
//             color: ${({ theme }) => theme.text.mediumDark};
//         }
//     }
// `;

// const IntervalsAnalysisAdapter = ({ modelDetails }) => {
//     const intervals = modelDetails.intervals.value;
//     return (
//         <StyledIntervalAnalysis>
//             <ul>
//                 {intervals.map((ivl, i) => {
//                     const name = IntervalUtils.getName(ivl);
//                     const ratio = IntervalUtils.getRatio(ivl);
//                     return (
//                         <li className="interval" key={i}>
//                             <div className="name">{name}</div>
//                             <div className="ratio">{ratio}</div>
//                         </li>
//                     );
//                 })}
//             </ul>
//             <div className="subtitle">{afterModelDetails.intervals.formattedName}</div>
//         </StyledIntervalAnalysis>
//     );
// }


// const IntervalsInputAdvanced: React.FC = () => {
//     const editProps = useEditProps();

//     return (
//         <>
//             <IntervalsAnalysisAdapter {...editProps} />

//             <ModalSection title="Edit Intervals" helpText={HELP_INTERVALS_EDIT}>
//                 <IntervalsInputTable intervals={editProps.intervals} setIntervals={editProps.setIntervals} />
//             </ModalSection>
//             <ModalSection title="Extensions" helpText={HELP_INTERVALS_EDIT}>
//                 <IntervalExtensionsInput intervals={editProps.intervals} setIntervals={editProps.setIntervals} />
//             </ModalSection>
//         </>
//     )
// }

// export default IntervalsInputAdvanced;
