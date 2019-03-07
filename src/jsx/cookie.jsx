// import react modules
import React, { Component } from 'react'

// import components
import Counter from '../jsx/counter.jsx'
import Clicker from '../jsx/clicker.jsx'

class Cookie extends Component {
	constructor(props) {
		// Required step: always call the parent class' constructor
		super(props)

	}
	render() {
		return (
			<div >
				<Counter />
				<Clicker />
			</div>
		)
	}
}

export default Cookie
