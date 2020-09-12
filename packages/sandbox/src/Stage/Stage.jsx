import React from 'react';
import Parse from '@pw/parse';
import { TEST } from '../Common/Presets';
import Menu from '../Menu/Menu';
import './Stage.css';
import ViewerManager from './ViewerManager';

const Stage = () => {
	const rawSource = TEST;
	const parsedSource = Parse.json(rawSource);
	return (
		<div className="stage">
			<ViewerManager parsedSource={parsedSource} />
			<Menu />
		</div>
	);
};

export default Stage;
