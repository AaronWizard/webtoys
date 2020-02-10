import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss';
import App from './components/App';

const root = document.getElementById('root');
if (root) {
	ReactDOM.render(
		<App />,
		root,
	);
}
