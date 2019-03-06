// import react modules
import React from 'react'

// import other stored files
import '../css/app.css';
import logo from '../img/logo.svg';

// use es6 function for non-dynamic assets
const Setup = () => {
	return (
		<header className='app-header'>
			<img src={logo} className='app-logo' alt='logo' />
			<p>
				Edit <code>src/App.js</code> and save to reload.
					</p>
			<a
				className='app-link'
				href='https://reactjs.org'
				target='_blank'
				rel='noopener noreferrer'
			>
				Learn React
					</a>
		</header>
	)
}

export default Setup
