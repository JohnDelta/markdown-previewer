import React from 'react';
import './App.css';
import Editor from './Editor.js';
import Previewer from './Previewer.js';
import TabLinks from './TabLinks.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			markedText : ""
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	/*
		Used by children 'Editor' to send the result here, so it can be
		send back to previewer panel
	*/
	handleChange = (e) => {
		this.setState({
			markedText : e
		});
	};
	
	render() {
		return (
			<div className="App">
				<header>
					<TabLinks />
				</header>
				<main>
					<Editor handleChange={this.handleChange}/>
					<Previewer markedText={this.state.markedText}/>
				</main>
				<footer>
					<a 
						href="https://github.com/JohnDelta"
						rel="noopener noreferrer"
						target="_blank" 
						title="visit my site!">
						By John Delta
					</a>
				</footer>
			</div>
		);
	}
}

export default App;
