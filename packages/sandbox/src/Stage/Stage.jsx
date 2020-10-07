import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import './Stage.css';
import Cell from '@pw/react/src/modules/docs/Cell';

const TABS = [
	{
		id: 'intro',
		name: 'Intro',
		component: <div />
	},
	{
		id: 'explore',
		name: 'Explore',
		component: <Cell/>
	},
	{
		id: 'about',
		name: 'About',
		component: <div/>
	}
]

const Stage = () => {
	const [tabIndex, setTabIndex] = useState(1);
	const tab = TABS[tabIndex];
	return (
		<div className="stage">
			<div>
				<div className="tab-list">
					{TABS.map((t, i) => (
						<div
							className={`tab ${tabIndex === i ? 'active' : ''}`}
							key={t.id}
							onClick={() => setTabIndex(i)}
						>{t.name}</div>
					))}
				</div>
				{tab.component}
			</div>
			<Menu />
		</div>
	);
};

export default Stage;
