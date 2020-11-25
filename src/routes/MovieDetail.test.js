import React from 'react'
import ReactDOM from 'react-dom'
import MovieDetail from './MovieDetail'

describe('MovieDetail', function () {

	it('renders without crashing', () => {
			const div = document.createElement('div')
		    (<MovieDetail />)
			ReactDOM.unmountComponentAtNode(div)
	})
<<<<<<< HEAD
})
=======
})
>>>>>>> 038fb829bdf0b05ec32152a9cb6adc599386f8bf
