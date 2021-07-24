import React from "react";
import Fretboard from '../../../../../viewers/src/Fretboard/Fretboard';
import Panel from './Panel';
import styled from 'styled-components';
import { modelIdState, notesDetailsState, notesState } from "../../../state/state";
import { useRecoilState } from "recoil";

const ViewerPanel: React.FC<any> = () => {

    // @ts-ignore
    const [modelId] = useRecoilState(modelIdState);
    // @ts-ignore
    const [modelValue] = useRecoilState(notesState);

    if (!modelValue.length) return <>'Please set a root'</>;

    const labelProps = {
        modelId,
        modelValue
    }

    return (
        <Fretboard labelProps={labelProps} />
    );
};

export default ViewerPanel;
