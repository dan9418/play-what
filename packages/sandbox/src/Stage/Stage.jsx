import React, { useState } from 'react';
import Docs from '../../../react/src/modules/docs/Docs';
import Explore from '../../../react/src/modules/docs/Explore';
import Menu from '../Menu/Menu';
import './Stage.css';

const TABS = [
	{
		id: 'explore',
		name: 'Explore',
		component: <Explore/>
	},
	{
		id: 'docs',
		name: 'Docs',
		component: <Docs/>
	},
	{
		id: 'about',
		name: 'About',
		component: <div/>
	}
]

const MODELS = [
	{
		id: 'index',
		name: 'index',
		types: [
			{
				id: 'pitch',
				name: 'pitch'
			},
			{
				id: 'degree',
				name: 'degree'
			}
		]
	},
	{
		id: 'pod',
		name: 'pod',
		types: [
			{
				id: 'note',
				name: 'note'
			},
			{
				id: 'interval',
				name: 'interval'
			}
		]
	},
	{
		id: 'podList',
		name: 'podList',
		types: [
			{
				id: 'chord',
				name: 'chord'
			},
			{
				id: 'scale',
				name: 'scale'
			}
		]
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
