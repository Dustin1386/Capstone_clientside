import React from 'react'
import ReactDOM from 'react-dom'
import UpdatePage from './UpdatePage'

describe('UpdatePage', function () {

	it('renders without crashing', () => {
			const div = document.createElement('div')
			(<UpdatePage />)
			// ReactDOM.unmountComponentAtNode(div)
	})
})