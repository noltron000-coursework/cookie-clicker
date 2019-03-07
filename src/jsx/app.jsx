// import react modules
import React, { Component } from 'react';

// import components
// import Setup from '../jsx/setup.jsx';
import Title from '../jsx/title.jsx';

// import other stored files
import '../css/app.css';

// create base for the application
class App extends Component {
	render() {
		return (
			<div >
				{/* <Setup /> */}
				<Title />
			</div>
		);
	}
}

export default App;
