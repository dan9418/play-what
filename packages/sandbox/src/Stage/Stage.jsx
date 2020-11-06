import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import './Stage.css';
import ExploreTab from '../../../react/src/modules/tabs/ExploreTab';
import DocsTab from '../../../react/src/modules/tabs/DocsTab';

const TABS = [
	{
		id: 'explore',
		name: 'Explore',
		component: <ExploreTab />
	},
	{
		id: 'docs',
		name: 'Docs',
		component: <DocsTab />
	},
	{
		id: 'about',
		name: 'About',
		component: <div />
	}
]

const Stage = () => {
	const [tabIndex, setTabIndex] = useState(0);
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
