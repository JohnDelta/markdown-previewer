import React from 'react';
import './App.css';
import Editor from './Editor.js';
import Previewer from './Previewer.js';
import TabLinks from './TabLinks.js';

function App() {
	return (
		<div className="App">
			<header>
				<TabLinks />
			</header>
			<main>
				<Editor />
				<Previewer />
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

export default App;
