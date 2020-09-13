import { AppContainer } from 'react-hot-loader';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Main from './Main/Main';

const domContainer = document.querySelector('#app');
ReactDOM.render(
	<AppContainer>
		<Main />
	</AppContainer>,
	domContainer);

console.log('dpb 1', module)


if (module.hot) {
	console.log('dpb 2')

	module.hot.accept('./Main/Main', () => {
		const newContainer = document.querySelector('#app');
		const NewMain = require('./Main/Main').default;
		ReactDOM.render(
			<AppContainer>
				<NewMain />
			</AppContainer>,
			newContainer
		);
	});
}
