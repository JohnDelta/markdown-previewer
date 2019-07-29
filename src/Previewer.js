import React from 'react';
import marked from 'marked';

class Previewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markedText : ""
		};
	}
	
	/*Initialize previewer with the parent's marked editor text*/
	componentWillMount() {
		this.setState({
			markedText : marked(this.props.editorText)
		});
	}
	
	/*If the text state change, change the marked text state too*/
	componentDidUpdate() {
		if(this.state.markedText !== marked(this.props.editorText)) {
			this.setState({
				markedText : marked(this.props.editorText)
			});
		}
	}
	
	render() {
		return (
			<div className="Panel Previewer" id="Previewer">
				<div 
					id="PreviewerArea"
					className="previewer-textarea"
					dangerouslySetInnerHTML={{__html : this.state.markedText}}
				/>
			</div>
		);
	}
}

export default Previewer;