import React from 'react';
import './App.css';
import Editor from './Editor.js';
import Previewer from './Previewer.js';
import TabLinks from './TabLinks.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			editorText : ""
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	/*Used by the children 'Editor' to update the editor text*/
	handleChange = (e) => {
		this.setState({
			editorText : e
		});
	};
	
	render() {
		return (
			<div className="App">
				<header>
					<TabLinks />
				</header>
				<main>
					<Editor 
						handleChange={this.handleChange}
						editorText={this.state.editorText}
					/>
					<Previewer editorText={this.state.editorText}/>
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
