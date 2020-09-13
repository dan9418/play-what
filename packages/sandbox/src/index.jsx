import { hot } from 'react-hot-loader/root';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Main from './Main/Main';

const domContainer = document.querySelector('#app');
const App = hot(() => <Main />);
ReactDOM.render(<App />, domContainer);
