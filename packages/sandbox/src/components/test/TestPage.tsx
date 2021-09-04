import React from "react";
import styled from 'styled-components';

const StyledTestPage = styled.div`
	position: fixed;
	top: 96px;
	left: 0;
	right: 0;
	bottom: 0;
	
	height: 100%;
	width: 100%;
`;

const TestPage: React.FC<any> = () => {
    return (
        <StyledTestPage>
            test
        </StyledTestPage>
    );
};

export default TestPage;
