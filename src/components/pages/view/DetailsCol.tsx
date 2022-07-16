import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Chord from "../../../core/models/Chord";
import { IModelConfig } from "../../../core/models/Model.constants";
import Scale from "../../../core/models/Scale";
import { getModelRoute } from "../../../core/routing/Routing.utils";
import { MODEL_TYPE_OPTIONS } from "./NotesCol";

const StyledDetailsCol = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    .name {
        font-size: 140%;
        display: block;
        padding: 8px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .info {
        display: flex;
        align-items: center;
        justify-content: center;
        
        .item {
            margin: 8px;
            text-align: center;
            .note {
                font-weight: bold;
                font-size: 120%;
            }
            .interval {
                color: ${props => props.theme.text.secondary};
            }
        }
    }
    .instrument {
        .inst-name {
            font-weight: bold;
            font-size: 140%;
            text-align: center;
            padding: 8px;
        }
        .tuning {
            font-size: 120%;
            text-align: center;
            color: ${props => props.theme.text.secondary};
        }
    }
`;

export interface IDetailsColProps {
    modelType: typeof MODEL_TYPE_OPTIONS[0];
    modelConfig;
    root: IModelConfig | any;
    model: Chord | Scale;
    setModelType?;
    setModelConfig?;
    setRoot?;
    setModel?;
    instrumentName: string;
    instrumentTuning: string;
}

const DetailsCol: React.FC<IDetailsColProps> = props => {

    const { modelType, modelConfig, root, setModelType: _setModelType, setModelConfig: _setModelConfig, setRoot: _setRoot, model, setModel, instrumentName, instrumentTuning } = props;

    return (
        <StyledDetailsCol>
            <div className="notes">
                <h3>Notes</h3>
                <Link to={getModelRoute(modelType.id, modelConfig.modelId, root.modelId)}
                    className="name"
                >{model.name}</Link>
                <div className="info">
                    {model.notes && model.notes.map((note, i) => (
                        <div key={i} className="item">
                            <div className="note">{note.name}</div>
                            <div className="interval">{model.intervals[i].getName()}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="instrument">
                <h3>Instrument</h3>
                <div className="inst-name">{instrumentName}</div>
                <div className="tuning">{instrumentTuning}</div>
            </div>
        </StyledDetailsCol>
    );
};

export default DetailsCol;
