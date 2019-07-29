import React from 'react';

class Previewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text : this.props.markedText
		};
	}
	
	render() {
		return (
			<div className="Panel Previewer" id="Previewer">
				<textarea
					id="PreviewerTextArea"
					value={this.state.text}
					>
				</textarea>
			</div>
		);
	}
}

export default Previewer;