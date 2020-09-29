import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import './Stage.css';
import Docs from '@pw/react/src/modules/docs/Docs';
import Cell from '@pw/react/src/modules/docs/Cell';

const TABS = [
	{
		id: 'docs',
		name: 'Docs',
		component: <Docs />
	},
	{
		id: 'cell',
		name: 'Cell',
		component: <Cell/>
	},
	{
		id: 'section',
		name: 'Section',
		component: <Cell/>
	},
	{
		id: 'chart',
		name: 'Chart',
		component: <Cell/>
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
