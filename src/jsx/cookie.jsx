// import react modules
import React, { Component } from 'react'

// import components
import Counter from '../jsx/counter.jsx'
import Clicker from '../jsx/clicker.jsx'

class Cookie extends Component {
	constructor(props) {
		// REQUIRED: always call the parent class' constructor
		super(props)
		// initialize cookies
		this.state = { cookies: 0 }
	}

	increase = () => {
		const count = this.state.cookies + 1
		this.setState({ cookies: count })
	}

	render() {
		return (
			<div >
				<Counter cookies={this.state.cookies} />
				<Clicker increase={this.increase} />
			</div>
		)
	}
}

export default Cookie
