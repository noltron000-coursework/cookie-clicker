// import react modules
import React, { Component } from 'react'

class Clicker extends Component {
	increase = () => {
		this.props.increase();
	}

	render() {
		return (
			<div >
				<button onClick={this.increase}>More Cookies!</button>
			</div>
		)
	}
}

export default Clicker
