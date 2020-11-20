import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from '../components/WelcomePage';

describe('WelcomePage', function () {

	it('renders without crashing', () => {
			const div = document.createElement('div');
			(<WelcomePage />);
			ReactDOM.unmountComponentAtNode(div);
	});
});