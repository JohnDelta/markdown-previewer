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
			fooooter
		</footer>
    </div>
  );
}

export default App;
