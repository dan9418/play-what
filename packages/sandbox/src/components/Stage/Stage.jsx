import React, { useState } from 'react';
import './Stage.css';
import ExploreTab from '../../../../react/src/modules/tabs/ExploreTab';
import DocsTab from '../../../../react/src/modules/tabs/DocsTab';

const TABS = [
	{
		id: 'about',
		name: 'About',
		component: <div />
	},
	{
		id: 'explore',
		name: 'Explore',
		component: <ExploreTab />
	},
	{
		id: 'docs',
		name: 'Docs',
		component: <DocsTab />
	}
];

const Stage = () => {
	const [tabIndex, setTabIndex] = useState(1);
	const tab = TABS[tabIndex];
	return (
		<div className="stage">
			<div className="stage-tabs">
				{TABS.map((t, i) => (
					<div
						className={`tab ${tabIndex === i ? 'active' : ''}`}
						key={t.id}
						onClick={() => setTabIndex(i)}
					>{t.name}</div>
				))}
			</div>
			<div className="stage-content">
				{tab.component}
			</div>
		</div>
	);
};

export default Stage;
