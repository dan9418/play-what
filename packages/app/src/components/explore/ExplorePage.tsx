import React from "react";
import styled from 'styled-components';
import Menu from './menu/Menu';
import Viewer from "./viewer/Viewer";
import ViewerController from "./viewer/ViewerController";

const StyledExplorePage = styled.div`

	position: fixed;
	top: 160px;
	left: 0;
	right: 0;
	bottom: 0;
	
	height: 100%;
	width: 100%;

	.viewer-list {
        width: 100%;
		max-width: 1024px;
        height: 100%;
        padding: 16px;
        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
		overflow: auto;

		li {
			width: 100%;
			margin: 16px 0;
			border: 1px solid #ccc;
		}
        
        .fretboard, .keyboard {
            //box-shadow: 0px 0px 30px 30px rgba(0,0,0,0.08);
            max-width: 1024px;
        }
    }
`;


const ExplorePage: React.FC<any> = () => {

	return (
		<>
			<Menu />
			<StyledExplorePage>
				<ul className="viewer-list">
					<li><ViewerController /></li>
					<li><ViewerController /></li>
				</ul>
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
