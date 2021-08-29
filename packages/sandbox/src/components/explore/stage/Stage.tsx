import React from "react";
import styled from 'styled-components';
import Viewer from "../Viewer";

const StyledStage = styled.div`

    width: 100%;
    height: 100%;
    padding: 16px 0 70px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
	
	.fretboard, .keyboard {
		box-shadow: 0px 0px 30px 30px rgba(0,0,0,0.08);
		max-width: 1024px;
	}

    .footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 64px;
        
        background: linear-gradient(180deg, rgba(229,232,232,1) 0%, rgba(239,242,242,1) 31%, rgba(229,232,232,1) 100%);	
	    border-top: 1px solid ${({ theme }) => theme.border};
    }
`;


const Stage: React.FC<any> = () => {
    return (
        <StyledStage>
            <Viewer />
            <div className="footer" />
        </StyledStage>
    );
};

export default Stage;
