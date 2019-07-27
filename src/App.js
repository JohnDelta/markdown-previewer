import React from 'react';
import './App.css';
import Editor from './Editor.js';
import Previewer from './Previewer.js';

function App() {
  return (
    <div className="App">
		<main>
			<Editor className="Editor" />
			<Previewer className="Previewer" />
		</main>
		<footer>
			fooooter
		</footer>
    </div>
  );
}

export default App;
