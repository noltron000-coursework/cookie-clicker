// import react modules
import React, { Component } from 'react'

// import components
// import Setup from '../jsx/setup.jsx'
import Title from '../jsx/title.jsx'
import Cookie from '../jsx/cookie.jsx'

// import other stored files
import '../css/app.css'

// create base class for the application
class App extends Component {
	render() {
		return (
			<div >
				{/* <Setup /> */}
				<Title />
				<Cookie />
			</div>
		)
	}
}

export default App
