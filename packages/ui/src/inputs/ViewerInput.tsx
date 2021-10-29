// import React from 'react';
// import styled from 'styled-components';
// import ViewerInputManager from '../../../app/src/components/explore/edit-panel/InputManagers';
// import ModalSection from '../../../app/src/components/shared/modal/ModalSection';
// import { HELP_VIEWER_CONFIGURE, HELP_VIEWER_EDIT } from '../../../app/src/utils/help';
// import InputRow from '../InputRow';
// import DropdownInput from './DropdownInput';

// const StyledViewerInput = styled.div`

// `;


// const ViewerInput: React.FC<any> = ({ viewerId, setViewerId: _setViewerId, viewerProps, setViewerProps: _setViewerProps }) => {

//     const selectedViewerConfig = VIEWER_PRESET_MAP.get(viewerId);

//     const setViewerId = (config) => {
//         _setViewerId(config.id);
//         _setViewerProps(config.value.presets[0].id)
//     }

//     return (
//         <>
//             <ModalSection title="Change Viewer" helpText={HELP_VIEWER_EDIT}>
//                 <InputRow label="Viewer">
//                     <DropdownInput
//                         value={{ id: viewerId }}
//                         setValue={setViewerId}
//                         options={[]}
//                     />
//                 </InputRow>
//             </ModalSection>
//             <ModalSection title={`Configure ${selectedViewerConfig.name}`} helpText={HELP_VIEWER_CONFIGURE}>
//                 <ViewerInputManager inputs={[]} viewerProps={viewerProps} setViewerProps={_setViewerProps} />
//             </ModalSection>
//         </>
//     );
// }

// export default ViewerInput;
