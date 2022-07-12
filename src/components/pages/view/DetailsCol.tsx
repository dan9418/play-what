import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Chord from "../../../core/models/Chord";
import { IModelConfig } from "../../../core/models/Model.constants";
import Scale from "../../../core/models/Scale";
import { getModelRoute } from "../../../core/routing/Routing.utils";
import Card from "../../ui/Card";
import InputRow from "../../ui/InputRow";
import { MODEL_TYPE_OPTIONS } from "./NotesCol";

const StyledDetailsCol = styled.div`
    
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
}

const DetailsCol: React.FC<IDetailsColProps> = props => {

    const { modelType, modelConfig, root, setModelType: _setModelType, setModelConfig: _setModelConfig, setRoot: _setRoot, model, setModel } = props;

    return (
        <StyledDetailsCol>
            <InputRow label="Name">
                <Link to={getModelRoute(modelType.id, modelConfig.modelId, root.modelId)}>{model.name}</Link>
            </InputRow>
            <InputRow label="Instrument">
                Guitar
            </InputRow>
        </StyledDetailsCol>
    );
};

export default DetailsCol;
