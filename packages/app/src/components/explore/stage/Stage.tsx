import QuickInput from "@pw/ui/src/inputs/QuickInput";
import React from "react";
import styled from 'styled-components';
import useEditProps from "../modals/useEditProps";
import Viewer from "../Viewer";

const StyledStage = styled.div`

    width: 100%;
    height: 100%;
    padding: 16px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
	
	.fretboard, .keyboard {
		box-shadow: 0px 0px 30px 30px rgba(0,0,0,0.08);
		max-width: 1024px;
	}
`;


const Stage: React.FC<any> = () => {
    const editProps = useEditProps();
    return (
        <StyledStage>
            <QuickInput {...editProps} />
            <Viewer />
        </StyledStage>
    );
};

export default Stage;
