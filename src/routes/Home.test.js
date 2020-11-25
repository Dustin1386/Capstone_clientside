import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'

describe('Home', function () {

	it('renders without crashing', () => {
			const div = document.createElement('div')
			(<Home />)
			ReactDOM.unmountComponentAtNode(div)
	})
})
