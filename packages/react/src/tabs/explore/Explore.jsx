import React, { useState } from 'react';
import styled from 'styled-components';
import './Explore.css';
import OutputPanel from './panels/OutputPanel';

const StyledExplore = styled.div`
	width: 100%;
    min-height: 100%;
    margin: 24px auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`;


const Explore = () => {
	return (
		<StyledExplore>
			<OutputPanel />
		</StyledExplore>
	);
};

export default Explore;
