import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main/Main';

console.log('dpb 1', module)

const appContainer = document.querySelector('#app')

if (module.hot) {
	module.hot.accept();
	if (appContainer) ReactDOM.render(<Main />, appContainer);
}
else if (appContainer) {
	ReactDOM.render(<Main />, appContainer);
}
