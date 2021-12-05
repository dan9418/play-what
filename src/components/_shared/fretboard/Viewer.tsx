import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import PodListUtils from "../../../core/models/PodList/PodList.utils";
import { intervalsState } from "../../../state/state";
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

    console.log('xxx i', intervals);

    if (!intervals || !intervals.length) return null;

    const details = PodListUtils.getDetails([0, 0], intervals);

    return (
        <Fretboard {...props} details={details} />
    );
};

export default Viewer;
