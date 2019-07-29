import React from 'react';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorText : ""
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	/*Initialize editor-previewer value*/
	componentWillMount() {
		this.setState({
			editorText : "default value"
		});
		this.props.handleChange(this.state.editorText);
	}
	
	/*If the state change, inform the parent*/
	componentDidUpdate() {
		if(this.props.editorText !== this.state.editorText) {
			this.props.handleChange(this.state.editorText);
		}
	}
	
	handleChange = (e) => {
		this.setState({
			editorText : e.target.value
		});
		this.props.handleChange(this.state.editorText);
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