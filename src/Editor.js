import React from 'react';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorText : "this is the text"
		};
		
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange = (e) => {
		this.setState({
			editorText : this.state.editorText + e.target.value
		});
		console.log(this.state.editorText);
	};
	
	render() {
		return (
			<div className="Editor" id="Editor">
				<textarea
					id="EditorTextArea"
					onChange={this.handleChange}
					value={this.state.editorText}
					>
				</textarea>
			</div>
		);
	}
}

export default Editor;