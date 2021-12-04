import React from "react";
import styled from 'styled-components';
import Fretboard from "../../../../ui/viewers/fretboard/Fretboard";

const StyledViewer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Viewer: React.FC<any> = props => {

    return null;

    return (
        <Fretboard {...props} />
    );
};

export default Viewer;
