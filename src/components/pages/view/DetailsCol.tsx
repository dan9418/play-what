// import { Link } from "gatsby";
// import React from "react";
// import styled from "styled-components";
// import Chord from "../../../core/models/Chord";
// import { IModelConfig } from "../../../core/models/Model.constants";
// import Scale from "../../../core/models/Scale";
// import { getModelRoute } from "../../../core/routing/Routing.utils";
// import CardSection from "./CardSection";
// import { MODEL_TYPE_OPTIONS } from "./NotesCol";

// const StyledDetailsCol = styled.div`
//   .name {
//     font-size: 140%;
//     display: block;
//     padding: 8px;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//   }
//   .info {
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     .item {
//       margin: 8px;
//       text-align: center;
//       .note {
//         font-weight: bold;
//         font-size: 120%;
//       }
//       .interval {
//         color: ${(props) => props.theme.text.secondary};
//       }
//     }
//   }
//   .notes {
//     min-height: 128px;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//   }
// `;

// export interface IDetailsColProps {
//   modelType: typeof MODEL_TYPE_OPTIONS[0];
//   modelConfig;
//   root: IModelConfig | any;
//   model: Chord | Scale;
//   setModelType?;
//   setModelConfig?;
//   setRoot?;
//   setModel?;
// }

// const DetailsCol: React.FC<IDetailsColProps> = (props) => {
//   const {
//     modelType,
//     modelConfig,
//     root,
//     setModelType: _setModelType,
//     setModelConfig: _setModelConfig,
//     setRoot: _setRoot,
//     model,
//   } = props;

//   return (
//     <StyledDetailsCol>
//       <CardSection>
//         <div className="notes">
//           <Link
//             to={getModelRoute(
//               modelType.id,
//               modelConfig.presetId,
//               root.presetId
//             )}
//             className="name"
//           >
//             {model.name}
//           </Link>
//           <div className="info">
//             {model.notes &&
//               model.notes.map((note, i) => (
//                 <div key={i} className="item">
//                   <div className="note">{note.name}</div>
//                   <div className="interval">{model.intervals[i].getName()}</div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </CardSection>
//     </StyledDetailsCol>
//   );
// };

// export default DetailsCol;
