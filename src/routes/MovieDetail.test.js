import React from 'react'
import ReactDOM from 'react-dom'
import MovieDetail from './MovieDetail'

describe('MovieDetail', function () {

	it('renders without crashing', () => {
			const div = document.createElement('div')
		    (<MovieDetail />)
			ReactDOM.unmountComponentAtNode(div)
	})
})