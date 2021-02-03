import BlockUtils from '@pw/core/src/Block.utils';
import React from 'react';
import Table from '../../ui/Table';

const SectionTable = ({ section, setSection }) => {
	const cols = <>
		<th>#</th>
		<th>Name</th>
	</>;

	const rows = section.data.map((b, i) => {
		return (
			<tr key={i}>
				<td>{i}</td>
				<td>{BlockUtils.getName(b)}</td>
			</tr>
		);
	})

	return (
		<Table
			cols={cols}
			rows={rows}
		/>
	);
};

export default SectionTable;
