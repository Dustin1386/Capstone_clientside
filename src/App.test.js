import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

describe('App', function () {

	it('renders without crashing', () => {
			const div = document.createElement('div')
			(<App />)
			ReactDOM.unmountComponentAtNode(div)
	})
})