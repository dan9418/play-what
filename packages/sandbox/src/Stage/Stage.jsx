import React from 'react';
import Parse from '@pw/parse';
import { TEST } from '../Common/Presets';
import Menu from '../Menu/Menu';
import './Stage.css';
import ViewerManager from './ViewerManager';
import Docs from '@pw/react/src/modules/Docs/Docs';

const Stage = () => {
	const rawSource = TEST;
	const parsedSource = Parse.json(rawSource);
	return (
		<div className="stage">
			{/*<ViewerManager parsedSource={parsedSource} />*/}
			<Docs />
			<Menu />
		</div>
	);
};

export default Stage;
