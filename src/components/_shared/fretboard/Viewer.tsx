import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import ModelUtils from "../../../core/models/Model.utils";
import { intervalsState, rootState } from "../../../state/state";
import Fretboard from "./Fretboard";

const StyledViewer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Viewer: React.FC<any> = props => {

    const [intervals, setIntervals] = useRecoilState(intervalsState);
    const [root, setRoot] = useRecoilState(rootState);

    const details = ModelUtils.getDetails(root ? root.value as any : [0, 0], (root && intervals) ? intervals.value as any : []);

    return (
        <Fretboard {...props} details={details} />
    );
};

export default Viewer;
