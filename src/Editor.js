import React from 'react';
import marked from 'marked';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorText : "default value"
		};
		
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange = (e) => {
		this.setState({
			editorText : e.target.value
		});
		
		// transfer the result to parent
		this.props.handleChange(marked(this.state.editorText));
	};
	
	render() {
		return (
			<div className="Panel Editor" id="Editor">
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