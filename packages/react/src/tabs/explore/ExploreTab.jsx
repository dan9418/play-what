import React from 'react';
import { CellContextProvider } from '../../other/CellContext';
import './ExploreTab.css';
import IntervalsPanel from './panels/IntervalsPanel';
import KeyCenterPanel from './panels/KeyCenterPanel';
import NotesPanel from './panels/NotesPanel';

const Explore = () => {
	return (
		<div className='explore-tab'>
			<CellContextProvider>
				<h2>Key Center</h2>
				<KeyCenterPanel />
				<h2>Intervals</h2>
				<IntervalsPanel />
				<h2>Notes</h2>
				<NotesPanel />
			</CellContextProvider>
		</div>
	);
};

export default Explore;
