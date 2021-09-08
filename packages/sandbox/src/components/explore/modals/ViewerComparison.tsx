// import React from 'react';
// import styled from 'styled-components';
// import HighlightBox from '../../shared/ui/HighlightBox';
// import Viewer from '../Viewer';
// import ModalSection from './ModalSection';
// import PodTable from './PodTable';

// const StyledEditModal = styled.div`
//     .comparison {
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         gap: 16px;
//     }
// `;

// const EditModal: React.FC<any> = ({ modalTitle, InputComponent, AnalysisComponent, hideModels, ...rest }) => {

//     return (
//         <div className="comparison">
//             <div>
//                 <h3>Before</h3>
//                 <ModalSection title="Before" />
//                 {!hideModels && (
//                     <HighlightBox>
//                         <PodTable root={beforeRoot} intervals={beforeIntervals} notes={beforeModelDetails.notes.value} />
//                     </HighlightBox>
//                 )}
//                 <Viewer details={beforeModelDetails} viewerDetails={beforeViewerDetails} />
//             </div>

//             <div>
//                 <ModalSection title="After" />
//                 {!hideModels && (
//                     <HighlightBox >
//                         <PodTable root={afterRoot} intervals={afterIntervals} notes={afterModelDetails.notes.value} />
//                     </HighlightBox>
//                 )}
//                 <Viewer details={afterModelDetails} viewerDetails={afterViewerDetails} />
//             </div>
//         </div>
//     )
// }

// export default EditModal;
