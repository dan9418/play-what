import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import PodListUtils from "../../../core/models/PodList/PodList.utils";
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

    if (!intervals || !intervals.length) return null;

    const details = PodListUtils.getDetails(root || [0, 0], intervals);

    return (
        <Fretboard {...props} details={details} />
    );
};

export default Viewer;
